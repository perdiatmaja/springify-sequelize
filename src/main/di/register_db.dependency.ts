import { Sequelize } from "sequelize-typescript"
import { Dialect } from "sequelize/types"
import { container } from "tsyringe"

const registerDBDependecny = () => {
    const injectDb = () => {
        const sequelize = new Sequelize("", "", "", {
            dialect: "" as Dialect,
            host: "",
            port: 3306,
            logging: (query) => {
                console.log(query)
            },
            define: {
                timestamps: true,
                freezeTableName: true
            },
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            }
        })

        container.register<Sequelize>(Sequelize, { useValue: sequelize })
    }
    injectDb()
}

export default registerDBDependecny