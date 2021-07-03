from rest_framework import serializers
from . models import Contact_us, FAQs


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