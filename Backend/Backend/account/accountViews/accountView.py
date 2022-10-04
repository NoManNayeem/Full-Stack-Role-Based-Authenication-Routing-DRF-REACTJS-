from functools import partial
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes, renderer_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer
from rest_framework import status
from django.views.decorators.csrf import ensure_csrf_cookie


from django.shortcuts import (get_object_or_404,
                              render,
                              HttpResponseRedirect)
from django.views.decorators.csrf import csrf_exempt

from ..accountSerializers.accountSerializer import ProfileSerializer
from ..models import Profile



@api_view(['GET'])
@ensure_csrf_cookie
@csrf_exempt
@renderer_classes((JSONRenderer,))
@permission_classes((IsAuthenticated,))
def myAccount(request):
    if request.method == 'GET':
        profile = Profile.objects.get(user=request.user)
        serializer = ProfileSerializer(profile, many=True, context= {'request': request})
        return Response(serializer.data)
