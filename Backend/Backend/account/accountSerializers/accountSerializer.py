from django.contrib.auth.models import User, Group
from rest_framework import serializers
from ..models import Profile


class ProfileSerializer(serializers.ModelSerializer):
    # user = UserSerializer(many=False)
    class Meta:
        model = Profile
        fields = "__all__"