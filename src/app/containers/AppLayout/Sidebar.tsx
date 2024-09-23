import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="hidden w-64 flex-col bg-gray-800 md:flex">
      <div className="flex h-16 items-center justify-center bg-gray-900">
        <span className="font-bold uppercase text-white">Sidebar</span>
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto">
        <nav className="flex-1 bg-gray-800 px-2 py-4">
          <Link className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700" to="/">
            <svg
              className="mr-2 size-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            Dashboard
          </Link>
          <Link className="mt-2 flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700" to="/suppliers">
            <svg
              className="mr-2 size-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            Suppliers
          </Link>
          <Link className="mt-2 flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700" to="/clients">
            <svg
              className="mr-2 size-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            Clients
          </Link>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
