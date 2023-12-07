import { Column, DataType } from "sequelize-typescript";
import BaseExternalAttributes from "./base_external.attributes";
import BaseModel from "./base.model";

abstract class BaseExternalModel<A extends BaseExternalAttributes> extends BaseModel<A> {
    @Column({
        type: DataType.STRING,
        defaultValue: DataType.UUIDV4
    })
    externalId?: string
}

export = BaseExternalModel