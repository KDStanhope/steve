# Generated by Django 3.2.6 on 2021-12-31 18:06

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('steve_sense', '0012_auto_20211231_1803'),
    ]

    operations = [
        migrations.CreateModel(
            name='Space',
            fields=[
                ('space_uuid', models.UUIDField(auto_created=True, primary_key=True, serialize=False, unique=True)),
                ('space_name', models.CharField(max_length=24, unique=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='attached_sensors',
            name='sensor_location',
        ),
        migrations.RemoveField(
            model_name='environmental_settings',
            name='space_id',
        ),
        migrations.AddField(
            model_name='environmental_settings',
            name='differential_extractor_priority',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='environmental_settings',
            name='differential_target_deviation',
            field=models.DecimalField(decimal_places=2, default=0.05, max_digits=6, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(0.5)]),
        ),
        migrations.AddField(
            model_name='environmental_settings',
            name='extractor_differential_analysis',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='environmental_settings',
            name='humidity_differential_target',
            field=models.IntegerField(default=60, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(100)]),
        ),
        migrations.AddField(
            model_name='environmental_settings',
            name='id',
            field=models.IntegerField(auto_created=True, default=1, primary_key=True, serialize=False, unique=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='environmental_settings',
            name='temperature_differential_target',
            field=models.IntegerField(default=23, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(40)]),
        ),
        migrations.AddField(
            model_name='environmental_settings',
            name='temperature_humidity_bias',
            field=models.DecimalField(decimal_places=2, default=0.05, max_digits=6, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(0.5)]),
        ),
        migrations.AlterField(
            model_name='environmental_settings',
            name='extractor_humidity_target_deviation',
            field=models.IntegerField(default=70, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(100)]),
        ),
        migrations.AlterField(
            model_name='sensor_logs',
            name='sensor_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='steve_sense.attached_sensors'),
        ),
        migrations.AddField(
            model_name='attached_devices',
            name='space',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='steve_sense.space'),
        ),
        migrations.AddField(
            model_name='attached_sensors',
            name='space',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='steve_sense.space'),
        ),
        migrations.AddField(
            model_name='environmental_settings',
            name='space',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='steve_sense.space'),
        ),
        migrations.AddField(
            model_name='sensor_logs',
            name='space',
            field=models.OneToOneField(blank=True, default=1, on_delete=django.db.models.deletion.CASCADE, to='steve_sense.space'),
            preserve_default=False,
        ),
    ]