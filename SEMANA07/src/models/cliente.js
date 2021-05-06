import { DataTypes } from "sequelize";
import { conexion } from "../config/sequelize";

export default () =>
    conexion.define(
        "cliente",
        {
            clienteId: {
                allowNull: false,
                type: DataTypes.INTEGER,
                primaryKey: true,
                field: "id",
                autoIncrement: true,
                unique: true,
            },
            clienteNombre: {
                type: DataTypes.STRING(100),
                field: "nombres",
            },
            clienteApePat: {
                type: DataTypes.STRING(100),
                field: "apePat",
            },
            clienteApeMat: {
                type: DataTypes.STRING(100),
                field: "apeMat",
            },
        },
        {
            tableName: "cliente",
            timestamps: false,
        }
    );