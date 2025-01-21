import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyle from './style/GlobalStyle';
import AppRoutes from './routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <AppRoutes />
  </StrictMode>,
);
