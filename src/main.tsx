import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { Home } from './pages/home.tsx';
import { TerrainUpsert } from './pages/terrain-upsert.tsx';
import { Navbar } from './components/navbar/navbar.component.tsx';
import { EventPage } from './pages/event.tsx';
import { ProfilePage } from './pages/profile.tsx';
const router = createBrowserRouter([
    {
        path: "/app",
        element: <App />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/terrain-upsert",
        element: <TerrainUpsert />
    },
    {
        path: "*",
        element: <h1>404!</h1>,
    },
    {
        path: "/event",
        element: <EventPage />
    },
    {
        path: "/profile",
        element: <ProfilePage />
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div className="fixed w-full z-50">
            <nav className="px-12 mt-8">
                <Navbar></Navbar>
            </nav>
        </div>


        <main>
            <RouterProvider router={router} />
        </main>
    </React.StrictMode>,
)
