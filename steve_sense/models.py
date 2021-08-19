# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models
from django_pandas.managers import DataFrameManager


class Atmospheric(models.Model):
    time = models.DateTimeField(unique=True, primary_key=True)
    temperature = models.DecimalField(max_digits = 6, decimal_places=2, blank=True, null=True)
    humidity = models.DecimalField(max_digits = 6, decimal_places=2, blank=True, null=True)
    kpa = models.DecimalField(max_digits = 8, decimal_places=2, blank=True, null=True)
    vpd = models.DecimalField(max_digits = 8, decimal_places=2, blank=True, null=True)

    objects = DataFrameManager()
    
    class Meta:
        app_label = 'steve_sense'

class Atmospheric_Live(models.Model):
    time = models.DateTimeField(unique=True, primary_key=True)
    live_temperature = models.DecimalField(max_digits = 6, decimal_places=2, blank=True, null=True)
    live_humidity = models.DecimalField(max_digits = 6, decimal_places=2, blank=True, null=True)
    live_kpa = models.DecimalField(max_digits = 8, decimal_places=2, blank=True, null=True)
    live_vpd = models.DecimalField(max_digits = 8, decimal_places=2, blank=True, null=True)

    objects = DataFrameManager()
    
    class Meta:
        app_label = 'steve_sense'