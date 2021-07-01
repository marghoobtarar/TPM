from django.db import models

# Create your models here.
class Contact_us(models.Model):
    email = models.EmailField(max_length=50,
                             null=False
                            )
    issue = models.CharField(max_length=250,
                             null=False)
    name = models.CharField(max_length=250,
                             null=False
                            )
    issue_resolved = models.BooleanField(default=False,
                                         null= True)

    def __str__(self):
        return self.email

class FAQs(models.Model):
    question = models.CharField(max_length=100,
                                null=False)
    answer = models.CharField(max_length=100,
                              null=False)