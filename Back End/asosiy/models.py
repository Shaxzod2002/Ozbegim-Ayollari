from django.contrib.auth.models import User
from django.db import models

class Profil(models.Model):
    ism = models.CharField(max_length=40)
    parol = models.CharField(max_length=25)
    nomer = models.CharField(max_length=13)
    def __str__(self): return self.ism


class Konstitsiya_Bolim(models.Model):
    raqam = models.PositiveSmallIntegerField()
    nom = models.CharField(max_length=100)
    def __str__(self): return f"{self.raqam}. {self.nom}"

class Konstitsiya_Bob(models.Model):
    raqam = models.PositiveSmallIntegerField()
    nom = models.CharField(max_length=100)
    bolimFK = models.ForeignKey(Konstitsiya_Bolim, on_delete=models.CASCADE)
    def __str__(self): return f"{self.raqam}. {self.nom}"

class Konstitsiya_Modda(models.Model):
    raqam = models.PositiveSmallIntegerField()
    matn = models.TextField()
    bolimFK = models.ForeignKey(Konstitsiya_Bolim, on_delete=models.CASCADE, null=True, blank=True)
    bobFK = models.ForeignKey(Konstitsiya_Bob, on_delete=models.CASCADE, null=True, blank=True)
    def __str__(self): return f"{self.raqam} - modda"


class Site_Bolim(models.Model):
    nom = models.CharField(max_length=100)
    batafsil = models.CharField(max_length=100)
    rasm = models.FileField()
    def __str__(self): return self.nom

class Izohlar_Site_Bolim(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    izoh = models.CharField(max_length=150)
    vaqti = models.DateField(auto_now_add=True)
    def __str__(self): return self.izoh

