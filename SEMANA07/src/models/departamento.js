import { DataTypes } from "sequelize";
import { conexion } from "../config/sequelize";

export default () =>
    conexion.define(
        "departamento",
        {
            departamentoId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                unique: true,
                autoIncrement: true,
                field: "iddepartamento",
            },
            departamentoBloque: {
                type: DataTypes.STRING(10),
                field: "bloque",
            },

        },
        {
            tableName: "departamento",
            timestamps: false,
        }
    );