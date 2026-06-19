from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .services import create_order


class CheckoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        order = create_order(request.user)

        return Response({
            "order_id": order.id,
            "total": order.total
        })