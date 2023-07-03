from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import ProductViewSet

router = DefaultRouter()
router.register('', ProductViewSet)

app_name = 'product'
urlpatterns = [
    path('', include(router.urls)),
]
