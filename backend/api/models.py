from __future__ import annotations

from django.db import models
from django.db.models.manager import Manager


class Product(models.Model):
    objects: models.Manager = models.Manager()

    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image_url = models.CharField(max_length=255, blank=True)
    category = models.CharField(max_length=100, blank=True)
    description = models.TextField(blank=True)

    def __str__(self) -> str:
        return str(self.name)
