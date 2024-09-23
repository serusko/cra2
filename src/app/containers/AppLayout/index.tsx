import Sidebar from './Sidebar';
import Main from './Main';

function AppLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <Main />
    </div>
  );
}

export default AppLayout;
