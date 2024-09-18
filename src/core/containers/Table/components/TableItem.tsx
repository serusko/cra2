export interface ColDef<D> {
  name: keyof D extends string ? keyof D : string;
}

interface Props<D> {
  columns: ColDef<D>[];
  data: D;
}

function TableItem<D>({ columns, data }: Props<D>) {
  return (
    <tr className="even:bg-gray-200">
      {columns.map((c) => (
        <td className="px-4 py-2" key={c.name}>
          {/* @ts-ignore TODO: improve typings */}
          {data[c.name]}
        </td>
      ))}
    </tr>
  );
}

export default TableItem;
