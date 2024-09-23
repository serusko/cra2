import { useNavigate } from 'react-router-dom';
import ApiTable from '../../core/containers/Table/ApiTable';
import SuppliersItem from '../models/SuppliersItem';
import { entities } from '../../app/modules';

function SuppliersList() {
  const nav = useNavigate();

  return (
    <ApiTable<SuppliersItem>
      columns={entities.Supplier.list.columns}
      url="/suppliers"
      onRowClick={(item) => {
        nav(`/suppliers/${item.id}`);
      }}
    />
  );
}

export default SuppliersList;
