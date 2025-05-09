import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import Router from './Routs.jsx'
import { Toaster } from 'react-hot-toast'
import CardProvider from './Pages/Provider/CardProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <CardProvider>
    <RouterProvider router={Router}/>
    <Toaster position='bottom-right' />
   </CardProvider>
  </StrictMode>,
)
