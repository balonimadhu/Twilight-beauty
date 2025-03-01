import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import ContextApi from './context/ContextApi';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ContextApi>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ContextApi>
  </React.StrictMode>
);
