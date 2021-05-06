
import { Router } from "express";
import * as cliente_controller from "../controllers/cliente";

export const cliente_router = Router();

cliente_router.route("/clientes")
    .get(cliente_controller.listarClientes)
    .post(cliente_controller.crearCliente);

cliente_router.route("/clientes/:id")
    .get(cliente_controller.listarClienteId)
    .put(cliente_controller.actualizarCliente)
    .delete(cliente_controller.eliminarCliente);