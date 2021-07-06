from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from user_app.serializers import ContactUsSerializer, landingPAGESerializer, aboutUsSerializer
from user_app.models import ContactUsmodel, landingPAGE, aboutUsmodel
from rest_framework import status, generics
from rest_framework.permissions import IsAdminUser
from rest_framework.parsers import FileUploadParser


class ContactUs(APIView):
    
    # permission_classes = (IsAdminUser,) 
    def get(self, request):
        try:
            contact_us = ContactUsmodel.objects.all()
            serailizer = ContactUsSerializer(contact_us, many=True)
            if serailizer:
                pass
            else:
                raise Exception('error')
        except Exception as e:
            return Response({'error message': str(e)}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'data':serailizer.data})


class ManageContactUs(APIView):
    # permission_classes = (IsAdminUser,) 
    def get(self, request, pk):
        try:
            contact_us = ContactUsmodel.objects.get(id=pk)
            serailizer = ContactUsSerializer(contact_us)
            if serailizer:
                pass
            else:
                raise Exception('error')
        except Exception as e:
            return Response({'error message': str(e)}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'message': 'contact data', 'data': serailizer.data})

    def put(self, request, pk):
        try:
            contact_us = ContactUsmodel.objects.get(pk=pk)
            serailizer = ContactUsSerializer(
                data=request.data, instance=contact_us)
            if serailizer.is_valid():
                serailizer.save()
            else:
                raise Exception(serailizer._errors)
        except Exception as e:
            return Response({'error message': str(e)})
        else:
            return Response({'message': 'update contact data', 'data': serailizer.data})

    def delete(self, request, pk):
        try:
            contact_us = ContactUsmodel.objects.get(pk=pk)
            contact_us.delete()
        except Exception as e:
            return Response({'message': str(e)})
        else:
            return Response({'message': 'delete data'})

class aboutUs(APIView):
    def post(self, request):
        serailizer = aboutUsSerializer(data=request.data)
        try:
            if serailizer.is_valid():
                serailizer.save()
            else:
                raise Exception(serailizer.errors)

        except Exception as e:
                return Response({'message':serailizer.errors },
                                   status=status.HTTP_404_NOT_FOUND)  
        
        else:
            return Response({'Faqs data':serailizer.data}, status=status.HTTP_201_CREATED)
    
    def get(self, request):
        try:
            faqs = aboutUsmodel.objects.all()
            serailizer = aboutUsSerializer(faqs, many=True)
            if serailizer:
                pass
            else:
                raise Exception('error')
        except Exception as e:
            return Response({'error message': str(e)}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'data':serailizer.data}, status=status.HTTP_200_OK)

class ManageaboutUs(APIView):
    def get(self, request, pk):
        try:
            faqs = aboutUsmodel.objects.get(id=pk)
            serailizer = aboutUsSerializer(faqs)
            if serailizer:
                pass
            else:
                raise Exception('error')
        except Exception as e:
            return Response({'error message': str(e)}, 
                            status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'message': 'Faqs data', 'data': serailizer.data},
                            status=status.HTTP_200_OK)


    def put(self, request, pk):
        try:
            faqs = aboutUsmodel.objects.get(pk=pk)
            serailizer = aboutUsSerializer(
                data=request.data, instance=faqs)
            if serailizer.is_valid():
                serailizer.save()
            else:
                raise Exception(serailizer._errors)
        except Exception as e:
            return Response({'error message': str(e)},
                             status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'message': 'update faqs data', 'data': serailizer.data},
                            status=status.HTTP_200_OK)

    def delete(self, request, pk):
        try:
            faqs = aboutUsmodel.objects.get(pk=pk)
            faqs.delete()
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'message': 'delete data'}, status=status.HTTP_200_OK)

class Landingpagedata(APIView):
    
    # permission_classes = (IsAdminUser,) 

    def post(self, request , format=None):
        
        serailizer = landingPAGESerializer(data=request.data)
        try:
            if serailizer.is_valid():
                serailizer.save()
            else:
                raise Exception(serailizer.errors )

        except Exception as e:
                return Response({'message': str(e) },
                                   status=status.HTTP_404_NOT_FOUND)  
        
        else:
            return Response({'Landing page data': serailizer.data }, status=status.HTTP_201_CREATED)
    
    def get(self, request):
        try:
            dataa = landingPAGE.objects.all()
            serailizer = landingPAGESerializer(dataa, many=True)
            if serailizer:
                pass
            else:
                raise Exception('error')
        except Exception as e:
            return Response({'error message': str(e)}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'Landinfg page data':serailizer.data}, status=status.HTTP_200_OK)

class ManageLandingpagedata(APIView):
    def get(self, request, pk):
        try:
            dataa = landingPAGE.objects.get(id=pk)
            serailizer = landingPAGESerializer(dataa)
            if serailizer:
                pass
            else:
                raise Exception('error')
        except Exception as e:
            return Response({'error message': str(e)}, 
                            status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'message': 'Landing page data', 'data': serailizer.data},
                            status=status.HTTP_200_OK)


    def put(self, request, pk):
        try:
            dataa = landingPAGE.objects.get(pk=pk)
            serailizer = landingPAGESerializer(
                data=request.data, instance=dataa)
            if serailizer.is_valid():
                serailizer.save()
            else:
                raise Exception(serailizer._errors)
        except Exception as e:
            return Response({'error message': str(e)},
                             status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'message': 'update faqs data', 'data': serailizer.data},
                            status=status.HTTP_200_OK)

    def delete(self, request, pk):
        try:
            dataa = landingPAGE.objects.get(pk=pk)
            dataa.delete()
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'message': 'delete data'}, status=status.HTTP_200_OK)