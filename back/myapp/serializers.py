from rest_framework import serializers
from .models import *

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
class SoumissionSerializer(serializers.ModelSerializer):
    titre = serializers.SerializerMethodField()
    equipe = serializers.SerializerMethodField()

    class Meta:
        model = Soumission
        fields = '__all__'

    def get_titre(self, obj):
        return obj.défi.titre if obj.défi else None
    
    def get_equipe(self, obj):
        return obj.équipe.nomEquipe if obj.équipe else None
    
class ÉvaluationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Évaluation
        fields ='__all__'

class ÉquipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Équipe
        fields ='__all__'





