from django.urls import include, path
from rest_framework import routers
from django.contrib import admin

from user_profile import views as user_views
from proxy import views as proxy_views
from product import views as product_views
from blog import views as blog_views

router = routers.DefaultRouter()
router.register(r'groups', user_views.GroupViewSet)

router.register(r'user-profiles', user_views.UserProfileViewSet)
router.register(r'proxy', proxy_views.ProxyViewSet)
router.register(r'product', product_views.ProductViewSet)
# router.register(r'shopify-tutorials/', blog_views),

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
        path('admin/', admin.site.urls),

    path('o/', include('oauth2_provider.urls', namespace='oauth2_provider')),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
