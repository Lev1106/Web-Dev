from django.contrib import admin

from api.models import Product, Category

# Register your models here.
admin.site.register(Category)
admin.site.register(Product)