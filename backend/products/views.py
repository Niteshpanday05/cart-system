from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import ProductSerializer
from .services import get_products


class ProductListView(APIView):

    def get(self, request):

        products = get_products()

        serializer = ProductSerializer(
            products,
            many=True
        )

        return Response(serializer.data)