from django.urls import path
from .views import Contact_us, Faqs


urlpatterns = [
    path('contact_us/', Contact_us.as_view(), name='contact'),
    path('faqs/', Faqs.as_view(), name="Faqs"),
]
