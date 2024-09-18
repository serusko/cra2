import ApiTable from '../../core/containers/Table/ApiTable';
import { ColDef } from '../../core/containers/Table/components/TableItem';
import Post from '../models/Post';

const columns: ColDef<Post>[] = [{ name: 'id' }, { name: 'userId' }, { name: 'title' }];

function PostsList() {
  return <ApiTable<Post> columns={columns} url="/api/posts" />;
}

export default PostsList;
