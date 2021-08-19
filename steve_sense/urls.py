from django.urls import path
from . import views

urlpatterns = [
    path('', views.live, name='STEVE!'),
    path('1', views.index, name='STEVE!'),
    path('2', views.halfDay, name='STEVE!'),
    path('3', views.fullDay, name='STEVE!'),
    #path('last_6_hours', views.last_6_hours, name='json_data'),
    path('last_12_hours', views.last_12_hours, name='json_data'),
    path('last_24_hours', views.last_24_hours, name='json_data'),
    path('last_48_hours', views.last_48_hours, name='json_data'),
    path('latest_sample', views.latest_sample, name='json_data'),
    path('latest', views.latest_samples, name='json_data'),
]