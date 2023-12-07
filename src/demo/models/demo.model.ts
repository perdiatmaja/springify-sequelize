import { Table } from "sequelize-typescript";
import BaseExternalAttributes from "../../main/models/base_external.attributes";
import BaseExternalModel from "../../main/models/base_external.model";

export interface DemoAttributes extends BaseExternalAttributes {
    
}

@Table({ modelName: "demo" })
class DemoModel extends BaseExternalModel<DemoAttributes> {

}

export default DemoModel