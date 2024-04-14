from rest_framework import serializers
from .models import Utilisateur,Etudiant,Jery,administrater,Défi,Critère,Équipe,Évaluation

class UtilisateurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Utilisateur
        fields ='__all__'
class EtudiantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Etudiant
        fields ='__all__'
class JerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Jery
        fields ='__all__'

class administraterSerializer(serializers.ModelSerializer):
    class Meta:
        model = administrater
        fields ='__all__'

class JerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Jery
        fields ='__all__'


class DéfiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Défi
        fields ='__all__'

class CritèreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Critère
        fields ='__all__'

class DéfiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Défi
        fields ='__all__'

class ÉvaluationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Évaluation
        fields ='__all__'

class ÉquipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Équipe
        fields ='__all__'





