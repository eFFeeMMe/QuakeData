from django.core.management.base import BaseCommand
from django.db import models

from ingvapi.models import Quake

class Command(BaseCommand):
    help = 'Polls Ingv API for new seismic events'

    def handle(self, *args, **kwargs):
        Quake.objects.all().delete()