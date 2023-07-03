from django.urls import path
from . import views

urlpatterns = [
    path('all/', views.ProxyListAPIView.as_view(), name='proxy-list'),
    path('<int:pk>/', views.ProxyDetailAPIView.as_view(), name='proxy-detail'),
    path('remove/<int:pk>/', views.ProxyDetailAPIView.as_view(), name='proxy-remove'),
    path('use/<int:pk>/', views.ProxyDetailAPIView.as_view(), name='proxy-use'),
    path('validate/<int:pk>/', views.ProxyDetailAPIView.as_view(), name='proxy-validate'),
    path('populate/', views.ProxyDetailAPIView.as_view(), name='proxy-detail'),
    path('get-random/', views.ProxyDetailAPIView.as_view(), name='proxy-detail'),
    # Add more URL patterns for other proxy-related views
]