import "reflect-metadata"
import { container } from 'tsyringe';
import DemoDAO from "./modules/data/demo.dao";
import registerDBDependency from "../main/di/register_db.dependency";
import { Sequelize } from "sequelize-typescript";
import DemoModel from "./models/demo.model";

async function runDemo() {
    try {
        registerDBDependency()
        const sequelize: Sequelize = container.resolve(Sequelize)
        sequelize.addModels([DemoModel])
        await sequelize.sync().then(() => console.info("DB Initialized"))
        const demoDAO: DemoDAO = container.resolve(DemoDAO)
        const entity = await demoDAO.create({})
        const data = await demoDAO.findById(entity.id!)
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}

runDemo()