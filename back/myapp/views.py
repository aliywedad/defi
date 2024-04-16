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
    # spécialité = models.CharField(max_length=255, choices=SPECIALITE_CHOICES)
    # niveau = models.CharField(max_length=3, choices=NIVEAU_CHOICES)
    # email = models.EmailField(unique=True)
    # nom = models.CharField(max_length=255)
    # prénom = models.CharField(max_length=255)
# Etudiant.objects.create(nom='m',prénom='m',email='m@s.n',spécialité='DSI',niveau='L1',)

# administrater.objects.create(nom='med',prenom='m',email='m@s.n')
# administrater.objects.create(nom='aliy',prenom='m',email='m@1s.n')
# administrater.objects.create(nom='sidi',prenom='m',email='m@2s.n')
# Etudiant.objects.create(nom='med',prénom='m1',email='m1@s.n',spécialité='DSI',niveau='L1',)
# Etudiant.objects.create(nom='aliy',prénom='m2',email='m2@s.n',spécialité='DSI',niveau='L1',)
# Etudiant.objects.create(nom='sidi',prénom='m4',email='m3@s.n',spécialité='DSI',niveau='L1',)
# Jery.objects.create(nom='aliy',prénom='m1',email='m5@s.n')
# Jery.objects.create(nom='sidi',prénom='m2',email='m6@s.n')
# Utilisateur.objects.create(email='etudiant@supnum.mr',motDePasse='etudiant',role='étudiant')
# Utilisateur.objects.create(email='organisateur@supnum.mr',motDePasse='organisateur',role='organisateur')
# Utilisateur.objects.create(email='jury@supnum.mr',motDePasse='jury',role='jury')
@api_view(['GET'])
def list_Etudiant(request):
    etudiant = Etudiant.objects.all()
    serializer = EtudiantSerializer(etudiant, many=True)
    return Response(serializer.data)




@api_view(['POST'])
def auth(request):
    login = request.data.get("login")
    pwd = request.data.get("pwd")

    try:
        user = Utilisateur.objects.get(email=login)
        
        # Check if user exists and password matches
        if user and user.motDePasse == pwd:
            role = user.role
            # Return the role in the response
            return Response({'role': role,"id":user.id}, status=200)
        else:
            # If user does not exist or password does not match, return unauthorized
            return Response("Invalid credentials", status=401)
    except Utilisateur.DoesNotExist:
        # If user does not exist, return not found
        return Response("User does not exist", status=404)
    except Exception as e:
        # Handle any other unexpected errors
        return Response(str(e), status=500)

