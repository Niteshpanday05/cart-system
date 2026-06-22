from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .services import get_cart, add_to_cart


class CartView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        cart = get_cart(request.user)

        data = [
            {
                "id": i.id,
                "product": i.product_name,
                "price": i.price_at_add,
                "quantity": i.quantity,
                "image": i.product.image.url if i.product.image else None,
            }
            for i in cart.items.select_related("product")
        ]

        return Response(data)


class AddToCartView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        cart = get_cart(request.user)

        item = add_to_cart(
            cart,
            request.data["product_id"],
            int(request.data.get("quantity", 1))
        )

        return Response({"message": "Added", "id": item.id})