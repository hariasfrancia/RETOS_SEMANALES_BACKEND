import { Router } from "express";
import * as municipalidad_controller from "../controllers/municipalidad";

export const municipalidad_router = Router();
municipalidad_router
    .route("/municipalidades")
    .post(municipalidad_controller.crearMunicipalidad)
    .get(municipalidad_controller.listarMunicipalidades);

municipalidad_router
    .route("/municipalidades/:id")
    .get(municipalidad_controller.listarMunicipalidadPorId)
    .put(municipalidad_controller.actualizarMunicipalidad)
    .delete(municipalidad_controller.eliminarMunicipalidad);






    // import { Router } from 'express'
    // import { anadirAlumno, listarAlumnos, listarAlumnoPorId, actualizarAlumno, eliminarAlumno } from '../controllers/alumnos'

    // export const alumnos_router = Router()

    // alumnos_router.route('/alumnos')
    //     .post(anadirAlumno)
    //     .get(listarAlumnos)

    // alumnos_router.route('/alumnos/:id')
    //     .get(listarAlumnoPorId)
    //     .put(actualizarAlumno)
    //     .delete(eliminarAlumno)