from django.urls import path
from . import views



urlpatterns = [
    path('list_users/', views.list_users, name='list_users'),
    path('auth', views.isUser, name='isUser'),  
    path('verifEmail/', views.verification_Email, name='verification_Email'),  
    path('resetPassword/', views.resetPassword, name='resetPassword'),  
]





