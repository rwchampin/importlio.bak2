from django.urls import path, include
from rest_framework.routers import DefaultRouter
from authentication.urls import router as authentication_router

router = DefaultRouter()
# router.register(r'users', UserProfileViewSet)
# router.register(r'groups', GroupViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('', include('authentication.urls')),

]
