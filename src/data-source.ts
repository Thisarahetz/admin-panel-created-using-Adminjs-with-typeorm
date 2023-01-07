import "reflect-metadata"
import { DataSource } from "typeorm"
import { Organization } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "",
    database: "dbname",
    synchronize: true,
    logging: false,
    entities: [Organization],
    migrations: [],
    subscribers: [],
})
