from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin


class UserProfileManager(BaseUserManager):
    def create_user(self, email, first_name, last_name, password=None, **extra_fields):
        email = self.normalize_email(email)
        user = self.model(email=email, first_name=first_name, last_name=last_name, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, first_name, last_name, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, first_name, last_name, password, **extra_fields)


class UserProfile(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField('email address', unique=True)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    spouse_name = models.CharField(blank=True, max_length=100)
    date_of_birth = models.DateField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)

    city = models.CharField(blank=True, max_length=100)
    state = models.CharField(blank=True, max_length=100)
    zip = models.CharField(blank=True, max_length=100)
    country = models.CharField(blank=True, max_length=100)
    address = models.CharField(blank=True, max_length=100)

    referrals = models.ForeignKey('self', blank=True, null=True, on_delete=models.CASCADE)
    affiliate_id = models.CharField(blank=True, max_length=100)

    objects = UserProfileManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def __str__(self):
        return self.email

    # Add the remaining fields and definitions from the second version of the code
    groups = models.ManyToManyField(
        'auth.Group',
        blank=True,
        related_name='user_profile_set',
        help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.',
        verbose_name='groups',
    )

    user_permissions = models.ManyToManyField(
        'auth.Permission',
        blank=True,
        related_name='user_profile_set',
        help_text='Specific permissions for this user.',
        verbose_name='user permissions',
        related_query_name='user_profile',
    )
