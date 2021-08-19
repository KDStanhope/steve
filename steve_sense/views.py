import datetime
from datetime import timezone
from django.http.response import JsonResponse
from django.shortcuts import render, HttpResponse
from django.core import serializers

import json
#Note I am using the django-pandas library to try amke shit quicker
from .models import Atmospheric

# Create your views here.
def data_aggregator(data,interval):
    df = data.to_timeseries(index='time',storage='wide')
    resampledData_df = df.resample(interval).mean().round(2)
    resampledData_df = resampledData_df.interpolate('time')
    resampledData_df = resampledData_df.reset_index()
    crispJSONPayload = resampledData_df.to_json(orient = 'records',date_format='iso')
    crispJSONPayload = json.loads(crispJSONPayload)

    return crispJSONPayload

def single_record(data):
    df = data.to_dataframe()
    crispJSONPayload = df.to_json(orient = 'records',date_format='iso')
    crispJSONPayload = json.loads(crispJSONPayload)

    return crispJSONPayload
    

def index(request):
    return render(request, "steve_sense/overview.html", {})

def halfDay(request):
    return render(request, "steve_sense/dailys.html", {})

def fullDay(request):
    return render(request, "steve_sense/dailys1.html", {})

def live(request):
    return render(request, "steve_sense/live.html", {})

def last_12_hours(request):
    time_frame = datetime.datetime.now() - datetime.timedelta(hours=12)
    AtmosphericObjects = Atmospheric.objects.filter(time__gt=time_frame).order_by('-time')
    crispJSONPayload = data_aggregator(AtmosphericObjects,'30S')
    return JsonResponse(crispJSONPayload, safe=False) # No need to aggregate under like 24 hours - it takes long to calculate

def last_24_hours(request):
    time_frame = datetime.datetime.now() - datetime.timedelta(hours=24)
    AtmosphericObjects = Atmospheric.objects.filter(time__gt=time_frame).order_by('-time')
    crispJSONPayload = data_aggregator(AtmosphericObjects,'1T')
    return JsonResponse(crispJSONPayload, safe=False) # No need to aggregate under like 24 hours - it takes long to calculate

def last_48_hours(request):
    time_frame = datetime.datetime.now() - datetime.timedelta(hours=48)
    AtmosphericObjects = Atmospheric.objects.filter(time__gt=time_frame).order_by('-time')
    crispJSONPayload = data_aggregator(AtmosphericObjects,'2T')
    return JsonResponse(crispJSONPayload, safe=False) # No need to aggregate under like 24 hours - it takes long to calculate


def latest_sample(request):
    time_frame = datetime.datetime.now() - datetime.timedelta(hours=2) 
    AtmosphericObjects = Atmospheric.objects.filter(time__gt=time_frame).order_by('-time')[:1]
    crispJSONPayload = single_record(AtmosphericObjects)
    return JsonResponse(crispJSONPayload, safe=False)

def latest_samples(request):
    time_frame = datetime.datetime.now() - datetime.timedelta(hours=1) 
    AtmosphericObjects = Atmospheric.objects.filter(time__gt=time_frame).order_by('-time')[:1]
    crispJSONPayload = single_record(AtmosphericObjects)
    return JsonResponse(crispJSONPayload, safe=False)

