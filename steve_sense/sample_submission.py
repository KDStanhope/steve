import datetime
from datetime import timezone
from django.http.response import JsonResponse
from django.shortcuts import render, HttpResponse
from django.core import serializers

import json
from .models import Sensor_Logs, Attached_Sensors

# the firebeetle
def sample_log(request):
    if request.body:
        data=json.loads(request.body)
        attached_sensor_name=data['sensor_name']
        sensor_model=data['sensor_model']
        if sensor_model == 'firebeetle32_1':
            try:
                sensor_model_obj = Attached_Sensors.objects.get(name=attached_sensor_name)
                time=datetime.datetime.now()
                temperature=data['temperature']
                humidity=data['humidity']
                lux=data['lux']
                vpd = data['vpd']
                sample = Sensor_Logs.objects.create(time=time, sensor=sensor_model_obj, temperature=temperature, humidity=humidity, vpd=vpd, lux=lux)
                sample.save()
            except Exception as e:
                return HttpResponse('Invalid Data: ' + str(e))
        elif sensor_model == 'dht11d1_1':
            try:
                sensor_model_obj = Attached_Sensors.objects.get(name=attached_sensor_name)
                time=datetime.datetime.now()
                temperature=data['ext_temperature']
                humidity=data['ext_humidity']
                sample = Sensor_Logs.objects.create(time=time, sensor=sensor_model_obj, ext_temperature=temperature, ext_humidity=humidity)
                sample.save()
            except Exception as e:
                return HttpResponse('Invalid Data: ' + str(e))
        else:
            return HttpResponse('Invalid sensor_model')
    else:
        return HttpResponse('No Data')
    return HttpResponse('Accepted')

