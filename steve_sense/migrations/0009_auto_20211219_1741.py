# Generated by Django 3.2.6 on 2021-12-19 15:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('steve_sense', '0008_auto_20210929_1813'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='environmental_settings',
            name='auto_sync_rail',
        ),
        migrations.RemoveField(
            model_name='environmental_settings',
            name='light_intensity',
        ),
        migrations.RemoveField(
            model_name='environmental_settings',
            name='light_intensity_time_pattern',
        ),
        migrations.RemoveField(
            model_name='environmental_settings',
            name='light_rail',
        ),
        migrations.RemoveField(
            model_name='environmental_settings',
            name='light_rail_duration',
        ),
        migrations.RemoveField(
            model_name='environmental_settings',
            name='light_rail_on',
        ),
    ]
