from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from user_app.serializers import LandingPageSerilizer, ContactUsSerializer, AboutUsSerializer,TpmDashboardSerilizer, TemplatesSerilizer, ConsultancySerilizer
from user_app.models import ContactUsModel, AboutUsModel, LandingPageModel, TpmDashboardModel,TemplatesModel,ConsultancyModel
from rest_framework import status, generics
from rest_framework.permissions import IsAdminUser
from rest_framework.parsers import FileUploadParser


class ContactUs(APIView):
    
    # permission_classes = (IsAdminUser,) 
    def get(self, request):
        try:
            contact_us = ContactUsModel.objects.all()
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
            contact_us = ContactUsModel.objects.get(id=pk)
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
            contact_us = ContactUsModel.objects.get(pk=pk)
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
            contact_us = ContactUsModel.objects.get(pk=pk)
            contact_us.delete()
        except Exception as e:
            return Response({'message': str(e)})
        else:
            return Response({'message': 'delete data'})

class aboutUs(APIView):
    def post(self, request):
        serailizer = AboutUsSerializer(data=request.data)
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
            faqs = AboutUsModel.objects.all()
            serailizer = AboutUsSerializer(faqs, many=True)
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
            faqs = AboutUsModel.objects.get(id=pk)
            serailizer = AboutUsSerializer(faqs)
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
            faqs = AboutUsModel.objects.get(pk=pk)
            serailizer = AboutUsSerializer(
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
            faqs = AboutUsModel.objects.get(pk=pk)
            faqs.delete()
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'message': 'delete data'}, status=status.HTTP_200_OK)

class Landingpagedata(APIView):
    
    # permission_classes = (IsAdminUser,) 

    def post(self, request , format=None):
        
        serailizer = LandingPageSerilizer(data=request.data)
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

class ManageLandingpagedata(APIView):
    def get(self, request, pk):
        try:
            dataa = LandingPageModel.objects.get(id=pk)
            serailizer = LandingPageSerilizer(dataa)
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
            dataa = LandingPageModel.objects.get(pk=pk)
            serailizer = LandingPageSerilizer(
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
            dataa = LandingPageModel.objects.get(pk=pk)
            dataa.delete()
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'message': 'delete data'}, status=status.HTTP_200_OK)

class Tpmdashboard(APIView):
    def post(self, request):
        serailizer = TpmDashboardSerilizer(data=request.data)
        try:
            
            if serailizer.is_valid():
                serailizer.save()
            else:
                raise Exception(serailizer.errors)

        except Exception as e:
                return Response({'error_message':serailizer.errors },
                                   status=status.HTTP_404_NOT_FOUND)  
        
        else:
            return Response({'Data':serailizer.data}, status=status.HTTP_201_CREATED)
    
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
            return Response({'data':serailizer.data}, status=status.HTTP_200_OK)

class ManageTpmdashboard(APIView):
    def get(self, request, pk):
        try:
            dataa = TpmDashboardModel.objects.get(id=pk)
            serailizer = TpmDashboardSerilizer(dataa)
            if serailizer:
                pass
            else:
                raise Exception(serailizer.errors)
        except Exception as e:
            return Response({'error message': str(e)}, 
                            status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'message': 'Data', 'data': serailizer.data},
                            status=status.HTTP_200_OK)


    def put(self, request, pk):
        try:
            dataa = TpmDashboardModel.objects.get(pk=pk)
            serailizer = TpmDashboardSerilizer(
                data=request.data, instance=dataa)
            if serailizer.is_valid():
                serailizer.save()
            else:
                raise Exception(serailizer._errors)
        except Exception as e:
            return Response({'error message': str(e)},
                             status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'message': 'update data', 'data': serailizer.data},
                            status=status.HTTP_200_OK)


class Templates(APIView):
    def post(self, request):
        serailizer = TemplatesSerilizer(data=request.data)
        try:
            
            if serailizer.is_valid():
                serailizer.save()
            else:
                raise Exception(serailizer.errors)

        except Exception as e:
                return Response({'error_message':serailizer.errors },
                                   status=status.HTTP_404_NOT_FOUND)  
        
        else:
            return Response({'Data':serailizer.data}, status=status.HTTP_201_CREATED)
    
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
            return Response({'data':serailizer.data}, status=status.HTTP_200_OK)

class ManageTemplates(APIView):
    def get(self, request, pk):
        try:
            dataa = TemplatesModel.objects.get(id=pk)
            serailizer = TemplatesSerilizer(dataa)
            if serailizer:
                pass
            else:
                raise Exception(serailizer.errors)
        except Exception as e:
            return Response({'error message': str(e)}, 
                            status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'message': 'Data', 'data': serailizer.data},
                            status=status.HTTP_200_OK)


    def put(self, request, pk):
        try:
            dataa = TemplatesModel.objects.get(pk=pk)
            serailizer = TemplatesSerilizer(
                data=request.data, instance=dataa)
            if serailizer.is_valid():
                serailizer.save()
            else:
                raise Exception(serailizer._errors)
        except Exception as e:
            return Response({'error message': str(e)},
                             status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'message': 'update data', 'data': serailizer.data},
                            status=status.HTTP_200_OK)

class Consultancy(APIView):
    def post(self, request):
        serailizer = ConsultancySerilizer(data=request.data)
        try:
            
            if serailizer.is_valid():
                serailizer.save()
            else:
                raise Exception(serailizer.errors)

        except Exception as e:
                return Response({'error_message':serailizer.errors },
                                   status=status.HTTP_404_NOT_FOUND)  
        
        else:
            return Response({'Data':serailizer.data}, status=status.HTTP_201_CREATED)
    
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
            return Response({'data':serailizer.data}, status=status.HTTP_200_OK)

class ManageConsultancy(APIView):
    def get(self, request, pk):
        try:
            dataa = ConsultancyModel.objects.get(id=pk)
            serailizer = ConsultancySerilizer(dataa)
            if serailizer:
                pass
            else:
                raise Exception(serailizer.errors)
        except Exception as e:
            return Response({'error message': str(e)}, 
                            status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'message': 'Data', 'data': serailizer.data},
                            status=status.HTTP_200_OK)


    def put(self, request, pk):
        try:
            dataa = ConsultancyModel.objects.get(pk=pk)
            serailizer = ConsultancySerilizer(
                data=request.data, instance=dataa)
            if serailizer.is_valid():
                serailizer.save()
            else:
                raise Exception(serailizer._errors)
        except Exception as e:
            return Response({'error message': str(e)},
                             status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'message': 'update data', 'data': serailizer.data},
                            status=status.HTTP_200_OK)
