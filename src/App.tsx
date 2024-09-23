import { FC } from 'react';
import loadable from '@loadable/component';

import './index.css';
import AuthProvider from './core/auth/AuthProvider';
import ApiProvider from './core/api/ApiProvider';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './app/containers/AppLayout';

const SuppliersList = loadable(() => import('./suppliers/SuppliersList'));
const SupplierDetail = loadable(() => import('./suppliers/SupplierDetail'));

const App: FC = () => {
  return (
    <AuthProvider>
      <ApiProvider>
        <Routes>
          <Route path="/auth"></Route>

          <Route element={<AppLayout />} path="/">
            <Route element={<SuppliersList />} path="/suppliers" />
            <Route element={<SupplierDetail />} path="/suppliers/:id" />

            <Route element={<></>} path="/clients" />
          </Route>
        </Routes>
      </ApiProvider>
    </AuthProvider>
  );
};

export default App;
