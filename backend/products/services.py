from .models import Product


def get_products():
    return Product.objects.all()