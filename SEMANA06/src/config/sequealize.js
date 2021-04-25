import { Sequelize } from "sequelize";

export const conexion = new Sequelize(
    "muni",
    "root",
    "root",
    {
        dialect: "mysql",
        host: "127.0.0.1",
        port: 3306,
        timezone: "-05:00",
        dialectOptions: {
            dataStrings: true,
        },
    }
);