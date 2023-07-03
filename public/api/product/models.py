from django.db import models

class ProductIndex(models.Model):
    id = models.AutoField(primary_key=True)
    product_id = models.ForeignKey('Product', on_delete=models.CASCADE)
    product_url = models.CharField(max_length=200)
    
class Product(models.Model):
    title = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    last_updated = models.DateTimeField(auto_now=True)
    review_count = models.PositiveIntegerField(default=0)
    rating = models.DecimalField(max_digits=2, decimal_places=1)
    availability = models.CharField(max_length=100)
    variants = models.ManyToManyField('self', symmetrical=False, blank=True)

 
  