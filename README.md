
# Guide d'installation du défi
## Pour vous connecter à la plateforme, vous devez suivre les étapes suivantes :
D'abord, clonez le dépôt via ce lien :

git clone https://github.com/aliywedad/defi4.git

Le Backend se trouve sous le répertoire

defi4/back/

Le front se trouve sous le répertoire

defi4/front/

Dépendances du Backend :

Naviguez vers le répertoire backend :


cd defi4/back/
Exécutez les commandes suivantes :


pip install -r requirements.txt
pip install pytz
pip install djongo==1.3.6
pip install pymongo==3.12.3
Ensuite, installez les dépendances Python nécessaires avec la commande :


pip install asgiref==3.3.4 bson==0.5.8 dataclasses==0.6 Django==2.2.22 django-cors-headers==3.7.0 djangorestframework==3.12.4 djongo==1.3.1 pymongo==3.11.4 python-dateutil==2.8.1 pytz==2021.1 six==1.16.0 sqlparse==0.2.4
Insérez les données suivantes :

Enregistrez ce collection à l'aide de la commande mongosh dans votre terminal :
[
  {
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
  }
]
Exécutez

python manage.py makemigrations
python manage.py migrate
Puis

Enfin, pour lancer le serveur Django, utilisez la commande :

python manage.py runserver



Naviguez vers le dossier defi4/front et exécutez les commandes suivantes :

Pour démarrer l'application front-end, utilisez la commande :

npm i

npm start

Vous pouvez ensuite naviguer dans l'application comme vous le souhaitez.

Vous pouvez y accéder au frontend de l'application via le lien suivant : 

http://165.232.114.213:3000/

Remarque :

Nous avons rencontré des problèmes pour le déploiement du backend, nous avons fait ce qu'il faut mais cela ne fonctionne pas. Nous ne savons pas si c'est un problème de version ou autre. Néanmoins, le déploiement du frontend fonctionne à merveille.
