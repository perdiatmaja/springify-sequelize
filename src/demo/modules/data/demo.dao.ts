import DemoModel from "../../models/demo.model";
import { injectable } from "tsyringe";
import { Sequelize } from "sequelize-typescript";
import BaseDAO from "../../../main/modules/data/base.dao";
import BaseExternalAttributes from "../../../main/models/base_external.attributes";

@injectable()
class DemoDAO extends BaseDAO<BaseExternalAttributes, DemoModel> {

    constructor(sequelize: Sequelize) {
        super(sequelize, DemoModel)
    }
}

export default DemoDAO