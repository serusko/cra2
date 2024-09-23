import { useNavigate } from 'react-router-dom';
import { entities, Entities } from '../../../app/modules';
import ApiTable from '../Table/ApiTable';
import { ColDef } from '../Table/components/TableItem';

function ListPage(entity: keyof Entities) {
  const nav = useNavigate();

  const definition = entities[entity];
  const list = definition.list;

  return (
    <ApiTable<typeof list.item>
      columns={list.columns as ColDef<unknown>[]}
      url={list.apiUrl}
      onRowClick={(item) => {
        nav(definition.detail.route(item.id));
      }}
    />
  );
}

export default ListPage;
