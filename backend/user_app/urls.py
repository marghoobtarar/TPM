from django.urls import path
from .views import *


urlpatterns = [
    path('contact_Us/', ContactUs.as_view(), name='contact'),
    path('about_Us/', aboutUs.as_view(), name="about"),
    path('landing_page/', Landingpagedata.as_view(), name='Landingpagedata'),
    path('tpm_dashboard/', Tpmdashboard.as_view(), name='tpmdashboard'),
    path('templates/', Templates.as_view(), name='templates'),
    path('consultancy/', Consultancy.as_view(), name='consultancy'),
    
]
