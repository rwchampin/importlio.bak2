

# Create your views here.
from rest_framework import viewsets
from rest_framework.response import Response

from .models import Product, ProductIndex
from .serializers import ProductSerializer, ProductIndexSerializer
from utils.url_manager import UrlManager

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def post(self, request):
        urls = request.data.get('urls')
        um = UrlManager(urls)
        import pdb; pdb.set_trace()
        


    def create(self, request, *args, **kwargs):
        urls = request.data.get('urls')
        # um = UrlManager(urls)
        import pdb; pdb.set_trace()
        for url in urls:
            # cleaned_url = um.clean_url(url)

            serializer = self.get_serializer(data={'product_urls': cleaned_url})
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)

        return Response(serializer.data, status=201)

class ProductIndexViewSet(viewsets.ModelViewSet):
    queryset = ProductIndex.objects.all()
    serializer_class = ProductIndexSerializer
    # Define any additional view settings and permissions
    
