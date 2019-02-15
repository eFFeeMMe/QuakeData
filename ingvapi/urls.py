from django.urls import path
from . import views

urlpatterns = [
    path('quakes/<int:id>', views.quake_get),
    path('quakes/<str:t0>/<str:t1>', views.quake_get_many),
]