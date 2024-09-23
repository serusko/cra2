export interface ColDef<D> {
  name: keyof D extends string ? keyof D : string;
}

interface Props<D> {
  onClick?: () => void;
  columns: ColDef<D>[];
  data: D;
}

function TableItem<D>({ onClick, columns, data }: Props<D>) {
  return (
    <tr className="even:bg-gray-200" style={onClick && { cursor: 'pointer' }} onClick={onClick}>
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
