import { Cliente } from "../config/relaciones";

export const crearCliente = async (req, res) => {
    try {
        const { nuevo } = await Cliente.create(req.body);
        return res.status(201).json({
            success: true,
            content: nuevo,
            message: "Cliente registrado",
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            content: null,
            message: "Error al registrar el Cliente",
        });
    }

};

export const listarClientes = async (req, res) => {
    try {

        const clientes = await Cliente.findAll();
        console.log(clientes);
        return res.json({
            success: true,
            content: clientes,
            message: null,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            content: error,
            message: "Error al devolver los clientes",
        });
    }
};

export const listarClienteId = async (req, res) => {
    try {
        const { id } = req.params;
        const clientes = await Cliente.findByPk(id);

        if (clientes) {
            return res.json({
                success: true,
                content: clientes,
                message: null,
            });
        }
        else {
            return res.json({
                success: false,
                content: null,
                message: `El cliente con id ${id} no existe`
            });
        }

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            content: error,
            message: "Error al buscar el cliente"
        })
    }
};

export const actualizarCliente = async (req, res) => {
    try {
        const id = req.params.id;
        const clientes = await Cliente.update(req.body, {
            where: { id: id }
        }).then(num => {
            if (num == 1) {
                return res.json({
                    success: true,
                    message: "Cliente actualizado"
                });
            } else {
                return res.json({
                    success: false,
                    message: `No se puede actualizar el cliente con id ${id}`
                });
            }
        }

        )
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            content: error,
            message: "Error al actualizar el cliente"
        })

    }
};

export const eliminarCliente = async (req, res) => {
    try {
        const id = req.params.id;

        const clientes = await Cliente.destroy({
            where: { id: id }
        }).then(num => {

            if (num == 1) {
                return res.json({
                    success: true,
                    message: "Cliente eliminado"
                });
            } else {
                return res.json({
                    success: false,
                    message: `No se puede eliminar el cliente con id ${id}`
                });
            }
        }

        )
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            content: error,
            message: "Error al eliminar el cliente"
        })

    }
};