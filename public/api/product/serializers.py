from rest_framework import serializers
from .models import Product, ProductIndex

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class ProductIndexSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductIndex
        fields = '__all__'