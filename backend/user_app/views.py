from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.mail import send_mail,BadHeaderError
from microdomains.settings import EMAIL_HOST_USER
from .models import *
from .serializers import *
from rest_framework import status
# Create your views here.
class ContactUs(APIView):
    def post(self, request):
        serailizer = ContactUsSerializer(data=request.data)
        try:
                if serailizer.is_valid():
                        serailizer.save()
                else:
                        raise Exception(serailizer.errors)

        except Exception as e:
                return Response({'message':serailizer.errors})  

        else:
                message = serailizer.data['subject']
                send_mail(
                        'Here’s the problem.',
                         message,
                         EMAIL_HOST_USER,
                         ['akmalcheema42@gmail.com']
                        )
                return Response({'message':'save data and send mail'})

class aboutUs(APIView):
    def get(self, request):
        try:
            dataa = AboutUsModel.objects.all()
            serailizer = AboutUsSerializer(dataa, many=True)
            if serailizer:
                pass
            else:
                raise Exception(serailizer.errors)
        except Exception as e:
            return Response({'error message': str(e)}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'data': serailizer.data}, status=status.HTTP_200_OK)
class Landingpagedata(APIView):
    def get(self, request):
        try:
            dataa = LandingPageModel.objects.all()
            serailizer = LandingPageSerilizer(dataa, many=True)
            if serailizer:
                pass
            else:
                raise Exception('error')
        except Exception as e:
            return Response({'error message': str(e)}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'Landinfg page data':serailizer.data}, status=status.HTTP_200_OK)

class Tpmdashboard(APIView):
    def get(self, request):
        try:
            dataa = TpmDashboardModel.objects.all()
            serailizer = TpmDashboardSerilizer(dataa, many=True)
            if serailizer:
                pass
            else:
                raise Exception(serailizer.errors)
        except Exception as e:
            return Response({'error message': str(e)}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'Data':serailizer.data}, status=status.HTTP_200_OK)

class Templates(APIView):
    def get(self, request):
        try:
            dataa = TemplatesModel.objects.all()
            serailizer = TemplatesSerilizer(dataa, many=True)
            if serailizer:
                pass
            else:
                raise Exception(serailizer.errors)
        except Exception as e:
            return Response({'error message': str(e)}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'Data':serailizer.data}, status=status.HTTP_200_OK)

class Consultancy(APIView):
    def get(self, request):
        try:
            dataa = ConsultancyModel.objects.all()
            serailizer = ConsultancySerilizer(dataa, many=True)
            if serailizer:
                pass
            else:
                raise Exception(serailizer.errors)
        except Exception as e:
            return Response({'error message': str(e)}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'Data':serailizer.data}, status=status.HTTP_200_OK)