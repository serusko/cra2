import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <main className="flex flex-1 flex-col overflow-y-auto">
      <div className="flex h-16 items-center justify-between border-b border-gray-200 bg-white">
        <div className="flex items-center px-4">
          <button className="text-gray-500 focus:text-gray-700 focus:outline-none">
            <svg
              className="size-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
          <input className="mx-4 w-full rounded-md border px-4 py-2" placeholder="Search" type="text" />
        </div>
        <div className="flex items-center pr-4">
          <button className="flex items-center text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
            <svg
              className="size-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 19l-7-7 7-7m5 14l7-7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>

      <Outlet />
    </main>
  );
}

export default Main;
