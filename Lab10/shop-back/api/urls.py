from rest_framework.routers import DefaultRouter
from django.urls import path
from views.generics import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView
)

urlpatterns = [
    path('products/', ProductListAPIView.as_view(), name='products_list'),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view(), name='product_detail'),
    path('categories/', CategoryListAPIView.as_view(), name='categories_list'),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view(), name='category_detail'),
    path('categories/<int:category_id>/products/', CategoryProductsAPIView.as_view(), name='category_products'),
]
# ]