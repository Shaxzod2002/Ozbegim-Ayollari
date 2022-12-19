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
    path('get_token/', obtain_auth_token),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0)),


]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
