import { useNavigate } from 'react-router-dom';
import { entities } from '../../app/modules';
import Table from '../../core/containers/Table';
import { useDodavateliaServiceGetSuppliers } from '../../openapi/queries';
import { SupplierModel } from '../../openapi/requests';

function SuppliersList() {
  const nav = useNavigate();

  const { data } = useDodavateliaServiceGetSuppliers();

  return (
    <Table<SupplierModel>
      columns={entities.Supplier.list.columns}
      data={data}
      onRowClick={(item) => {
        nav(`/suppliers/${item.id}`);
      }}
    />
  );
}

export default SuppliersList;
