# Generated by Django 3.0.8 on 2021-07-15 21:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AboutUsModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
                ('heading', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=1000)),
                ('image1', models.ImageField(null=True, upload_to='images')),
                ('image2', models.ImageField(null=True, upload_to='images')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='ContactUsModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
                ('name', models.CharField(max_length=250)),
                ('email', models.EmailField(max_length=50)),
                ('subject', models.CharField(max_length=500)),
                ('message', models.CharField(max_length=500)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='LandingPageModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
                ('heading1', models.CharField(max_length=50, null=True)),
                ('heading2', models.CharField(max_length=50, null=True)),
                ('heading3', models.CharField(max_length=50, null=True)),
                ('heading4', models.CharField(max_length=50, null=True)),
                ('heading5', models.CharField(max_length=50, null=True)),
                ('heading6', models.CharField(max_length=50, null=True)),
                ('heading7', models.CharField(max_length=50, null=True)),
                ('heading8', models.CharField(max_length=50, null=True)),
                ('description1', models.CharField(max_length=500, null=True)),
                ('description2', models.CharField(max_length=500, null=True)),
                ('description3', models.CharField(max_length=500, null=True)),
                ('description4', models.CharField(max_length=500, null=True)),
                ('description5', models.CharField(max_length=500, null=True)),
                ('description6', models.CharField(max_length=500, null=True)),
                ('description7', models.CharField(max_length=500, null=True)),
                ('description8', models.CharField(max_length=500, null=True)),
                ('image1', models.ImageField(null=True, upload_to='images')),
                ('image2', models.ImageField(null=True, upload_to='images')),
                ('image3', models.ImageField(null=True, upload_to='images')),
                ('image4', models.ImageField(null=True, upload_to='images')),
                ('image5', models.ImageField(null=True, upload_to='images')),
                ('image6', models.ImageField(null=True, upload_to='images')),
                ('image7', models.ImageField(null=True, upload_to='images')),
                ('image8', models.ImageField(null=True, upload_to='images')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
