from django.contrib import admin
from steve_sense.models import Attached_Sensors
# Register your models here.

class SensorsAdmin(admin.ModelAdmin):
    pass

admin.site.register(Attached_Sensors, SensorsAdmin)