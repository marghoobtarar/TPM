from django.urls import path
from .views import Contact,ManageContact, Faqs, ManageFaqs



urlpatterns = [
    path('contact_us/', Contact.as_view(), name='contact'),
    path('manage_contact_us/<int:pk>/', ManageContact.as_view(), name='manage contact'),
    path('faqs/', Faqs.as_view(), name="Faqs"),
    path('managefaqs/<int:pk>/', ManageFaqs.as_view(), name="ManageFaqs"),

]
