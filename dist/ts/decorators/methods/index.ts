declare function transactionalDecoratorHandler(): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => any;

export { transactionalDecoratorHandler as Transactional }