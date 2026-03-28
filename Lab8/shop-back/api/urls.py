from api.views import ProductListAPIView, ProductDetailAPIView, CategoryListAPIView, CategoryDetailAPIView, \
    CategoryProductsAPIView
from django.urls import path, include

urlpatterns = [
    path('products/', ProductListAPIView.as_view()),
    path('products/<int:id>/', ProductDetailAPIView.as_view()),
    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:id>/', CategoryDetailAPIView.as_view()),
    path('categories/<int:id>/products/', CategoryProductsAPIView.as_view()),
]