import express from 'express'
import { json } from "body-parser"
import { conexion } from "./sequealize"

export default class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8000;
        this.bodyParser();
    }
    bodyParser() {
        this.app.use(json());
    }
    start() {
        this.app.listen(this.port, async () => {
            console.log(`Servidor corriendo en: http//:127.0.0.1:${this.port}`);
            try {
                await conexion.sync();
                console.log("BNase datos sincronizada correctamente");
            } catch (error) {
                console.log(error)
            }
        })
    }
}