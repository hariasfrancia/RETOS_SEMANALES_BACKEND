import express from 'express'
import {alumnos_router} from '../routes/alumnos'

export class Server{
    constructor(){
        this.app = express()
        this.puerto = process.env.PORT || 8000
        this.app.use(express.json())
        this.rutas()
    }
    iniciarServidor(){
        this.app.listen(this.puerto,() => {
            console.log(`Servidor corriendo correctamente en el PUERTO: 8000`)
        })
    }
    
    rutas(){
        this.app.get('/', (req, res) => {
            res.send(`Hola, bienvenido a mi API`)
        })
        this.app.use(alumnos_router)
    }
}