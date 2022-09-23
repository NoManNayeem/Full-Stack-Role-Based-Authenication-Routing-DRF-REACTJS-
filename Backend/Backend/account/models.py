from django.db import models
from datetime import datetime
import os
from django.contrib.auth.models import User


############ Profile Model #############
''' Improvising Profile Model with default USER Model to descriminate Admin,Customer, and other user-types '''
class Profile(models.Model):
    class UserType(models.IntegerChoices):
        ADMIN = 1, "ADMIN"
        MANAGER = 2, "MANAGER"
        CLIENT = 3, "CLIENT"
    userType = models.PositiveSmallIntegerField(choices=UserType.choices, default=UserType.CLIENT)
    user = models.OneToOneField(User, on_delete=models.CASCADE, default=0)
    address = models.CharField(max_length=100, blank=True)
    phone = models.CharField(max_length=30, blank=True)
    def __str__(self):
        return self.user.username
        
####### Product Model ########
class Product(models.Model):
    
    name = models.CharField(max_length=100)
    stock = models.PositiveIntegerField(default=0)
    price = models.DecimalField(default=0, max_digits = 15,decimal_places = 2)

    if not os.path.isdir('Images'):
            os.mkdir('Images')
    first_image = models.ImageField(upload_to='Images',blank=True, null=True)
    second_image = models.ImageField(upload_to='Images',blank=True, null=True)
    def __str__(self):
        return str(self.name)