from django.shortcuts import render,redirect
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import *

from .models import *
from .serializers import *
class Konstitsiya_BolimlarAPIView(APIView):
    def get(self, request):
        bolimlar=Konstitsiya_Bolim.objects.all()
        ser=BolimSerializer(bolimlar, many=True)
        return Response(ser.data)

class Konstitsiya_BolimAPIView(APIView):
    def get(self, request, pk):
        bolim=Konstitsiya_Bolim.objects.get(id=pk)
        ser=BolimSerializer(bolim)
        return Response(ser.data)



class Konstitsiya_BoblarAPIView(APIView):
    def get(self, request):
        bolimlar = Konstitsiya_Bob.objects.all()
        ser = BobSerializer(bolimlar, many=True)
        return Response(ser.data)



class Konstitsiya_BobAPIView(APIView):
    def get(self, request, pk):
        bolim = Konstitsiya_Bob.objects.get(id=pk)
        ser = BobSerializer(bolim)
        return Response(ser.data)




class Konstitsiya_ModdalarAPIView(APIView):
    def get(self, request):
        bolimlar = Konstitsiya_Modda.objects.all()
        ser = ModdaSerializer(bolimlar, many=True)
        return Response(ser.data)



class Konstitsiya_ModdaAPIView(APIView):
    def get(self, request, pk):
        bolim = Konstitsiya_Modda.objects.get(id=pk)
        ser = ModdaSerializer(bolim)
        return Response(ser.data)
    
class PsixlarAPIView(APIView):
    def get(self, request):
        bolimlar=Psix.objects.all()
        ser=PsixSerializer(bolimlar, many=True)
        return Response(ser.data)

class PsixAPIView(APIView):
    def get(self, request, pk):
        bolim=Psix.objects.get(id=pk)
        ser=PsixSerializer(bolim)
        return Response(ser.data)