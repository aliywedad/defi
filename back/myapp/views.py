from rest_framework.decorators import api_view 
from rest_framework.response import Response  
from .models import *
from django.contrib.auth import authenticate  
from django.http import HttpRequest, HttpResponse
from .serializers import *
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView
import json
from rest_framework.request import Request
import smtplib
import random


@api_view(['GET'])
def list_Etudiant(request):
    etudiant = Etudiant.objects.all()
    serializer = EtudiantSerializer(etudiant, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def list_Admin(request):
    admin = administrater.objects.all()
    serializer = administraterSerializer(admin, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def list_Jury(request):
    jury = Jery.objects.all()
    serializer = JerySerializer(jury, many=True)
    return Response(serializer.data)


# @api_view(['POST'])
# def isUser(request):
#     email = request.data.get('email')
#     password = request.data.get('password')
#     if email is None or password is None:
#         return Response({"Email or password is missing"}, status=400)
#     try:
#         user = User.objects.get(email=email)
#     except User.DoesNotExist:
#         return Response({"UserNotFound"})
#     if user.password==password:
#         return Response({"Successful"})
#     else:
#         return Response({"passwordIncorrect"})

# @api_view(['POST'])
# def verification_Email(request):
#     email = request.data.get('email')
#     try:
#         user = User.objects.get(email=email)
#     except User.DoesNotExist:
#         return Response({"UserNotFound"})
#     source = "aliysidahmedwedad@gmail.com"
#     receiver = "22086@supnum.mr"
#     subject = "Test"
#     random_number = random.randint(100000, 999999)  # Generate a random 6-digit integer
#     message = f"Code verification is: {random_number}"
#     text = f"Subject: {subject}\n\n{message}"
#     server = smtplib.SMTP("smtp.gmail.com", 587)
#     server.starttls()
#     server.login(source, 'penp rpuu oeym aebp')
#     server.sendmail(source, receiver, text)
#     server.quit()
#     return Response({random_number})

# @api_view(['POST'])
# def resetPassword(request):
#     email = request.data.get('email')
#     newPassword = request.data.get('newPassword')
#     # email = "22033@supnum.mr"
#     # newPassword = "123456"
#     if email is None or newPassword is None:
#         return Response({"Email or password is missing"}, status=400)
#     try:
#         user = User.objects.get(email=email)
#     except User.DoesNotExist:
#         return Response({"UserNotFound"})
#     if user is not None: 
#         user.password=newPassword
#         user.save()
#         return Response({"done!"})
#     else:
#         return Response({newPassword,email,"user is null"})














# # @api_view(['POST'])
# # def create_user(request):
# #     """
# #     Create a new user.
# #     """
# #     serializer = UserSerializer(data=request.data)
# #     if serializer.is_valid():
# #         serializer.save()
# #         return Response(serializer.data, status=201)
# #     return Response(serializer.errors, status=400)
# # # @api_view(['POST'])
