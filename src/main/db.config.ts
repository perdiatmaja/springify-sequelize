import { ModelCtor, Sequelize } from "sequelize-typescript";
import { SpringifyPlugin } from "springify.ts";
import { container, injectable } from "tsyringe";
import registerDBDependency from "./di/register_db.dependency";

@injectable()
class DBConfig implements SpringifyPlugin {
    private _onInited = async (_: DBConfig) => {}

    async init() {
        registerDBDependency()
        await this._onInited(this)
    }

    public set onInited(onInited: (dbConfig: DBConfig) => Promise<void>) {
        this._onInited = onInited
    }

    public async syncModel(models: ModelCtor[]): Promise<void> {
        const sequelize: Sequelize = container.resolve(Sequelize)

        sequelize.addModels(models)
        await sequelize.sync().then(() => console.info("DB synchronized."))
    }
}

export default DBConfig