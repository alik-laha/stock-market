import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter } from "react-router-dom";
import ContextProvidder from "./Context/ContextProvidder.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ContextProvidder>
      <BrowserRouter>
    <App />

      </BrowserRouter>
      </ContextProvidder>
  </React.StrictMode>
)
