// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import App from './App';
import About from './content/about';
import Contact from './content/contact';

const root = ReactDOM.createRoot(document.getElementById('root')); // For React 18+
root.render(
  <React.StrictMode>
    <BrowserRouter>

    <Routes>
        <Route path="/" element={ <App />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
     
    </BrowserRouter>
  </React.StrictMode>
);