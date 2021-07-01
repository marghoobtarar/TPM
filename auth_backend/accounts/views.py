from decimal import ConversionSyntax
from django.db import connections
from rest_framework import serializers, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import *
from rest_framework.permissions import IsAdminUser,IsAuthenticated 
# from rest_framework_jwt.utils import jwt_decode_handler



class UserGet(APIView):
    permission_classes = (IsAuthenticated, )

   
    def get(self, request, *args, **kwargs):
        try:
            decoded_jwt = jwt_decode_handler(request.headers['Authorization'].split(' ')[1])
            if User.objects.filter(id = decoded_jwt['user_id']).exists():
                user = UserCreateSerializer(User.objects.get( id = decoded_jwt['user_id'])).data
            else:
                raise Exception('User does not exists')
        except Exception as e:
            return Response({'error_message':str(e)}, status= status.HTTP_404_NOT_FOUND)
        else:
            return Response({'data':user}, status= status.HTTP_200_OK)
        

class UpdatePassword(APIView):
    permission_classes = (IsAdminUser, )

    def get_object(self, queryset=None):
        return self.request.user

    def put(self, request, *args, **kwargs):
        try:
            print(request.data)
            self.object = self.get_object()
            decoded_jwt = jwt_decode_handler(request.headers['Authorization'].split(' ')[1])

            serializer = ChangePasswordSerializer( data=request.data)

            if serializer.is_valid():
                old_password = serializer.data["old_password"]
            else:
                raise Exception(serializer.errors)
                
            if not self.object.check_password(old_password):
                print('error')
                return Response({"old_password": "Wrong password."}, 
                                status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            print('error 1')
            return Response({'error':serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

        else:
            self.object.set_password(request.data["new_password"])
            self.object.save()
            return Response({"message":"Password has been updated"},status=status.HTTP_200_OK)
        




class UpdateUser(APIView):
    permission_classes = (IsAdminUser, )
    def get_object(self, queryset=None):
        return self.request.user

    def put(self, request):
        try:
            payload = request.data
            decoded_jwt = jwt_decode_handler(request.headers['Authorization'].split(' ')[1])
            serializer = userchangeSerializer(User.objects.get(id = decoded_jwt['user_id']) , data = payload)
            if serializer.is_valid():
                serializer.save()
            else:
                raise Exception(serializer.errors)
        except Exception as e:
            return Response( {'error message': str(e)} , status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"update data"},status=status.HTTP_204_NO_CONTENT)
        # return Response('testing', status=status.HTTP_400_BAD_REQUEST)


           