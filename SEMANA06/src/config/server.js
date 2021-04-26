import express from 'express'
import { json } from "body-parser"
import { conexion } from "./sequealize"
//import * as prueba from "./relaciones"
import { municipalidad_router } from "../routes/municipalidad";


export default class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8001;
        this.bodyParser();
        this.rutas();
    }
    bodyParser() {
        this.app.use(json());
    }
    rutas() {
        this.app.use(municipalidad_router);
    }
    start() {
        this.app.listen(this.port, async () => {
            console.log(`Servidor corriendo en: http//:127.0.0.1:${this.port}`);
            try {
                await conexion.sync(); //{ force: true }
                console.log("Base datos sincronizada correctamente");
            } catch (error) {
                console.log(error)
            }
        })
    }
}