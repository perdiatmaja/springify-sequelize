import { Table } from "sequelize-typescript";
import BaseModel from "./base.model";
import BaseAttributes from "./base.attributes";

export interface DemoAttributes extends BaseAttributes {
    
}

@Table({ modelName: "demo" })
class DemoModel extends BaseModel<DemoAttributes> {

}

export default DemoModel