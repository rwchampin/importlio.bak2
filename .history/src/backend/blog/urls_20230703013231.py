from django.urls import include, path
from rest_framework import routers
from .views import CategoryViewSet, TagViewSet, PostTypeViewSet, FieldViewSet, PostViewSet

router = routers.DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'tags', TagViewSet)
router.register(r'post-types', PostTypeViewSet)
router.register(r'fields', FieldViewSet)
router.register(r'posts', PostViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
