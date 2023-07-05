from rest_framework import serializers
from .models import UserProfile
from django.contrib.auth.models import Group


class UserProfileSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['url', 'email', 'spouse_name', 'date_of_birth', 'is_active', 'is_staff', 'is_superuser', 'is_admin', 'last_login', 'city', 'state', 'zip', 'country', 'address', 'referrals', 'account_type', 'account_status', 'is_free_trial', 'is_paid', 'affiliate_id', 'groups']



class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']