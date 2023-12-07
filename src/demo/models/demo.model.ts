import { Table } from "sequelize-typescript";
import { SpringifyExternalAttributes } from "../../../dist";
import BaseExternalModel from "../../../dist/ts/classes/base_external.model";

export interface DemoAttributes extends SpringifyExternalAttributes {
    
}

@Table({ modelName: "demo" })
class DemoModel extends BaseExternalModel<DemoAttributes> {

}

export default DemoModel