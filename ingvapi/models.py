from django.db import models

class Quake(models.Model):
    dt = models.DateTimeField()
    lat = models.CharField(max_length=100) # TODO: GeoDjango?
    lon = models.CharField(max_length=100)
    mag = models.DecimalField(decimal_places=10, max_digits=20)
    depth = models.DecimalField(decimal_places=10, max_digits=20)

    def __str__(self):
        return str(self.dt) + ' ' + \
               str(self.lat) + ' ' + \
               str(self.lon) + ' ' + \
               str(self.mag) + ' ' + \
               str(self.depth)