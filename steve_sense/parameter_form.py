from django import forms
from .models import Environmental_Settings



class Environmental_Settings_Form(forms.ModelForm):
    class Meta:
        model=Environmental_Settings
        fields=[
            'space',
            'automation',
            'cycle',
            #
            'light_timer',
            'light_on',
            'light_duration',
            #
            'extractor_humidity_control_targeting',
            'extractor_humidity_target',
            'extractor_humidity_target_deviation',
            #
            'extractor_temperature_control_targeting',
            'extractor_temperature_target',
            'extractor_temperature_target_deviation',
        ]
        