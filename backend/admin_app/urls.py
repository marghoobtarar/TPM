from django.urls import path
from .views import *



urlpatterns = [
    path('contact_us/', ContactUs.as_view(), name='contact'),
    path('manage_contact_us/<int:pk>/', ManageContactUs.as_view(), name='manage contact'),
    path('about_us/', aboutUs.as_view(), name="Faqs"),
    path('manage_about_us/<int:pk>/', ManageaboutUs.as_view(), name="ManageFaqs"),
    path('landing_page/', Landingpagedata.as_view(), name='Landingpagedata'),
    path('manage_landing_page/<int:pk>/', ManageLandingpagedata.as_view(), name='ManageLandingpagedata'),
    path('tpm_dashboard/', Tpmdashboard.as_view(), name='tpmdashboard'),
    path('manage_tpm_dashboard/<int:pk>/', ManageTpmdashboard.as_view(), name='manage_tpm_dashboard'),
    path('templates/', Templates.as_view(), name='templates'),
    path('manage_templates/<int:pk>/', ManageTemplates.as_view(), name='manage_templates'),
    path('consultancy/', Consultancy.as_view(), name='consultancy'),
    path('manage_consultancy/<int:pk>/', ManageConsultancy.as_view(), name='manage_consultancy'),

]
