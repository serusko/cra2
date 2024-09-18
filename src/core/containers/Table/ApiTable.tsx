import { useEffect, useState } from 'react';
import Table from './index';
import { ColDef } from './components/TableItem';

interface Props<D> {
  url: string;
  columns: ColDef<D>[];
}

function ApiTable<D>({ url, columns }: Props<D>) {
  const [data, setData] = useState<D[]>([]);

  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then(setData)
      .catch((e: unknown) => {
        // eslint-disable-next-line no-console
        console.error(e);
      });
  }, [url]);
  return <Table<D> columns={columns} data={data} limit={0} />;
}

export default ApiTable;
