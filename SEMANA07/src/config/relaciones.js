import cliente_model from "../models/cliente";
import departamento_model from "../models/departamento";

export const Cliente = cliente_model();
export const Departamento = departamento_model();

Cliente.hasMany(Departamento, {
    foreignKey: {
        name: "idCliente",
        allowNull: false,
    },
});

Departamento.belongsTo(Cliente, {
    foreignKey: "idCliente",
});