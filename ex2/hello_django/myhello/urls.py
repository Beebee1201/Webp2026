from django.urls import path
from . import views

urlpatterns = [
    path('67',views.myIndex, name='index'),
    path('',views.my_api, name='api'),
    path('add',views.add_post, name='add_post'),
    path('list',views.list_post, name='list_post'),
]