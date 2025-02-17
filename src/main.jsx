import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // CSS για Toastify

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ToastContainer /> {/* Τοποθετημένο εδώ για όλη την εφαρμογή */}
  </StrictMode>
);
