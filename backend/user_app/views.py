from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import ContactusSerializer
from django.core.mail import send_mail,BadHeaderError
from microdomains.settings import EMAIL_HOST_USER
from .models import FAQs
from .serializers import FaqsSerializer
from rest_framework import status
# Create your views here.
class Contact_us(APIView):
    def post(self, request):
        serailizer = ContactusSerializer(data=request.data)
        try:
                if serailizer.is_valid():
                        serailizer.save()
                else:
                        raise Exception(serailizer.errors)

        except Exception as e:
                return Response({'message':serailizer.errors})  

        else:
                message = serailizer.data['issue']
                send_mail(
                        'Here’s the problem.',
                         message,
                         EMAIL_HOST_USER,
                         ['akmalcheema42@gmail.com']
                        )
                return Response({'message':'save data and send mail'})

class Faqs(APIView):
    def get(self, request):
        try:
            faqs = FAQs.objects.all()
            serailizer = FaqsSerializer(faqs, many=True)
            if serailizer:
                pass
            else:
                raise Exception('error')
        except Exception as e:
            return Response({'error message': str(e)}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'data': serailizer.data}, status=status.HTTP_200_OK)
