import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ErrorProvider } from "../context/ErrorContext.tsx";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <ErrorProvider>
        <App />
      </ErrorProvider>
    </StrictMode>
  </BrowserRouter>
)
