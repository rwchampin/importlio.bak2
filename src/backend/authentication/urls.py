from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserProfileViewSet, UserCreateView, UserUpdateView, CurrentUserProfileViewSet, GroupViewSet

router = DefaultRouter()
router.register(r'users', UserProfileViewSet)
router.register(r'groups', GroupViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('create/', UserCreateView.as_view(), name='create'),
    path('update/<int:pk>/', UserUpdateView.as_view(), name='update'),
    path('current/', CurrentUserProfileViewSet.as_view(), name='current-user'),
]
