import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

const root = document.getElementById('root');

if (root) {
  // @ts-ignore TODO: ... must be commented
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
