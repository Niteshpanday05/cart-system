from django.db import transaction
from .models import Cart, CartItem
from products.models import Product


def get_cart(user):
    cart, _ = Cart.objects.get_or_create(user=user)
    return cart


@transaction.atomic
def add_to_cart(cart, product_id, quantity):
    product = Product.objects.get(id=product_id)

    item, created = CartItem.objects.get_or_create(
        cart=cart,
        product=product,
        defaults={
            "product_name": product.name,
            "price_at_add": product.price,
            "quantity": quantity
        }
    )

    if not created:
        item.quantity = item.quantity + quantity
        item.save(update_fields=["quantity"])  # IMPORTANT

    return item