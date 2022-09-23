
from django.urls import include, path, re_path
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.views import obtain_auth_token
from .views import newProducts

urlpatterns = [
    
    path('product/', newProducts, name='product'),
    
    
    ### Auth Token ###
    path('account/token/', obtain_auth_token, name='api_token_auth'),
    
]