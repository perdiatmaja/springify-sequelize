import { SpringifyPlugin } from "springify.ts"
import { ModelCtor, Sequelize } from "sequelize-typescript"

declare class SpringifyDBPlugin implements SpringifyPlugin {
    init(): Promise<void>;
    public set onInited(onInited: (dbConfig: SpringifyDBPlugin, sequelize: Sequelize) => Promise<void>);
    public syncModel(models: ModelCtor[]): Promise<void>;
}

export = SpringifyDBPlugin