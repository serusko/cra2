import { FC } from 'react';

import './index.css';
import ApiTable from './core/containers/Table/ApiTable';
import { ColDef } from './core/containers/Table/components/TableItem';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const columns: ColDef<Post>[] = [{ name: 'id' }, { name: 'userId' }, { name: 'title' }];

const App: FC = () => {
  return <ApiTable<Post> columns={columns} url="/api/posts" />;
};

export default App;
