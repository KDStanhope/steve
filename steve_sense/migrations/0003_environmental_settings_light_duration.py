# Generated by Django 3.2.6 on 2021-09-20 17:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('steve_sense', '0002_remove_environmental_settings_light_duration'),
    ]

    operations = [
        migrations.AddField(
            model_name='environmental_settings',
            name='light_duration',
            field=models.DurationField(blank=True, null=True),
        ),
    ]
