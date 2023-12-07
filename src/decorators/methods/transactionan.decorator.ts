import { Sequelize } from 'sequelize-typescript';
import { container } from 'tsyringe';

/**
 * Method decorator that handle any transaction process that will rollback any failing transaction
 * Please use this decorator in sync with any transaction process
 */

export default function transactionalMethod() {
    return function (
        _: any,
        __: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value as Function

        descriptor.value = async function (...args: any[]) {
            const sequlize: Sequelize = container.resolve(Sequelize)
            const transaction = await sequlize.transaction()
            try {
                await originalMethod.apply(this, args)
                await transaction.commit()
            } catch (error: any) {
                await transaction.rollback()
                throw error
            }
        }
    }
}