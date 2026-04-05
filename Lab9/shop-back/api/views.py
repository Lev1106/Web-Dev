from django.shortcuts import render
from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView

from models import Product, Category
from serializers import ProductSerializer, CategorySerializer


# Create your views here.
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    @action(detail=True, methods=['get'], url_path='products')
    def products(self, request, pk=None):
        category = self.get_object()
        products = category.product_set.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    def get_queryset(self):
        products = super().get_queryset()
        category_id = self.request.GET.get('category')

        if category_id:
            products = products.filter(category_id=category_id)
        active = self.request.GET.get('active')
        if active:
            products = products.filter(is_active=(active == 'true'))
        search = self.request.GET.get('search')
        if search:
            products = products.filter(name__icontains=search.lower())

        return products