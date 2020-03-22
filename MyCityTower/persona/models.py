from django.db import models

# Create your models here.


class Persona(models.Model):
    nombre = models.CharField(max_length=20)
    Apaterno = models.CharField(max_length=20)
    Amaterno = models.CharField(max_length=20)
