from rest_framework.serializers import ModelSerializer
from .models import *

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password', 'first_name', 'last_name']

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


class TibbiySerializer(ModelSerializer):
    class Meta:
        model = Tibbiy
        fields = '__all__'
