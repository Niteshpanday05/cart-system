from django.db import transaction
from cart.models import Cart
from .models import Order


@transaction.atomic
def create_order(user):
    cart = Cart.objects.get(user=user)

    total = sum(i.price_at_add * i.quantity for i in cart.items.all())

    order = Order.objects.create(user=user, total=total)

    cart.items.all().delete()

    return order