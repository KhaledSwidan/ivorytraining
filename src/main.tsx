import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <Router>
      <Suspense
        fallback={
          <div className='flex justify-center items-center h-screen text-xl'>
            جارى تحميل الصفحة...
          </div>
        }
      >
        <App />
      </Suspense>
    </Router>
  </StrictMode>
);
