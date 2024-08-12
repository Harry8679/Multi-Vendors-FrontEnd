import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Toaster } from 'react-hot-toast';

const App = lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Suspense>
          <App />
          <Toaster 
            toastOptions={{
              position: 'top-right',
              style: {
                background: '#283046',
                color: 'white'
              }
            }}
          />
        </Suspense>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
