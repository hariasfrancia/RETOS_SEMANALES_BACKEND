import { Gerencia } from "../config/relaciones";

export const crearGerencia = async (req, res) => {
    const nuevaGerencia = await Gerencia.create(req.body);
    res.status(201).json({
        succes: true,
        content: nuevaGerencia,
        message: "Gerencia creado exitosamente",
    });
};

