import { useParams } from 'react-router-dom';
import useDetail from '../../core/api/useDetail';

function SupplierDetail() {
  const { id } = useParams();
  const { data, isLoading, isError } = useDetail(`/suppliers/${id}`);

  return (
    <>
      <h2>Supplier detail #{id}</h2>
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3>Error...</h3>}
      <pre>{JSON.stringify(data?.data, null, 2)}</pre>;
    </>
  );
}

export default SupplierDetail;
