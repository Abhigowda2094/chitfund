import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import Privacy from './Privacy.tsx';
import Terms from './Terms.tsx';
import './index.css';

const path = window.location.pathname;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {path === '/privacy' ? <Privacy /> : path === '/terms' ? <Terms /> : <App />}
  </StrictMode>,
);
