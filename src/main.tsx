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
import { EventUpsert } from './pages/event-upser.tsx';
import { RegistrationPage } from './pages/registration.tsx';
import { PlantPage } from './pages/plant.tsx';
import { PlantUpsert } from './pages/plant-upsert.tsx';
import { TerrainPage } from './pages/terrain.tsx';
import { TerrainAdminPage } from './pages/terrain-admin.tsx';
import { TerrainDetailAdminPage } from './pages/terrain-detail-admin.tsx';
import { EventAdminPage } from './pages/event-admin.tsx';
import { EventDetailAdminPage } from './pages/event-detail-admin.tsx';
import { PlantPageDetail } from './pages/plant-detail.tsx';
import { SettingsPage } from './pages/settings.tsx';
import { getCookie } from './services/cookies.service.ts';
import React from 'react';



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
        path: "/terrain-upsert/:terrainId",
        element: <TerrainUpsert />
    },
    {
        path: "/terrain-upsert/",
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
        path: "/plants",
        element: <PlantPage />
    },
    {
        path: "/plants/:plantId",
        element: <PlantPageDetail />
    },
    {
        path: "/terrain",
        element: <TerrainPage />
    },
    {
        path: "/plant-upsert",
        element: <PlantUpsert />
    },
    {
        path: "/event-upsert/:eventId",
        element: <EventUpsert />
    },
    {
        path: "/event-upsert",
        element: <EventUpsert />
    },
    {
        path: "/profile",
        element: <ProfilePage />
    },
    {
        path: "/admin-terrains",
        element: <TerrainAdminPage />
    },
    {
        path: "/admin-terrains/:terrainID",
        element: <TerrainDetailAdminPage />
    },
    {
        path: "/admin-events",
        element: <EventAdminPage />
    },
    {
        path: "/admin-events/:eventID",
        element: <EventDetailAdminPage />
    },
    {
        path: "/registration",
        element: <RegistrationPage />

    },
    {
        path: "/settings",
        element: <SettingsPage />
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
        <React.StrictMode>
            <div className="fixed w-full z-50">
                <nav className="px-12 mt-8">
                    <Navbar user={getCookie('user')}></Navbar>
                </nav>
            </div>

            <main >
                <RouterProvider router={router} />
            </main>
        </React.StrictMode>
)
