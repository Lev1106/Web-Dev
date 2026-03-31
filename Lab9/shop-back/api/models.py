from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=1000, verbose_name="Category Name")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"

class Product(models.Model):
    name = models.CharField(max_length=1000, verbose_name="Product Name")
    price = models.FloatField(verbose_name="Product Price")
    description = models.TextField(verbose_name="Product Description")
    count = models.IntegerField(verbose_name="Product Count")
    is_active = models.BooleanField(default=True, verbose_name="Is Active")
    category = models.ForeignKey(Category, on_delete=models.CASCADE, verbose_name="Category")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Product"
        verbose_name_plural = "Products"