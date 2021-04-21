from django.db import models

# Create your models here.
class AlumnoModel(models.Model):
    alumnoId = models.AutoField(
        primary_key = True,
        unique = True,
        null = False,
        db_column = 'id'
    )
    alumnoNombre = models.CharField(
        max_length = 50,
        null = True,
        db_column = 'nombre',
    )
    alumnoApellidoPaterno = models.CharField(
        max_length = 60,
        null = True,
        db_column = 'apellido paterno'
    )
    alumnoApellidoMaterno = models.CharField(
        max_length = 60,
        null = True,
        db_column = 'apellido materno'
    )
    alumnoEdad = models.IntegerField(
        null = False,
        db_column = 'edad'
    )
    class Meta:
        db_table = 'Alumnos'