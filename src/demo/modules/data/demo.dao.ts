import DemoModel from "../../models/demo.model";
import BaseDAO from "../../../../dist/ts/classes/base.dao";
import BaseAttributes from "../../../../dist/ts/classes/base.attributes";
import { injectable } from "tsyringe";
import { Sequelize } from "sequelize-typescript";

@injectable()
class DemoDAO extends BaseDAO<BaseAttributes, DemoModel> {

    constructor(sequelize: Sequelize) {
        super(sequelize, DemoModel)
    }
}

export default DemoDAO