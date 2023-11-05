import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateEmpresaTable1699134395573 } from "./migration/1699134395573-CreateEmpresaTable";
import cadEmpresa from "../app/entities/Empresa";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "bd_empresa",
    synchronize: true,
    logging: false,
    entities: [cadEmpresa],
    migrations: [CreateEmpresaTable1699134395573],
    subscribers: [],
})
