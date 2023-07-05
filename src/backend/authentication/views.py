from rest_framework import viewsets, generics, permissions
from rest_framework.response import Response
from .models import UserProfile
from .serializers import UserProfileSerializer, GroupSerializer
from django.contrib.auth.models import Group

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all().order_by('-date_joined')
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

class UserCreateView(generics.CreateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.AllowAny]

class UserUpdateView(generics.RetrieveUpdateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]
    lookup_field = 'pk'

class CurrentUserProfileViewSet(generics.RetrieveAPIView):
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user

class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]
