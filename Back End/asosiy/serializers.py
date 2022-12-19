from rest_framework.serializers import ModelSerializer
from .models import *
class BolimSerializer(ModelSerializer):
    class Meta:
        model = Konstitsiya_Bolim
        fields = '__all__'

class BobSerializer(ModelSerializer):
    class Meta:
        model = Konstitsiya_Bob
        fields = '__all__'

class ModdaSerializer(ModelSerializer):
    class Meta:
        model = Konstitsiya_Modda
        fields = '__all__'

class PsixSerializer(ModelSerializer):
    class Meta:
        model = Psix
        fields = '__all__'

class HuquqSerializer(ModelSerializer):
    class Meta:
        model = Huquq
        fields = '__all__'
