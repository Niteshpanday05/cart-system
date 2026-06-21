from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=255)

    description = models.TextField()

    price = models.DecimalField(max_digits=10, decimal_places=2)

    discount_price = models.DecimalField(
        max_digits=10, decimal_places=2, null=True, blank=True
    )

    image = models.URLField()

    category = models.CharField(max_length=100)

    rating = models.FloatField(default=0)

    stock = models.PositiveIntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
