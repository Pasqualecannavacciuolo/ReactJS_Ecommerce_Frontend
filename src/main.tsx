import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from "@/components/ui/toaster"
import App from './App.tsx'
import './index.css'
import Home from './components/home/Home.tsx';
import Utenti from './components/utenti/Utenti.tsx';
import NotFound from './NotFound.tsx';
import Utente from './components/utenti/paginaUtente/Utente.tsx';
import CreaUtente from './components/utenti/paginaUtente/CreaUtente.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/utenti",
        element: <Utenti />
      },
      {
        path: "/utenti/:userId",
        element: <Utente />
      },
      {
        path: "/utenti/crea",
        element: <CreaUtente />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>,
)
