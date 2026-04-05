from django.contrib import admin

from models import Product, Category

# Register your models here.
admin.site.register(Category)
@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "price", "count", "is_active", "category")
    list_filter = ("is_active", "category")
    search_fields = ("name", "category")