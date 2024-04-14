from django.db import models

# Create your models here.
class User(models.Model): 
    role = models.CharField(default="etudiant",max_length=128)  
    tel = models.IntegerField(default=00000000)  
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128) 
    # You might want to use a more secure method for storing passwords in production

