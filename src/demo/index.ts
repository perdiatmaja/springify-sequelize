import "reflect-metadata"
import { container } from 'tsyringe';
import DemoDAO from "./modules/data/demo.dao";
import DemoModel from "./models/demo.model";
import DBConfig from "../main/db.config";

async function runDemo() {
    try {
        const dBConfig: DBConfig = container.resolve(DBConfig)
        dBConfig.onInited = async (dBConfig) => {
            await dBConfig.syncModel([
                DemoModel
            ])
        }
        dBConfig.init()

        const demoDAO: DemoDAO = container.resolve(DemoDAO)
        const entity = await demoDAO.create({})
        const data = await demoDAO.findById(entity.id!)
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}

runDemo()