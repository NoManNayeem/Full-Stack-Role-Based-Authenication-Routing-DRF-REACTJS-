from django.urls import path
from .views.baseViews import *


from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


urlpatterns = [
    path('', getRoutes),
    path('notes/', getNotes),

    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]