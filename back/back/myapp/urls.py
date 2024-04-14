from django.urls import path
from . import views



urlpatterns = [
    path('list_Etudiant/', views.list_Etudiant, name='list_Etudiant'),
    path('delet_Jery', views.delet_Jery, name='delet_Jery'),  
    path('delet_Admin', views.delet_Admin, name='delet_Admin'),  
    path('delet_Etudiant', views.delet_Etudiant, name='delet_Etudiant'),  
    # path('verifEmail/', views.verification_Email, name='verification_Email'),  
    # path('resetPassword/', views.resetPassword, name='resetPassword'),  
]





