from rest_framework import serializers
from . models import *


class ContactUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUsModel
        fields = (
            'id',
            'name',
            'email',
            'subject', 
            'message',
            'created_at',
            'updated_at',
            
        )
    def create(self, validated_data):
        contact = ContactUsModel.objects.create(**validated_data)
        contact.save()
        return contact

    def update(self, instance, validated_data):
        for k, v in validated_data.items():
            setattr(instance, k, v)
            instance.save()
        return instance



class AboutUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutUsModel
        fields = (
            'id',
            'heading',
            'description',
            'created_at',
            'updated_at',
        )
    def create(self, validated_data):
        contact = AboutUsModel.objects.create(**validated_data)
        contact.save()
        return contact

    def update(self, instance, validated_data):
        for k, v in validated_data.items():
            setattr(instance, k, v)
            instance.save()
        return instance

class LandingPageSerilizer(serializers.ModelSerializer):
    class Meta:
        model = LandingPageModel
        fields = (
            'id',
            'heading1',
            'heading2',
            'heading3',
            'heading4',
            'heading5',
            'heading6',
            'heading7',
            'heading8',
            'heading9',
            'description1',
            'description2',
            'description3',
            'description4',
            'description5',
            'description6',
            'description7',
            'description8',
            'description9',
            'image1',
            'image2',
            'image3',
            'image4',
            'image5',
            'image6',
            'image7',
            'image8',
            'created_at',
            'updated_at',
        )
    def create(self, validated_data):
        contact = LandingPageModel.objects.create(**validated_data)
        contact.save()
        return contact

    def update(self, instance, validated_data):
        for k, v in validated_data.items():
            setattr(instance, k, v)
            instance.save()
        return instance


class TpmDashboardSerilizer(serializers.ModelSerializer):
    class Meta:
        model = TpmDashboardModel
        fields = (
            "__all__"
        )
    def create(self, validated_data):
        contact = TpmDashboardModel.objects.create(**validated_data)
        contact.save()
        return contact

    def update(self, instance, validated_data):
        for k, v in validated_data.items():
            setattr(instance, k, v)
            instance.save()
        return instance

class TemplatesSerilizer(serializers.ModelSerializer):
    class Meta:
        model = TemplatesModel
        fields = (
            "__all__"
        )
    def create(self, validated_data):
        contact = TemplatesModel.objects.create(**validated_data)
        contact.save()
        return contact

    def update(self, instance, validated_data):
        for k, v in validated_data.items():
            setattr(instance, k, v)
            instance.save()
        return instance


class ConsultancySerilizer(serializers.ModelSerializer):
    class Meta:
        model = ConsultancyModel
        fields = (
            "__all__"
        )
    def create(self, validated_data):
        contact = ConsultancyModel.objects.create(**validated_data)
        contact.save()
        return contact

    def update(self, instance, validated_data):
        for k, v in validated_data.items():
            setattr(instance, k, v)
            instance.save()
        return instance