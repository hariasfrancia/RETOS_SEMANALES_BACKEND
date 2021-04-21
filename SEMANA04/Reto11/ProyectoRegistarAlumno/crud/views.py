#creamos los EndPoint
from .models import AlumnoModel
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
from .serializers import MostrarAlumnosSerializers

class ListarCrearAlumnosController(ListCreateAPIView):
    queryset = AlumnoModel.objects.all()
    serializer_class = MostrarAlumnosSerializers

class CrudAlumnoController(RetrieveUpdateDestroyAPIView):
    queryset = AlumnoModel.objects.all()
    serializer_class = MostrarAlumnosSerializers