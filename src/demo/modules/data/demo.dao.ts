import { Sequelize } from "sequelize";
import DemoModel, { DemoAttributes } from "../../models/demo.model";
import BaseDAO from "../../../main/modules/data/base.dao";

class DemoDAO extends BaseDAO<DemoAttributes, DemoModel> {
    constructor(sequelize: Sequelize) {
        super(sequelize, DemoModel)
    }
    async test() {
        const test = await this.findById(1)
    }
}

export default DemoDAO