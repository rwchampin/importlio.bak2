from django.db import models
from django.contrib.auth.models import AbstractUser


from .managers import CustomUserManager


class CustomUser(AbstractUser):
    username = None
    email = models.EmailField('email address', unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    spouse_name = models.CharField(blank=True, max_length=100)
    date_of_birth = models.DateField(blank=True, null=True)
    
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    
    last_login = models.DateTimeField(auto_now_add=True)
    
    city = models.CharField(blank=True, max_length=100)
    state = models.CharField(blank=True, max_length=100)
    zip = models.CharField(blank=True, max_length=100)
    country = models.CharField(blank=True, max_length=100)
    address = models.CharField(blank=True, max_length=100)
    
    referrals = models.ForeignKey('self', blank=True, null=True, on_delete=models.CASCADE)
    
    account_type = models.CharField(blank=True, max_length=100)
    account_status = models.CharField(blank=True, max_length=100)
    is_free_trial = models.BooleanField(default=False)
    is_paid = models.BooleanField(default=False)
    
    affiliate_id = models.CharField(blank=True, max_length=100)
    

    def __str__(self):
        return self.email