@api_view(['GET'])
def list_Admin(request):
    admin = administrater.objects.all()
    serializer = administraterSerializer(admin, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def list_Critere(request):
    obj = Critère.objects.all()
    serializer = CritèreSerializer(obj, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def list_defi(request):
    defi = Défi.objects.all()
    serializer = DéfiSerializer(defi, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def list_Jury(request):
    jury = Jery.objects.all()
    serializer = JerySerializer(jury, many=True)
    return Response(serializer.data)

 

@api_view(['POST'])
def add_etudiant(request):
    if request.method == 'POST':
        # Parse the JSON data from the request body
        data = json.loads(request.body)
        print("lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll")
        print(data)
        
        # Extract the data fields from the JSON
        nom = data.get('nom')
        prenom = data.get('prenom')
        email = data.get('email')
        specialite = data.get('specialite')
        niveau = data.get('niveau')
        
        # Create and save the Etudiant object
        try:
            etudiant = Etudiant.objects.create(
                nom=nom,
                prénom=prenom,
                email=email,
                spécialité=specialite,
                niveau=niveau
            )
            
            # Return a JSON response indicating success
            return Response({'message': 'Etudiant added successfully'})
        except:
            return Response({'message': 'Etudiant added successfully'})

    
    else:
        # Return a JSON response with an error message if the request method is not POST
        return Response({'error': 'Only POST requests are allowed for this endpoint'}, status=405)



@api_view(['POST'])
def list_soumissionid(request):
    liste_soumissions_ids=[]
    data = json.loads(request.body)

    id = data.get('id')
    try :
        affectations = AffectationJury.objects.filter(membre_jury__id=id)
        for affectation in affectations:
            liste_soumissions_ids.append(affectation.soumission_id)
        print(liste_soumissions_ids)
        
        print("")
        soumissions = Soumission.objects.filter(id__in=liste_soumissions_ids).distinct()
        serializer = SoumissionSerializer(soumissions, many=True)
        return Response(serializer.data)
    except:
        return Response("no data")
    
# affectations = AffectationJury.objects.filter(membre_jury__id=id_user)
#         for affectation in affectations:
#             liste_soumissions_ids.append(affectation.soumission_id)
#         print("")
#         print(liste_soumissions_ids)
        
#         print("")
#         soumissions = Soumission.objects.filter(id__in=liste_soumissions_ids).distinct()

@api_view(['GET'])
def list_soumission(request):
    soums=Soumission.objects.all()
    for sou in soums:
        print(sou.fileName)
        print(sou.défi.titre)
    serializer = SoumissionSerializer(soums, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def list_criterGrille(request):
    data = json.loads(request.body)

    id = request.data.get('id_defi')
    print("****************************************************************************************************************************************************************************************************************************** id = " ,id)
    print("****************************************************************************************************************************************************************************************************************************** id = " ,id)
    print("****************************************************************************************************************************************************************************************************************************** id = " ,id)

    # defi=Défi.objects.get(id=id)
    # soums=GrilleEvaluation.objects.filter(defi=defi)
 
    # serializer = GrilleEvaluationSerializer(soums, many=True)
    # return Response(serializer.data)





@api_view(['POST'])
def add_Admin(request):
    if request.method == 'POST':
        # Parse the JSON data from the request body
        data = json.loads(request.body)
        print(data)
        
        # Extract the data fields from the JSON
        nom = data.get('nom')
        prenom = data.get('prenom')
        email = data.get('email')
         
        # Create and save the Etudiant object
        try:
            obj = administrater.objects.create(
                nom=nom,
                # prénom=prenom,
                prenom=prenom,
                email=email,
  
            )
            
            # Return a JSON response indicating success
            return Response({'message': 'administrater has error'})
        except:
            return Response({'message': 'administrater has error'})

    
    else:
        # Return a JSON response with an error message if the request method is not POST
        return Response({'error': 'Only POST requests are allowed for this endpoint'}, status=405)

@api_view(['POST'])
def add_Jury(request):
    if request.method == 'POST':
        # Parse the JSON data from the request body
        data = json.loads(request.body)
        
        # Extract the data fields from the JSON
        nom = data.get('nom')
        prenom = data.get('prenom')
        email = data.get('email')
         
        # Create and save the Etudiant object
        try:
            obj = Jery.objects.create(
                nom=nom,
                prénom=prenom,
                email=email,
  
            )
            
            # Return a JSON response indicating success
            return Response({'message': 'jery has created succefuly'})
        except:
            return Response({'message': 'jery has error'})

    
    else:
        # Return a JSON response with an error message if the request method is not POST
        return Response({'error': 'Only POST requests are allowed for this endpoint'}, status=405)



@api_view(['POST'])
def add_affectation(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        idSou = data.get('idSou')
        id_jery = data.get('id_jery')
        soum=Soumission.objects.get(id=idSou)
        jery=Jery.objects.get(id=id_jery)
        print(idSou,id_jery," ")
         
        try:
            obj = AffectationJury.objects.create(
                soumission=soum,
                membre_jury=jery,  
            )
            
            return Response({'message': 'jery has created succefuly'})
        except:
            return Response({'message': 'jery has error'})

    





@api_view(['POST'])
def add_critere(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        score = data.get('score')         
        try:
            obj = Critère.objects.create(
                name=name,
                score=score  
            )
            
            return Response({'message': 'Critère has created succefuly'})
        except:
            return Response({'message': 'Critère has error'})

@api_view(['POST'])
def add_grille(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        id_critere = data.get('id_critere')
        id_defi = data.get('id_defi')  

        critere=Critère.objects.get(id=id_critere)       
        defi=Défi.objects.get(id=id_defi)       
        try:
            obj = GrilleEvaluation.objects.create(
                critere=critere,
                defi=defi  
            )
            
            return Response({'message': 'GrilleEvaluation has created succefuly'})
        except:
            return Response({'message': 'GrilleEvaluation has error'})


@api_view(['POST'])
def delet_Etudiant(request):
    id=request.data.get('id')
    try:
        etudiant = Etudiant.objects.get(id=id).delete()
        return Response('200')
    except:
        return Response('400')
    

@api_view(['POST'])

def delet_Admin(request):
    id=request.data.get("id")
    try:
        obj = administrater.objects.get(id=id).delete()
        return Response('200')
    except:
        return Response('400')
    
@api_view(['POST'])
def delet_Jery(request):
    id=request.data.get("id")
    try:
        obj = Jery.objects.get(id=id).delete()
        return Response('200')
    except:
        return Response('400')
    
# __________________________________________________________equipe________________________________________
    
@api_view(['GET'])
def list_Equipe(request):
    equipe = Équipe.objects.all().order_by('valider')
    serializer = ÉquipeSerializer(equipe, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def delet_Equipe(request):
    id=request.data.get('id')
    try:
        equipe = Équipe.objects.get(id=id).delete()
        return Response('200')
    except:
        return Response('400')

@api_view(['POST'])
def valider_Equipe(request):
    id=request.data.get('id')
    try:
        equipe = Équipe.objects.get(id=id)
        equipe.valider = True
        equipe.save()
        return Response('200')
    except:
        return Response('400')
    
@api_view(['POST'])
def add_Equipe(request):
    if request.method == 'POST':
        # Parse the JSON data from the request body
        data = json.loads(request.body)
        # Extract the data fields from the JSON
        nomEquipe = data.get('nomEquipe')
        l =  data.get('leadID_id')
        a =  data.get('adjointID_id')
        leadID = Etudiant.objects.get(id=l)
        adjointID = Etudiant.objects.get(id=a)
        
        listmembre = data.get('listmembre')

        # Create and save the Etudiant object
        try:
            obj = Équipe.objects.create(
                nomEquipe=nomEquipe,
                leadID=leadID,
                adjointID=adjointID,
  
            )

            for i in listmembre:
                etudiant = Etudiant.objects.get(id=i)
                Inscription.objects.create(
                équipe=obj,
                etudiant=etudiant,
                )

            
            # Return a JSON response indicating success
            return Response({'message': 'equipe has created succefuly'})
        except:
            return Response({'message': 'equipe has error'})


    else:
        # Return a JSON response with an error message if the request method is not POST
        return Response({'error': 'Only POST requests are allowed for this endpoint'}, status=405)

# __________________________________________________________end equipe________________________________________



import os
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def create_defi(request):
    # Access form data including files
    titre = request.POST.get('titre')
    date_debut = request.POST.get('date_debut')
    date_fin = request.POST.get('date_fin')
    desc = request.POST.get('desc')
    notification = request.POST.get('notification', False)
      # Checkbox value

    # Access uploaded file
    uploaded_file = request.FILES['file']

    # Create the directory if it doesn't exist
    file_directory = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'files')
    if not os.path.exists(file_directory):
        os.makedirs(file_directory)

    # Construct the relative file path
    relative_file_path = os.path.join('files', uploaded_file.name)

    # Save the uploaded file with the relative path
    file_path = os.path.join(file_directory, uploaded_file.name)
    with open(file_path, 'wb+') as destination:
        for chunk in uploaded_file.chunks():
            destination.write(chunk)
    print('*************************************************************************')
    print(uploaded_file.name)
    print(file_path)
    try:
        defi_instance = Défi.objects.create(
            titre='Sample Title',
            desc='Sample Description',
            date_debut='2024-04-15',
            date_fin='2024-04-30',
            fileName=uploaded_file.name,
            filePath= file_path,
            )
        return Response('200')
    except:
        print("error")

    return Response({'message': 'Défi created successfully', 'file_path': relative_file_path})

# class Équipe(models.Model):
#     nomEquipe = models.CharField(max_length=255)
#     leadID = models.ForeignKey(Utilisateur, on_delete=models.CASCADE, related_name='lead_teams')
#     adjointID = models.ForeignKey(Utilisateur, on_delete=models.CASCADE, related_name='adjoint_teams')
#     nombreMembres = models.IntegerField()
# print(Etudiant.objects.get(id=11))
# e=Équipe.objects.create(nomEquipe="404",leadID=Etudiant.objects.get(id=11),adjointID=Etudiant.objects.get(id=11),nombreMembres=2)
@api_view(['POST'])
def rander(request):
    # Access form data including files
    date = request.POST.get('date')
    GIT = request.POST.get('GIT')
    d = request.POST.get('DEFI')
    e = request.POST.get('Equipe')
    DEFI=Défi.objects.get(id=e)
    equipe=Équipe.objects.get(id=e)

    print("*******************************************************************************************888")
    print(date,GIT,DEFI,equipe)
 
    uploaded_file = request.FILES['file']

    file_directory = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'files')
    if not os.path.exists(file_directory):
        os.makedirs(file_directory)

    # Construct the relative file path
    relative_file_path = os.path.join('files', uploaded_file.name)

    # Save the uploaded file with the relative path
    file_path = os.path.join(file_directory, uploaded_file.name)
    with open(file_path, 'wb+') as destination:
        for chunk in uploaded_file.chunks():
            destination.write(chunk)
    print('\n')
    print('\n')
    print('\n')
    print('\n')
    print('*************************************************************************')
    print(uploaded_file.name)
    print(file_path)
    print('\n')
    print('\n')
    print('\n')
    #     équipe = models.ForeignKey(Équipe, on_delete=models.CASCADE)
    # défi = models.ForeignKey(Défi, on_delete=models.CASCADE)
    # lienGit = models.CharField(max_length=255)
    # dateSoumission = models.DateTimeField()
    # status = models.CharField(max_length=7, choices=STATUS_CHOICES)
    # fileNmae = models.TextField
    # filePath = models.TextField
    # try:
    defi_instance = Soumission.objects.create(
        équipe=equipe,
        défi=DEFI,
        status="soumis",
        lienGit=date,
        dateSoumission='2024-04-30',
        fileName=uploaded_file.name,
        filePath= file_path,
        )
    print("*****************************************************************************************************************8")
    print(file_path,uploaded_file.name)
    return Response('200')
    # except:
    #     print("error")

    return Response({'message': 'Défi created successfully', 'file_path': relative_file_path})


@api_view(['POST'])
def update_etudiant(request):
    if request.method == 'POST':
        # Extract the updated data from the request body
        data = request.data
        etudiant_id = data.get('id')
        
        try:
            # Retrieve the etudiant object from the database
            etudiant = Etudiant.objects.get(id=etudiant_id)
            
            # Update the etudiant object with the new data
            etudiant.nom = data.get('nom')
            etudiant.prenom = data.get('prenom')
            etudiant.email = data.get('email')
            etudiant.specialite = data.get('specialite')
            etudiant.niveau = data.get('niveau')
            
            # Save the updated etudiant object
            etudiant.save()
            
            # Return a success response
            return Response({'message': 'Etudiant updated successfully'})
        
        except Etudiant.DoesNotExist:
            # Return an error response if the etudiant does not exist
            return Response({'error': 'Etudiant not found'}, status=404)
    
    else:
        # Return a method not allowed response for other HTTP methods
        return Response({'error': 'Only POST requests are allowed for this endpoint'}, status=405)



@api_view(['POST'])
def update_jury(request):
    if request.method == 'POST':
        # Extract the updated data from the request body
        data = request.data
        etudiant_id = data.get('id')
        
        try:
            # Retrieve the etudiant object from the database
            etudiant = Jery.objects.get(id=etudiant_id)
            
            # Update the etudiant object with the new data
            etudiant.nom = data.get('nom')
            etudiant.prenom = data.get('prenom')
            etudiant.email = data.get('email')
 
            
            # Save the updated etudiant object
            etudiant.save()
            
            # Return a success response
            return Response({'message': 'Etudiant updated successfully'})
        
        except Etudiant.DoesNotExist:
            # Return an error response if the etudiant does not exist
            return Response({'error': 'Etudiant not found'}, status=404)
    
    else:
        # Return a method not allowed response for other HTTP methods
        return Response({'error': 'Only POST requests are allowed for this endpoint'}, status=405)

@api_view(['POST'])
def update_Admin(request):
    if request.method == 'POST':
        # Extract the updated data from the request body
        data = request.data
        etudiant_id = data.get('id')
        
        try:
            # Retrieve the etudiant object from the database
            etudiant = administrater.objects.get(id=etudiant_id)
            
            # Update the etudiant object with the new data
            etudiant.nom = data.get('nom')
            etudiant.prenom = data.get('prenom')
            etudiant.email = data.get('email')
 
            
            # Save the updated etudiant object
            etudiant.save()
            
            # Return a success response
            return Response({'message': 'Etudiant updated successfully'})
        
        except Etudiant.DoesNotExist:
            # Return an error response if the etudiant does not exist
            return Response({'error': 'Etudiant not found'}, status=404)
    
    else:
        # Return a method not allowed response for other HTTP methods
        return Response({'error': 'Only POST requests are allowed for this endpoint'}, status=405)



