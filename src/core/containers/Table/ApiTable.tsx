import Table from './index';
import type { Props as TableProps } from './index';
import useList from '../../api/useList';

interface Props<D> extends Omit<TableProps<D>, 'data'> {
  url: string;
}

function ApiTable<D>({ url, ...props }: Props<D>) {
  const { data, isLoading, isError } = useList<D>(url);

  const items = data?.data ?? ([] as D[]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error...</h2>;
  }

  return <Table<D> data={items} {...props} />;
}

export default ApiTable;
