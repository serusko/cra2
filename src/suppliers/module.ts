import { ColDef } from '../core/containers/Table/components/TableItem';
import { t } from '../core/translations';
import { SupplierModel } from '../openapi/requests';

const suppliersModule = {
  entities: {
    Supplier: {
      list: {
        route: '/suppliers',
        apiUrl: `/suppliers`,
        label: t('Suppliers'),
        columns: [{ name: 'id' }, { name: 'name' }, { name: 'ico' }, { name: 'dic' }] as ColDef<SupplierModel>[],
        item: {} as SupplierModel,
      },
      detail: {
        route: (id: number | string = ':id') => `/suppliers/${id}`,
        apiUrl: (id: number) => `/suppliers/${id}`,
        label: (id?: number) => (id ? t('Supplier #{id}', { id }) : t('New Supplier')),
      },
    },
  },
};

export default suppliersModule;
