import clsx from 'clsx';
import { ColDef } from './TableItem';

interface Props<D> {
  pages: number;
  currentPage: number;
  onPageSelect: (page: number) => void;
  limit?: number;
  /** If not present, limit disabled */
  onChangeLimit?: (limit: number) => void;
  columns: ColDef<D>[];
}

function TableFooter<D>({ columns, onPageSelect, onChangeLimit, limit, currentPage, pages }: Props<D>) {
  return (
    <tfoot>
      <tr>
        <td colSpan={columns.length}>
          <div className="flex flex-row items-center justify-between">
            <select
              disabled={!onChangeLimit}
              value={limit}
              onChange={(e) => {
                onChangeLimit?.(Number(e.currentTarget.value));
              }}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <div>
              {pages &&
                Array.from(new Array(pages)).map((_, i) => (
                  <button
                    className={clsx('bg-gray-200 px-2 py-1 hover:bg-gray-400', { 'bg-gray-300': currentPage === i })}
                    key={i}
                    onClick={() => {
                      onPageSelect(i);
                    }}
                  >
                    {i}
                  </button>
                ))}
            </div>
          </div>
        </td>
      </tr>
    </tfoot>
  );
}

export default TableFooter;
