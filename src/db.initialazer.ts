import { ModelCtor, Sequelize } from "sequelize-typescript";

class DBInitialazer {
    private readonly sequelize: Sequelize

    constructor(sequelize: Sequelize) {
        this.sequelize = sequelize
    }

    initModels() {
        const models: ModelCtor[] = []

        this.sequelize.addModels(models)

        this.sequelize.sync().then(() => console.info("DB Initialized"))
    }
}

export default DBInitialazer