from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=1000)

class Product(models.Model):
    name = models.CharField(max_length=1000)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField(default=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)