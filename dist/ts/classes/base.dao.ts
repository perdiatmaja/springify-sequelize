import BaseAttributes from "./base.attributes"
import BaseModel from "./base.model"
import { Sequelize } from "sequelize"
import { ModelCtor } from "sequelize-typescript"

abstract class BaseDAO<T extends BaseAttributes, M extends BaseModel<T>> {
    private readonly _sequelize: Sequelize
    private readonly _modelCreator: ModelCtor

    constructor(sequelize: Sequelize, modelCreator: ModelCtor) {
        this._sequelize = sequelize
        this._modelCreator = modelCreator
    }

    protected get model(): ModelCtor {
        return this._modelCreator
    }

    protected get sequelize(): Sequelize {
        return this._sequelize
    }

    public async findById(id: number): Promise<M> {
        return await this.model.findOne({
            where: {
                id: id
            }
        }).then(data => {
            return data as M
        })
    }

    public async create(newData: T): Promise<M> {
        return await this.model.create(newData as {}).then(data => data as M)
    }

    public async update(entity: T): Promise<M> {
        const existingData = this.findById(entity.id!);
        (await existingData).update(entity);
        (await existingData).save();

        return existingData
    }
}

export = BaseDAO