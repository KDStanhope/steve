# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models
from django_pandas.managers import DataFrameManager
from django.core.validators import MaxValueValidator, MinValueValidator
from django.contrib.postgres.fields import ArrayField


class Space(models.Model):
    space_name = models.CharField(max_length=24, primary_key=True, unique=True)

    def __str__(self):
        return self.space_name


class Attached_Sensors(models.Model):
    sensor_models = [
        ('firebeetle32_1','Firebeetle32 Model 1'),
        ('dht11d1','D1 Exterior Model 1'),
        ('custom_sensor','Custom Sensor'),
        ]
    id = models.AutoField(unique=True, primary_key=True, blank=True)
    name = models.CharField(max_length=24, unique=True)
    sensor_model = models.CharField(max_length=24, choices=sensor_models)
    space = models.ForeignKey(Space, on_delete=models.CASCADE, blank=True, null=True)
    temperature_sensing = models.BooleanField(default=False, blank=True, null=True)
    humidity_sensing = models.BooleanField(default=False, blank=True, null=True)
    lux_sensing = models.BooleanField(default=False, blank=True, null=True)
    soil_moisture_sensing = models.BooleanField(default=False, blank=True, null=True)
    co2_sensing = models.BooleanField(default=False, blank=True, null=True)
    power_consumption_sensing = models.BooleanField(default=False, blank=True, null=True)

    objects = DataFrameManager()
    
    class Meta:
        app_label = 'steve_sense'


class Attached_Devices(models.Model):
    relay_channels = [
        (1, 'CH1'),
        (2, 'CH2'),
        (3, 'CH3'),
        (4, 'CH4'),
        (5, 'CH5'),
        (6, 'CH6'),
        (7, 'CH7'),
        (8, 'CH8'),
        ]
    types_of_devices = [
        ('light','light'),
        ('light rail','light rail'),
        ('heater','heater'),
        ('extractor','extractor'),
        ('circulating fans','circulating fans'),
        ('aircon','aircon'),
        ('dehumidifier','dehumidifier')
        ]

    id = models.AutoField(unique=True, primary_key=True, blank=True)
    device_type = models.CharField(max_length=24, choices=types_of_devices, unique=True)
    device_relay_channel = models.IntegerField(choices=relay_channels)
    device_duty_cycle = models.BooleanField(default=False, blank=True, null=True)
    duty_cycle_pulse_width = models.DurationField(blank=True, null=True)
    duty_cycle_time_period = models.DurationField(blank=True, null=True) 
    space = models.ForeignKey(Space, on_delete=models.CASCADE, blank=True, null=True)
    
    class Meta:
        app_label = 'steve_sense'


class Environmental_Settings(models.Model):
    id = models.IntegerField(unique=True, primary_key=True, auto_created=True)
    space = models.ForeignKey(Space, on_delete=models.CASCADE, blank=True, null=True)
    light_timer = models.BooleanField(default=False)
    light_on = models.TimeField(blank=True, null=True)
    light_duration = models.DurationField(blank=True, null=True)

    circulating_fans = models.BooleanField(default=False)
    circulating_fans_time_pattern = models.JSONField(blank=True, null=True)

    heating = models.BooleanField(default=False)
    heating_target = models.IntegerField(default=20,validators=[MinValueValidator(0),MaxValueValidator(40)])
    heating_target_deviation = models.DecimalField(max_digits=6, decimal_places=2, default=0.05,validators=[MinValueValidator(0),MaxValueValidator(0.5)])

    cooling = models.BooleanField(default=False)
    cooling_target = models.IntegerField(default=20,validators=[MinValueValidator(0),MaxValueValidator(40)])
    cooling_target_deviation = models.DecimalField(max_digits=6, decimal_places=2, default=0.05,validators=[MinValueValidator(0),MaxValueValidator(0.5)])

    extractor_enabled = models.BooleanField(default=False)
    extractor_timer = models.BooleanField(default=False)
    extractor_time_pattern = models.JSONField(blank=True, null=True)

    extractor_humidity_control_targeting = models.BooleanField(default=False)
    extractor_humidity_target_deviation = models.IntegerField(default=70,validators=[MinValueValidator(0),MaxValueValidator(100)])
    
    extractor_differential_analysis = models.BooleanField(default=False)
    differential_target_deviation = models.DecimalField(max_digits=6, decimal_places=2, default=0.05,validators=[MinValueValidator(0),MaxValueValidator(0.5)])
    temperature_humidity_bias = models.DecimalField(max_digits=6, decimal_places=2, default=0.05,validators=[MinValueValidator(0),MaxValueValidator(0.5)])
    temperature_differential_target = models.IntegerField(default=23,validators=[MinValueValidator(0),MaxValueValidator(40)])
    humidity_differential_target = models.IntegerField(default=60,validators=[MinValueValidator(0),MaxValueValidator(100)])
    differential_extractor_priority = models.BooleanField(default=False)

    vpd_targeting = models.BooleanField(default=False)
    vpd_target = models.DecimalField(max_digits=6, decimal_places=2, default=0.05,validators=[MinValueValidator(0),MaxValueValidator(2)])

    objects = DataFrameManager()
    
    class Meta:
        app_label = 'steve_sense'
        

class Sensor_Logs(models.Model):
    time = models.DateTimeField(unique=True, primary_key=True)
    temperature = models.DecimalField(max_digits=6, decimal_places=2, blank=True, null=True)
    humidity = models.DecimalField(max_digits=6, decimal_places=2, blank=True, null=True)
    vpd = models.DecimalField(max_digits=8, decimal_places=2, blank=True, null=True)
    lux = models.DecimalField(max_digits=9, decimal_places=2, blank=True, null=True)
    soil_moisture = models.DecimalField(max_digits=6, decimal_places=2, blank=True, null=True)
    sensor = models.ForeignKey(Attached_Sensors, on_delete=models.CASCADE)

    objects = DataFrameManager()
    
    class Meta:
        app_label = 'steve_sense'
