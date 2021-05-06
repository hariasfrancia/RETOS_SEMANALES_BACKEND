import { Router } from "express";
import * as departamento_controller from "../controllers/departamento";

export const departamento_router = Router();

departamento_router.route("/departamento")
    .get(departamento_controller.listarDepartamento)
    .post(departamento_controller.listarDepartamentoIdCliente)
    .post(departamento_controller.crearDepartamento);

departamento_router.route("/departamento/:idDepartamento")

    .put(departamento_controller.actualizarDepartamento)
    .delete(departamento_controller.eliminarDepartamento);