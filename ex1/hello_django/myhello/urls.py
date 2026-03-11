from django.urls import path
from . import views

urlpatterns = [
    path('67',views.myIndex, name='index'),
    path('',views.my_api, name='api'),
]