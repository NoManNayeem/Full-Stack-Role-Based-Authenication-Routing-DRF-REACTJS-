# Generated by Django 4.1 on 2022-09-23 11:33

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("account", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Profile",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "userType",
                    models.PositiveSmallIntegerField(
                        choices=[(1, "ADMIN"), (2, "MANAGER"), (3, "CLIENT")], default=3
                    ),
                ),
                ("address", models.CharField(blank=True, max_length=100)),
                ("phone", models.CharField(blank=True, max_length=30)),
                (
                    "user",
                    models.OneToOneField(
                        default=0,
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
    ]
