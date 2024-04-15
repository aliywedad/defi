from django.urls import path
from . import views



urlpatterns = [
    
    path('list_Etudiant/', views.list_Etudiant, name='list_Etudiant'),
    path('delet_Jery/', views.delet_Jery, name='delet_Jery'),  
    path('delet_Admin/', views.delet_Admin, name='delet_Admin'),  
    path('delet_Etudiant/', views.delet_Etudiant, name='delet_Etudiant'),  
    path('list_Admin/', views.list_Admin, name='list_Admin'),
    path('list_Jury/', views.list_Jury, name='list_Jury'),
    path('list_defi/', views.list_defi, name='list_defi'),
    path('add_etudiant/', views.add_etudiant, name='add_etudiant'),
    path('add_Admin/', views.add_Admin, name='add_Admin'),
    path('add_Jury/', views.add_Jury, name='add_Jury'),
    path('list_Equipe/', views.list_Equipe, name='list_Equipe'),
    path('add_Equipe/', views.add_Equipe, name='add_Equipe'),
    path('delet_Equipe/', views.delet_Equipe, name='delet_Equipe'), 
    path('valider_Equipe/', views.valider_Equipe, name='valider_Equipe'),   
    path('create_defi/', views.create_defi, name='create_defi'),
    path('update_etudiant/', views.update_etudiant, name='update_etudiant'),
    path('update_jury/', views.update_jury, name='update_jury'),
    path('update_Admin/', views.update_Admin, name='update_Admin'),
    path('rander/', views.rander, name='rander'),

    path('auth/', views.auth, name='auth'),  
    # path('verifEmail/', views.verification_Email, name='verification_Email'),  
    # path('resetPassword/', views.resetPassword, name='resetPassword'),  
    
]





