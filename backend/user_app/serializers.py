from rest_framework import serializers
from . models import *


class ContactusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact_us
        fields = (
            'id',
            'email',
            'issue',
            'name',
            'issue_resolved',
            
        )
    def create(self, validated_data):
        contact = Contact_us.objects.create(**validated_data)
        contact.save()
        return contact

    def update(self, instance, validated_data):
        for k, v in validated_data.items():
            setattr(instance, k, v)
            instance.save()
        return instance



class FaqsSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQs
        fields = (
            'id',
            'question',
            'answer',
        )

class landingPAGESerializer(serializers.ModelSerializer):
    class Meta:
        model = landingPAGE
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
        )