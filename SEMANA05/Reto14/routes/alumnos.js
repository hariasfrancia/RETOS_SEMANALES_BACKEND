import { Router } from 'express'
import { anadirAlumno, listarAlumnos, listarAlumnoPorId, actualizarAlumno, eliminarAlumno } from '../controllers/alumnos'

export const alumnos_router = Router()

alumnos_router.route('/alumnos')
    .post(anadirAlumno)
    .get(listarAlumnos)

alumnos_router.route('/alumnos/:id')
    .get(listarAlumnoPorId)
    .put(actualizarAlumno)
    .delete(eliminarAlumno)
