import { Column, DataType } from "sequelize-typescript";
import BaseModel from "./base.model";
import BaseExternalAttributes from "./base_external.attributes";

abstract class BaseExternalModel<A extends BaseExternalAttributes> extends BaseModel<A> {
    @Column({
        type: DataType.BIGINT,
        defaultValue: DataType.UUIDV4
    })
    external_id!: string
}

export default BaseExternalModel