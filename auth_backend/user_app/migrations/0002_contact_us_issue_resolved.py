# Generated by Django 3.0.8 on 2021-04-30 05:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='contact_us',
            name='issue_resolved',
            field=models.BooleanField(default=False, null=True),
        ),
    ]
