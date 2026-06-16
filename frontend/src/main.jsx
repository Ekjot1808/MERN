import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import appRouter from './routes/AppRoutes.jsx'
import { RouterProvider } from 'react-router'
import { UserProvider } from './store/auth.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={appRouter} />
      <ToastContainer position="top-right" autoClose={2000} />
    </UserProvider>
  </StrictMode>,
)
