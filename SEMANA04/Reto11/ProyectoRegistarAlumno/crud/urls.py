from django.urls import path
from .views import ListarCrearAlumnosController, CrudAlumnoController

urlpatterns = [
    path('alumnos', ListarCrearAlumnosController.as_view()),
    path('alumnos/<int:pk>', CrudAlumnoController)
]