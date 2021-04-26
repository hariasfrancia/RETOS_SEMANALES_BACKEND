import { Municipalidad } from "../config/relaciones";
import municipalidad from "../models/municipalidad";
// const municipalidad = []

export const crearMunicipalidad = async (req, res) => {
    try {
        const nuevaMunicipalidad = await Municipalidad.create(req.body);
        return res.status(201).json({
            succes: true,
            content: nuevaMunicipalidad,
            message: "Municipalidad creada exitosamente",
        });
    } catch (error) {
        return res.status(500).json({
            succes: false,
            content: error,
            message: "Hubo un error al registrar la municipalidad",
        });
    }
};

export const listarMunicipalidades = async (req, res) => {
    try {
        const municipalidad = await Municipalidad.findAll()
        return res.json({
            succes: true,
            content: municipalidad,
            message: null,
        })
    } catch (error) {
        return res.json({
            succes: false,
            content: error,
            message: "Error al devolver las Municipalidades",
        });
    }
};

export const listarMunicipalidadPorId = async (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    if (municipalidad[id - 1]) {
        return res.json({
            content: municipalidad[id - 1],
        });
    } else {
        return res.status(404).json({
            message: "Not found*****",
        });
    }
};
// export const listarMunicipalidadPorId = async (req, res) => {
//     const id = req.params.id - 1
//     if (municipalidad[id]) {
//         return res.json({
//             succes: true,
//             content: municipalidad[id],
//             message: null,
//         })
//     }
//     return res.status(404).json({
//         succes: false,
//         content: `La Municipalidad ${id} no existe`
//     })
// };

export const actualizarMunicipalidad = async (req, res) => {
    if (municipalidad[id]) {
        const id = req.params.id - 1
        return res.json({
            content: municipalidad[id]
        })
    }
    return res.status(404).json({
        content: `La Municipalidad ${id} no existe`
    })
};

export const eliminarMunicipalidad = async (req, res) => {
    const id = rq.params.id - 1
    if (municipalidad[id]) {
        const municipalidad_eliminada = municipalidad.splice(id, 1)
        return res.json({
            content: municipalidad_eliminada
        })
    }
    return res.status(404).json({
        content: `La Municipalidad ${id} no existe`
    })
}