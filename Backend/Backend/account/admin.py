from django.contrib import admin
from .models import Profile,Product



@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ("user","userType","phone","address")
    list_filter = ("user","userType","phone","address")

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("name","stock","price")
    list_filter = ("name","stock","price")
