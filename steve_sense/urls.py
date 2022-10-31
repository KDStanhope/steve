from django.urls import path
from . import views, sample_submission
from .steve_mon import Steve_Relay_Adapter, heartbeat_module

urlpatterns = [
    path('', views.welcome, name='welcome'),
    path('dashboard/<str:space_name>/', views.dashboard, name='dashboard'),
    path('1', views.index, name='STEVE!'),
    path('2', views.halfDay, name='STEVE!'),
    path('3', views.fullDay, name='STEVE!'),
    #path('last_6_hours', views.last_6_hours, name=''),

    path('logs/<str:space_name>/<str:minute_or_hour>/<int:tdelta>/', views.logs, name='logs'),
    path('last_12_hours', views.last_12_hours, name='json_data12'),
    path('last_24_hours', views.last_24_hours, name='json_data24'),
    path('last_48_hours', views.last_48_hours, name='json_data48'),
    path('latest', views.latest_samples, name=''),
    
    path('parameters', views.parameters, name=''),
    
    path('space_parameters_form/<str:space_name>/', views.space_parameters_form, name='parameters form'),
    
    path('new_device/<str:space_name>/', views.add_device_form, name='new_device'),
    path('new_sensor/<str:space_name>/', views.add_sensor_form, name='new_sensor'),
    
    path('update_device/<str:pk>/', views.update_device_form, name='update_device'),
    path('update_sensor/<str:pk>/', views.update_sensor_form, name='update_sensor'),
    
    path('delete_device/<str:pk>/', views.delete_device_form, name='delete_device'),
    path('delete_sensor/<str:pk>/', views.delete_sensor_form, name='delete_sensor'),
    
    path('sample_submission', sample_submission.sample_log, name='sample_submission'),

    path('device_control/<str:channel>/', views.device_control, name='device_control'),
   
    path('events/<str:device_id>/<str:tdelta>/', views.events, name='events'),

    path('attached_devices/<str:space_name>/', views.attached_devices, name='attached_devices'),
    path('environmental_settings/<str:space_name>/', views.environmental_settings, name='environmental_settings'),
    path('device_events/<str:space_name>/<int:tdelta>/', views.device_events, name='device_events'),
    path('device_events2/<str:space_name>/<str:minute_or_hour>/<int:tdelta>/', views.device_events2, name='device_events2'),
    path('device_monitor_status/', views.device_monitor_status, name='device_monitor_status'),
]