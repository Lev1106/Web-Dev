from rest_framework.routers import DefaultRouter

from views import ProductViewSet, CategoryViewSet
from django.urls import path, include
router = DefaultRouter()
router.register('products', ProductViewSet)
router.register('categories', CategoryViewSet)

urlpatterns = [
    path('', include(router.urls))
]