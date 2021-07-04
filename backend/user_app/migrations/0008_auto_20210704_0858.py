# Generated by Django 3.0.8 on 2021-07-04 08:58

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('user_app', '0007_auto_20210704_0811'),
    ]

    operations = [
        migrations.AlterField(
            model_name='landingpage',
            name='heading1',
            field=models.CharField(default=django.utils.timezone.now, max_length=50),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='landingpage',
            name='heading2',
            field=models.CharField(default=django.utils.timezone.now, max_length=50),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='landingpage',
            name='heading4',
            field=models.CharField(default=django.utils.timezone.now, max_length=50),
            preserve_default=False,
        ),
    ]
