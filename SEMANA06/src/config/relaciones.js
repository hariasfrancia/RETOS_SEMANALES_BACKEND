import municipalidad_model from "../models/municipalidad";
import gerencia_model from "../models/gerencia";

export const Municipalidad = municipalidad_model();
export const Gerencia = gerencia_model();


Municipalidad.hasMany(Gerencia, {
    foreignKey: {
        name: "municipalidades_id",
        allowNull: false,
    },
});
Gerencia.belongsTo(Municipalidad, {
    foreignKey: "municipalidades_id"
});