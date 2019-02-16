from django.db import models

class Quake(models.Model):
    dt = models.DateTimeField()
    lat = models.CharField(max_length=100)
    lon = models.CharField(max_length=100)
    mag = models.DecimalField(decimal_places=10, max_digits=20)
    depth = models.DecimalField(decimal_places=10, max_digits=20)
    location = models.CharField(max_length=1000)

    def __str__(self):
        return "{}, {}, {}".format(
            self.location,
            self.dt,
            self.mag,
        )
    
    def to_dict(self):
        return {
            'id': self.id,
            'dt': self.dt,
            'lat': self.lat,
            'lon': self.lon,
            'mag': self.mag,
            'depth': self.depth,
            'location': self.location,
        }