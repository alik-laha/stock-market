import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import ContextProvidder from "./Context/ContextProvidder";


ReactDOM.createRoot(document.getElementById('root')!).render(

  <ContextProvidder>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvidder>
)
