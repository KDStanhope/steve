from django import forms
from .models import Attached_Sensors



class Attached_Sensors_Form(forms.ModelForm):
    class Meta:
        model=Attached_Sensors
        fields=[
            'sensor_model',
            'name',
            'space',
            'temperature_sensing',
            'humidity_sensing',
            'lux_sensing',
            'soil_moisture_sensing',
            'co2_sensing',
            'power_consumption_sensing',
        ]
        