from django.urls import path
from .views import *



urlpatterns = [
    path('contact_us/', ContactUs.as_view(), name='contact'),
    path('manage_contact_us/<int:pk>/', ManageContactUs.as_view(), name='manage contact'),
    path('about_us/', aboutUs.as_view(), name="Faqs"),
    path('manage_about_us/<int:pk>/', ManageaboutUs.as_view(), name="ManageFaqs"),
    path('landing_page/', Landingpagedata.as_view(), name='Landingpagedata'),
    path('manage_landing_page/<int:pk>/', ManageLandingpagedata.as_view(), name='ManageLandingpagedata'),


]
