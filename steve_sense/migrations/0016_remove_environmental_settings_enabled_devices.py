# Generated by Django 3.2.6 on 2022-01-01 08:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('steve_sense', '0015_remove_sensor_logs_space'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='environmental_settings',
            name='enabled_devices',
        ),
    ]
