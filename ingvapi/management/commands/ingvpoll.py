import datetime
import dateutil.parser
import xml.etree.ElementTree as ET

import pytz
import requests
from django.core.management.base import BaseCommand
from django.utils import timezone
from django.db import models

from ingvapi.models import Quake


"""
Note per il recruitment:
Non mi pare di parsare l'XML in maniera molto idiomatica
ma stavo cominciando a passarci troppo tempo.

Di idiomatico (ma al Python) in compenso ho usato enumerate
per aiutarmi a comprendere lo schema XML:
    for i, c in enumerate(event[6]): print(i, c)

"""

# TODO Figure out why lxml was complaining about parsing QuakeML
# ': failed to load external entity "<?xml version="1.0" encoding="US-ASCII" standalone="yes"?>
# <q:quakeml xmlns:q="http://quakeml.org/xmlns/quakeml/1.2"
# from lxml import etree
# QUAKE_SCHEMA = etree.XMLSchema(file='QuakeML-BED-1.2.xsd')
# QUAKE_PARSER = etree.XMLParser(schema=QUAKE_SCHEMA)


BASE_URL = 'http://webservices.ingv.it/fdsnws/event/1/query'

def poll_quakes(t0=None, t1=None):
    if not t0:
        try:
            latest_quake = Quake.objects.latest('dt')

            # TODO find less hacky way to avoid picking up same quake twice
            t0 = latest_quake.dt + datetime.timedelta(seconds=1)
            t0 = t0.isoformat()
        except Quake.DoesNotExist:
            yesterday = timezone.now() - datetime.timedelta(days=1)
            yesterday = yesterday.astimezone(pytz.utc)
            t0 = yesterday.isoformat()

    if not t1:
        now = timezone.now()
        now = now.astimezone(pytz.utc)
        t1 = now.isoformat()
    
    # Remove tz info
    # print('mit tzinfo: ', t0, t1)
    t0 = t0.split('+')[0]
    t1 = t1.split('+')[0]
    # print('ohne tzinfo: ', t0, t1)

    response = requests.get(
        url=BASE_URL,
        params={'starttime': t0, 'endtime': t1}
    )
    
    #print(response.text)
    
    try:
        quakes_etree = ET.fromstring(response.text)
    except ET.ParseError:
        return None
    
    return quakes_etree

def store_quakes(quakes_etree):
    events = [e for e in quakes_etree[0]]

    for e in events:
        origin = e[5]
        magnitude = e[6]

        time_val = origin[2][0].text
        latitude_val = origin[3][0].text
        longitude_val = origin[4][0].text
        depth_val = origin[5][0].text
        try:
            mag_val = magnitude[3][0].text
        except IndexError:
            continue # neanche cnt.rm.ingv.it mostra quest'evento
        
        if float(mag_val) < 2.:
            continue # per non otturare il free tier Heroku

        dt = dateutil.parser.parse(time_val)
        dt = dt.replace(tzinfo=pytz.utc)

        print('New Quake')
        print(dt, latitude_val, longitude_val, depth_val, mag_val)

        quake = Quake(
            dt=dt,
            lat=latitude_val,
            lon=longitude_val,
            mag=mag_val,
            depth=depth_val,
        )

        quake.save()


class Command(BaseCommand):
    help = 'Polls Ingv API for new seismic events'

    def handle(self, *args, **kwargs):
        quakes = poll_quakes()
        if quakes:
            store_quakes()