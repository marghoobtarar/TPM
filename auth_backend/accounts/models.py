from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

class UserAccountManager(BaseUserManager):
    def create_staffuser(self, email, password):
        user = self.model(email=email)
        user.password = password
        user.set_password(user.password)
        # user.is_admin = True
        user.is_superuser = False
        user.is_staff = True
        user.is_active = True
        user.save()

    def create_superuser(self, email, password=None, **extra_fields):
        user = self.model(email=email)
        # user.password=password
        user.set_password(password)
        user.is_staff = True
        user.is_superuser = True
        user.is_active = True
        user.save()
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')

        email = self.normalize_email(email)
        # print(extra_fields['first_name'],extra_fields['cell_number'])
        user = self.model(email=email, **extra_fields)

        user.set_password(password)
        user.save()

        return user
class NameField(models.EmailField):
    def __init__(self, *args, **kwargs):
        super(NameField, self).__init__(*args, **kwargs)

    def get_prep_value(self, value):
        return str(value).lower()
class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = NameField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255,blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    cell_number = models.CharField(max_length=255, blank=False)
    date_of_birth = models.DateField(max_length=10,null=True, blank=True)
    picture = models.ImageField(upload_to='pic', null=True, blank=True)


    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name','cell_number']

    def get_full_name(self):
        return self.first_name

    def get_short_name(self):
        return self.first_name
    
    def __str__(self):
        return self.email

























#     def create_user(self, email, password=None, **extra_fields):
#         if not email:
#             raise ValueError('Users must have an email address')

#         email = self.normalize_email(email)
#         user = self.model(email=email, **extra_fields)

#         user.set_password(password)
#         user.save()
    
#         return user

# class UserAccount(AbstractBaseUser, PermissionsMixin):
#     email = models.EmailField(max_length=255, unique=True)
#     first_name = models.CharField(max_length=255)
#     last_name = models.CharField(max_length=255)
#     is_active = models.BooleanField(default=True)
#     is_staff = models.BooleanField(default=False)

#     objects = UserAccountManager()

#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = ['first_name', 'last_name']

#     def get_full_name(self):
#         return self.first_name

#     def get_short_name(self):
#         return self.first_name
    
#     def __str__(self):
#         return self.email
