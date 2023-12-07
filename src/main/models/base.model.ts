import { Column, DataType, Model, PrimaryKey } from "sequelize-typescript";
import BaseAttributes from "./base.attributes";

abstract class BaseModel<A extends BaseAttributes> extends Model<A> {
    @PrimaryKey
    @Column({
        type: DataType.BIGINT
    })
    id?: string
}

export default BaseModel