from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import ping, ProductViewSet

router = DefaultRouter()
router.register("products", ProductViewSet, basename="products")

urlpatterns = [
    path("ping/", ping),
]

urlpatterns += router.urls
