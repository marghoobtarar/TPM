from django.urls import path
from .views import ContactUs, aboutUs, Landingpagedata


urlpatterns = [
    path('contact_Us/', ContactUs.as_view(), name='contact'),
    path('about_Us/', aboutUs.as_view(), name="about"),
    path('landing_page/', Landingpagedata.as_view(), name='Landingpagedata'),
]
