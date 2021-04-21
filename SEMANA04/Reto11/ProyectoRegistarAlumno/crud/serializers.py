from rest_framework import serializers
from .models import AlumnoModel

class MostrarAlumnosSerializers(serializers.ModelSerializer):
    class Meta:
        model = AlumnoModel
        fields = '__all__'