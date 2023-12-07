import { Table } from "sequelize-typescript";
import BaseModel from "../../main/models/base.model";
import BaseAttributes from "../../main/models/base.attributes";

export interface DemoAttributes extends BaseAttributes {
    
}

@Table({ modelName: "demo" })
class DemoModel extends BaseModel<DemoAttributes> {

}

export default DemoModel