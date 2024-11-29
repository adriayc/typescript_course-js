import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
// RTK
import { Provider } from 'react-redux';
import { store } from '@/store.ts';
// Toast
import { Toaster } from '@/components/ui/toaster';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Toaster />
      <App />
    </Provider>
  </StrictMode>
);
