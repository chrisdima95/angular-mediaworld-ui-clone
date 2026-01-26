from rest_framework.decorators import api_view
from rest_framework.response import Response

from rest_framework.viewsets import ModelViewSet
from .models import Product
from .serializers import ProductSerializer

@api_view(["GET"])
def ping(request):
    return Response({"status": "ok"})

class ProductViewSet(ModelViewSet):
    serializer_class = ProductSerializer

    def get_queryset(self):
        qs = Product.objects.all().order_by("id")
        category = self.request.query_params.get("category")
        if category:
            qs = qs.filter(category__iexact=category)
        return qs

