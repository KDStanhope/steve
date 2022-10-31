from django import forms
from .models import Attached_Devices



class Attached_Devices_Form(forms.ModelForm):
    class Meta:
        model=Attached_Devices
        fields=[
            'device_type',
            'device_relay_channel',
            'device_duty_cycle',
            'duty_cycle_pulse_width',
            'duty_cycle_time_period',
            'space',
        ]
        