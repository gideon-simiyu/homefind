import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import "flyonui/flyonui"
import { UserProvider } from './context/user';
import { LoadingProvider } from './context/loading';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <UserProvider>
            <LoadingProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </LoadingProvider>
        </UserProvider>
    </StrictMode>,
)
