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

class landingPAGE(models.Model):
    heading1 = models.CharField(max_length=50,
                                 null=True)
    heading2 = models.CharField(max_length=50,
                                  null=True)
    heading3 = models.CharField(max_length=50,
                                  null=True)
    heading4 = models.CharField(max_length=50,
                                  null=True)
    heading5 = models.CharField(max_length=50,
                                  null=True)
    heading6 = models.CharField(max_length=50,
                                  null=True)
    heading7 = models.CharField(max_length=50,
                                  null=True)
    heading8 = models.CharField(max_length=50,
                                  null=True)
    heading9 = models.CharField(max_length=50,
                                  null=True)
    description1 = models.CharField(max_length=500,
                                  null=True)
    description2 = models.CharField(max_length=500,
                                  null=True)
    description3 = models.CharField(max_length=500,
                                  null=True)
    description4 = models.CharField(max_length=500,
                                  null=True)
    description5 = models.CharField(max_length=500,
                                  null=True)
    description6 = models.CharField(max_length=500,
                                  null=True)
    description7 = models.CharField(max_length=500,
                                  null=True)
    description8 = models.CharField(max_length=500,
                                  null=True)
    description9 = models.CharField(max_length=500,
                                  null=True)
    image1 = models.ImageField(upload_to = 'images',
                                  null= True)
    image2 = models.ImageField(upload_to  = 'images',
                                  null= True)
    image3 = models.ImageField(upload_to  = 'images',
                                  null= True)
    image4 = models.ImageField(upload_to  = 'images',
                                 null= True)
    image5 = models.ImageField(upload_to  = 'images',
                                 null= True)
    image6 = models.ImageField(upload_to  = 'images',
                                 null= True)
    image7 = models.ImageField(upload_to  = 'images',
                                 null= True)
    image8 = models.ImageField(upload_to  = 'images',
                                 null= True)



