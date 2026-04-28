import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import SinglePriceGrid from './components/SinglePriceGrid';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SinglePriceGrid />
  </StrictMode>
);
