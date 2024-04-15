pour connecter ala site  on doit cree le base de donne mongodb  appeler "Defi4"
est executer cette commend 

pip install pytz 

pip install djongo==1.3.6 

pip install pymongo==3.12.3 


pip install asgiref==3.3.4 bson==0.5.8 dataclasses==0.6 Django==2.2.22 django-cors-headers==3.7.0 djangorestframework==3.12.4 djongo==1.3.1 pymongo==3.11.4 python-dateutil==2.8.1 pytz==2021.1 six==1.16.0 sqlparse==0.2.4


naviger sur defi4/front
est executer cette commend 

npm i

naviger sur defi4/back
est executer cette commend 

python manage.py makemigrations

python manage.py migrate



_____________________________________________________________________________________________________________________________
utiliser cmd mongosh pour enregistre ces collection


[{
  "_id": {
    "$oid": "661bd91630efebec3607ce03"
  },
  "id": 1,
  "email": "sidi.med@supnum.mr",
  "motDePasse": "22420813",
  "role": "étudiant"
},
{
  "_id": {
    "$oid": "661bd92230efebec3607ce05"
  },
  "id": 2,
  "email": "22014@supnum.mr",
  "motDePasse": "22420813",
  "role": "jury"
},
{
  "_id": {
    "$oid": "661c4d6981a758b55a653232"
  },
  "id": 3,
  "email": "etudiant@supnum.mr",
  "motDePasse": "etudiant",
  "role": "étudiant"
},
{
  "_id": {
    "$oid": "661c4d6981a758b55a653233"
  },
  "id": 4,
  "email": "organisateur@supnum.mr",
  "motDePasse": "organisateur",
  "role": "organisateur"
},
{
  "_id": {
    "$oid": "661c4d6981a758b55a653234"
  },
  "id": 5,
  "email": "jury@supnum.mr",
  "motDePasse": "jury",
  "role": "jury"
}]



_____________________________________________________________________________________________________________________________

python manage.py runserver   

npm start  

apprait naviger l'application comme vous voulais
