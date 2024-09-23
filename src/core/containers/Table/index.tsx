import { useState } from 'react';
import TableFooter from './components/TableFooter';
import Header from './components/TableHeader';
import TableItem, { ColDef } from './components/TableItem';
import getPagesNumber from './helpers/getPagesNumber';

export interface Props<D> {
  onRowClick?: (item: D, index: number) => void;
  columns: ColDef<D>[];
  limit?: number;
  data: D[];
}

function Table<D>({ columns, data, onRowClick }: Props<D>) {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10); // TODO: implement api pagination

  const displayed = data.slice(page * limit, page * limit + limit);

  return (
    <table>
      <Header columns={columns} />

      <tbody>
        {displayed.map((item, index) => (
          <TableItem<D>
            columns={columns}
            data={item}
            key={index}
            onClick={() => {
              onRowClick?.(item, index);
            }}
          />
        ))}
      </tbody>

      <TableFooter
        columns={columns}
        currentPage={page}
        limit={limit}
        pages={getPagesNumber(data.length || 0, limit)}
        onChangeLimit={setLimit}
        onPageSelect={setPage}
      />
    </table>
  );
}

export default Table;
