import { Sequelize } from "sequelize";
import DemoModel, { DemoAttributes } from "../models/demo.model";
import BaseDAO from "./base.dao";

class DemoDAO extends BaseDAO<DemoAttributes, DemoModel> {
    constructor(sequelize: Sequelize) {
        super(sequelize, DemoModel)
    }
    async test() {
        const test = await this.findById(1)
    }
}

export default DemoDAO