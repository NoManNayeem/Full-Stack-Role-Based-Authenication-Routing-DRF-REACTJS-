from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    # user = UserSerializer(many=False)
    class Meta:
        model = Product
        fields = "__all__"