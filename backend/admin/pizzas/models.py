from django.db import models
from django.contrib.postgres.fields import ArrayField

class Pizza(models.Model):
    name = models.CharField(max_length=200)
    imageUrl = models.CharField(max_length=200)
    price = models.IntegerField()
    category = models.IntegerField()
    rating = models.IntegerField()
    types = ArrayField(models.IntegerField(), size=2)
    sizes = ArrayField(models.IntegerField(), size=3)
