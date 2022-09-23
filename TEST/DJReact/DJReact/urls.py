from django.contrib import admin
from django.urls import path, include, re_path



#### API Documentations ########
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
   openapi.Info(
      title="DJReact API",
      default_version='v1',
      description="DJReact Description",
      terms_of_service="website",
      contact=openapi.Contact(email="contact"),
      license=openapi.License(name="Appropriate License"),
   ),
   public=True,
   permission_classes=[permissions.AllowAny],
)




urlpatterns = [
    path('admin/', admin.site.urls),
    path('account/', include('Account.urls')),


    ## API DOCs ##
    re_path(r'^docs/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    
]