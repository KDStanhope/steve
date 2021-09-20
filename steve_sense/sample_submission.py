import datetime
from datetime import timezone
from django.http.response import JsonResponse
from django.shortcuts import render, HttpResponse
from django.core import serializers

import json
#Note I am using the django-pandas library to try amke shit quicker
from .models import Sensor_Logs

# Create your views here
def sample_log(request):
    if request.body:
        data=json.loads(request.body)
        if data['sensor_id'] != 'firebeetle32_1':
            return HttpResponse('Invalid Sensor')
        else:
            try:
                time=datetime.datetime.now()
                sensor_id=data['sensor_id']
                temperature=data['temperature']
                humidity=data['humidity']
                lux=data['lux']
                vpd = data['vpd']
                sample = Sensor_Logs.objects.create(time=time, sensor_id=sensor_id, temperature=temperature, humidity=humidity, vpd=vpd, lux=lux)
                sample.save()
            except:
                return HttpResponse('Invalid Data')
    else:
        return HttpResponse('No Data')
    return HttpResponse('Accepted')