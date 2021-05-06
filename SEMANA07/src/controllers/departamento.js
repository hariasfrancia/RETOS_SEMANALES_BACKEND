import { Departamento } from "../config/relaciones";

export const crearDepartamento = async (req, res) => {
    try {

        const nuevoDepartamento = await Departamento.create(req.body);
        return res.status(201).json({
            success: true,
            content: nuevoDepartamento,
            message: "Departamento registrado correctamente",
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            content: error,
            message: "Error al registrar el Departamento",
        });
    }

};

export const listarDepartamento = async (req, res) => {
    try {

        const departamentos = await Departamento.findAll();
        return res.json({
            success: true,
            content: departamentos,
            message: null,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            content: error,
            message: "Error al devolver los departamentos",
        });
    }
};

export const listarDepartamentoIdCliente = async (req, res) => {
    const { idCliente } = req.body;

    try {

        const departamento = await Departamento.findAll({
            where: {
                idDepartamento: idDepartamento,
            },
        });

        if (departamento) {
            return res.json({
                success: true,
                content: departamento,
                message: null,
            });
        }
        else {
            return res.json({
                success: false,
                content: null,
                message: `El cliente con id ${idCliente} no tiene departamento`
            });
        }

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            content: error,
            message: "Error al buscar el departamento del cliente"
        })
    }
};

export const actualizarDepartamento = async (req, res) => {
    try {
        const id = req.params.idDepartamento;
        const departamento = await Departamento.update(req.body, {
            where: { idDepartamento: id }
        }).then(num => {
            if (num == 1) {
                return res.json({
                    success: true,
                    message: "Departamento actualizado"
                });
            } else {
                return res.json({
                    success: false,
                    message: `No se puede actualizar el departamento con id ${id}`
                });
            }
        }

        )
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            content: error,
            message: "Error al actualizar el departamento"
        })

    }
};

export const eliminarDepartamento = async (req, res) => {
    try {
        const id = req.params.idDepartamento;

        const departamento = await Departamento.destroy({
            where: { idDepartamento: id }
        }).then(num => {

            if (num == 1) {
                return res.json({
                    success: true,
                    message: "Departamento eliminado"
                });
            } else {
                return res.json({
                    success: false,
                    message: `No se puede eliminar el departamento con id ${id}`
                });
            }
        }

        )
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            content: error,
            message: "Error al eliminar el departamento"
        })

    }
};