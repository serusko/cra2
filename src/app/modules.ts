import suppliersModule from '../suppliers/module';

const entities = {
  ...suppliersModule.entities,
} as const;

export type Entities = typeof entities;

export { entities };
