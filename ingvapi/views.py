import dateutil.parser
import json

from django.http import JsonResponse

from .models import Quake


def quake_get(request, id):
    quake = Quake.objects.get(id=id)
    return JsonResponse(quake.to_dict())

def quake_get_many(request, t0, t1):
    dt0 = dateutil.parser.parse(t0)
    dt1 = dateutil.parser.parse(t1)
    
    quakes = Quake.objects\
        .filter(dt__gte=dt0)\
        .filter(dt__lte=dt1)\
        .order_by('dt')[:10]
    return JsonResponse([quake.to_dict() for quake in quakes], safe=False)