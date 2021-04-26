import { DataTypes } from "sequelize";
import { conexion } from "../config/sequealize"

export default () =>
    conexion.define(
        "gerencia",
        {
            gerenciaId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                unique: true,
                autoIncrement: true,
                field: 'id',
            },
            gerenciaNombre: {
                type: DataTypes.STRING(45),
                field: 'nom_gerencia',
            },
            gerenciaEncargado: {
                type: DataTypes.STRING(45),
                field: 'nom_encargado',
            },
            gerenciaDescripcion: {
                type: DataTypes.STRING(180),
                field: 'descripcion_gerencia',
            },
        },
        {
            tableName: "gerencias",
            timestamps: false,
            createdAt: "fecha_creacion",
            updatedAt: "ultima_modificacion",
        }
    );