from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from user_app.serializers import ContactusSerializer, FaqsSerializer, landingPAGESerializer
from user_app.models import Contact_us, FAQs, landingPAGE
from rest_framework import status, generics
from rest_framework.permissions import IsAdminUser


class Contact(APIView):
    
    permission_classes = (IsAdminUser,) 
    def get(self, request):
        try:
            contact_us = Contact_us.objects.all()
            serailizer = ContactusSerializer(contact_us, many=True)
            if serailizer:
                pass
            else:
                raise Exception('error')
        except Exception as e:
            return Response({'error message': str(e)}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'data':serailizer.data})


class ManageContact(APIView):
    permission_classes = (IsAdminUser,) 
    def get(self, request, pk):
        try:
            contact_us = Contact_us.objects.get(id=pk)
            serailizer = ContactusSerializer(contact_us)
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
            contact_us = Contact_us.objects.get(pk=pk)
            serailizer = ContactusSerializer(
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
            contact_us = Contact_us.objects.get(pk=pk)
            contact_us.delete()
        except Exception as e:
            return Response({'message': str(e)})
        else:
            return Response({'message': 'delete data'})

class Faqs(APIView):
    def post(self, request):
        serailizer = FaqsSerializer(data=request.data)
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
            faqs = FAQs.objects.all()
            serailizer = FaqsSerializer(faqs, many=True)
            if serailizer:
                pass
            else:
                raise Exception('error')
        except Exception as e:
            return Response({'error message': str(e)}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'data':serailizer.data}, status=status.HTTP_200_OK)

class ManageFaqs(APIView):
    def get(self, request, pk):
        try:
            faqs = FAQs.objects.get(id=pk)
            serailizer = FaqsSerializer(faqs)
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
            faqs = FAQs.objects.get(pk=pk)
            serailizer = FaqsSerializer(
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
            faqs = FAQs.objects.get(pk=pk)
            faqs.delete()
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'message': 'delete data'}, status=status.HTTP_200_OK)

class Landingpagedata(generics.GenericAPIView):
    serializer_class = landingPAGESerializer
    permission_classes = (IsAdminUser,) 

    def post(self, request , format=None):
        serailizer = landingPAGE(data=request.data)
        try:
            if serailizer.is_valid():
                serailizer.save()
            else:
                raise Exception("errors")

        except Exception as e:
                return Response({'message':serailizer.errors },
                                   status=status.HTTP_404_NOT_FOUND)  
        
        else:
            return Response({'Landing page data': serailizer.data }, status=status.HTTP_201_CREATED)
    
    def get(self, request):
        try:
            faqs = landingPAGE.objects.all()
            serailizer = landingPAGESerializer(faqs, many=True)
            if serailizer:
                pass
            else:
                raise Exception('error')
        except Exception as e:
            return Response({'error message': str(e)}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'Landinfg page data':serailizer.data}, status=status.HTTP_200_OK)