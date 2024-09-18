import { ColDef } from './TableItem';

interface Props<D> {
  columns: ColDef<D>[];
}

function TableHeader<D>({ columns }: Props<D>) {
  return (
    <thead>
      <tr>
        {columns.map((c) => (
          // @ts-ignore TODO: improve typings
          <th key={c.name}>{c.name}</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
