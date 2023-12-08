import { AutoIncrement, Column, DataType, Model, PrimaryKey } from "sequelize-typescript";
import SpringifyAttributes from "./springify.attributes";

declare abstract class SpringifyModel<A extends SpringifyAttributes> extends Model<A> {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.BIGINT
    })
    id?: number
}

export = SpringifyModel