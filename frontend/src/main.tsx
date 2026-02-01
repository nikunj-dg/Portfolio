import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorProvider } from "../context/ErrorContext.tsx";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorProvider>
      <App />
    </ErrorProvider>
  </StrictMode>
)
