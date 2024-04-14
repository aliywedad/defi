from django.urls import path
from . import views



urlpatterns = [
    path('list_Etudiant/', views.list_Etudiant, name='list_Etudiant'),
    path('delet_Jery/', views.delet_Jery, name='delet_Jery'),  
    path('delet_Admin/', views.delet_Admin, name='delet_Admin'),  
    path('delet_Etudiant/', views.delet_Etudiant, name='delet_Etudiant'),  
    path('list_Admin/', views.list_Admin, name='list_Admin'),
    path('list_Jury/', views.list_Jury, name='list_Jury'),
<<<<<<< HEAD
    path('add_etudiant/', views.add_etudiant, name='add_etudiant'),
    path('add_Admin/', views.add_Admin, name='add_Admin'),
    path('add_Jury/', views.add_Jury, name='add_Jury'),
=======
    path('list_Equipe/', views.list_Equipe, name='list_Equipe'),
>>>>>>> 030a34792dbb8ed709220cf748bea6a0e36696aa

    # path('auth', views.isUser, name='isUser'),  
    # path('verifEmail/', views.verification_Email, name='verification_Email'),  
    # path('resetPassword/', views.resetPassword, name='resetPassword'),  
]





