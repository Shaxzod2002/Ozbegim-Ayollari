from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
schema_view = get_schema_view(
   openapi.Info(
      title="Snippets API",
      default_version='v1',
      description="Test description",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="contact@snippets.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=[permissions.AllowAny],
)

urlpatterns = [
    path('bolimlar/', Konstitsiya_BolimlarAPIView.as_view()),
    path('bolim/<int:pk>/', Konstitsiya_BolimAPIView.as_view()),
    path('boblar/', Konstitsiya_BoblarAPIView.as_view()),
    path('bob/<int:pk>/', Konstitsiya_BobAPIView.as_view()),
    path('moddalar/', Konstitsiya_ModdalarAPIView.as_view()),
    path('modda/<int:pk>/', Konstitsiya_ModdaAPIView.as_view()),
    path('psixlar/', PsixlarAPIView.as_view()),
    path('psix/<int:pk>/', PsixAPIView.as_view()),
    path('huquqlar/', HuquqlarAPIView.as_view()),
    path('huquq/<int:pk>/', HuquqAPIView.as_view()),
    path('users/', UsersAPIView.as_view()),
    path('tibbiy-muammolar/', TibbiyMuammolarAPIView.as_view()),
    path('tibbiy/<int:pk>/', TibbiyAPIView.as_view()),
    path('hordiqlar/', HordiqlarAPIView.as_view()),
    path('hordiq/<int:pk>/', HordiqAPIView.as_view()),
    path('get_token/', obtain_auth_token),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0)),


]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
