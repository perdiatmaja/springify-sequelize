import { Column, DataType } from "sequelize-typescript";
import SpringifyExternalAttributes from "./springify_external.attributes";
import SpringifyModel from "./springify.model";

declare abstract class SpringifyExternalModel<A extends SpringifyExternalAttributes> extends SpringifyModel<A> {
    @Column({
        type: DataType.STRING,
        defaultValue: DataType.UUIDV4
    })
    externalId?: string
}

export = SpringifyExternalModel