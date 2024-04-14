from django.urls import path
from . import views



urlpatterns = [
    path('list_Etudiant/', views.list_Etudiant, name='list_Etudiant'),
    # path('auth', views.isUser, name='isUser'),  
    # path('verifEmail/', views.verification_Email, name='verification_Email'),  
    # path('resetPassword/', views.resetPassword, name='resetPassword'),  
]





