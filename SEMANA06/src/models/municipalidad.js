import { DataTypes } from "sequelize"
import { conexion } from "../config/sequealize"

export default () => conexion.define(
    "municipalidad",
    {
        municipalidadId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            field: 'id',
        },
        municipalidadNombre: {
            type: DataTypes.STRING(60),
            field: 'nom_mun',
        },
        municipalidadDescripcion: {
            type: DataTypes.STRING(500),
            field: 'descripcion_mun',
        },
        municipalidadDireccion: {
            type: DataTypes.STRING(100),
            field: 'direccion_mun'
        }
    },
    {
        tableName: "municipalidades",
        timestamps: false,
    }
);