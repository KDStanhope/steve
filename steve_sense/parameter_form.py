from django import forms
from .models import Environmental_Settings



class Environmental_Settings_Form(forms.ModelForm):
    class Meta:
        model=Environmental_Settings
        fields=[
            'space',
            'light_timer',
            'light_on',
            'light_duration',
            #
            'circulating_fans',
            'circulating_fans_time_pattern',
            #
            'heating',
            'heating_target',
            'heating_target_deviation',
            #
            'cooling',
            'cooling_target',
            'cooling_target_deviation',
            #
            'extractor_enabled',
            'extractor_timer',
            'extractor_time_pattern',
            #
            'extractor_humidity_control_targeting',
            'extractor_humidity_target_deviation',
        ]
        