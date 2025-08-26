import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import {BrowserRouter} from 'react-router-dom';
// import { AuthProvider } from "./context/AuthProvider";
import './index.css'
import App from './App.jsx'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./auth/AuthProvider";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter/> */}

    <AuthProvider>
    <ToastContainer/>
    <App />
    </AuthProvider>
  </StrictMode>,
)
