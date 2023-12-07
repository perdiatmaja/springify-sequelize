import { AutoIncrement, Column, DataType, Model, PrimaryKey } from "sequelize-typescript";
import BaseAttributes from "./base.attributes";

abstract class BaseModel<A extends BaseAttributes> extends Model<A> {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.BIGINT
    })
    id?: number
}

export default BaseModel