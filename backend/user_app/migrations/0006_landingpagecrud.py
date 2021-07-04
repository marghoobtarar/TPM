# Generated by Django 3.0.8 on 2021-07-04 07:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_app', '0005_faqs'),
    ]

    operations = [
        migrations.CreateModel(
            name='landingPAGECRUD',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('heading1', models.CharField(max_length=50, null=True)),
                ('heading2', models.CharField(max_length=50, null=True)),
                ('heading3', models.CharField(max_length=50, null=True)),
                ('heading4', models.CharField(max_length=50, null=True)),
                ('heading5', models.CharField(max_length=50, null=True)),
                ('heading6', models.CharField(max_length=50, null=True)),
                ('heading7', models.CharField(max_length=50, null=True)),
                ('heading8', models.CharField(max_length=50, null=True)),
                ('heading9', models.CharField(max_length=50, null=True)),
                ('description1', models.CharField(max_length=500, null=True)),
                ('description2', models.CharField(max_length=500, null=True)),
                ('description3', models.CharField(max_length=500, null=True)),
                ('description4', models.CharField(max_length=500, null=True)),
                ('description5', models.CharField(max_length=500, null=True)),
                ('description6', models.CharField(max_length=500, null=True)),
                ('description7', models.CharField(max_length=500, null=True)),
                ('description8', models.CharField(max_length=500, null=True)),
                ('description9', models.CharField(max_length=500, null=True)),
                ('image1', models.ImageField(null=True, upload_to='images')),
                ('image2', models.ImageField(null=True, upload_to='images')),
                ('image3', models.ImageField(null=True, upload_to='images')),
                ('image4', models.ImageField(null=True, upload_to='images')),
                ('image5', models.ImageField(null=True, upload_to='images')),
                ('image6', models.ImageField(null=True, upload_to='images')),
                ('image7', models.ImageField(null=True, upload_to='images')),
                ('image8', models.ImageField(null=True, upload_to='images')),
            ],
        ),
    ]
