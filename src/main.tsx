import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./pages/home.tsx";
import { TerrainUpsert } from "./pages/terrain-upsert.tsx";
import { Navbar } from "./components/navbar/navbar.component.tsx";
import { EventPage } from "./pages/event.tsx";
import { ProfilePage } from "./pages/profile.tsx";
import { EventUpsert } from "./pages/event-upser.tsx";
import { RegistrationPage } from "./pages/registration.tsx";
import { PlantPage } from "./pages/plant.tsx";
import { PlantUpsert } from "./pages/plant-upsert.tsx";
import { TerrainPage } from "./pages/terrain.tsx";
import { TerrainAdminPage } from "./pages/terrain-admin.tsx";
import { TerrainDetailAdminPage } from "./pages/terrain-detail-admin.tsx";
import { EventAdminPage } from "./pages/event-admin.tsx";
import { EventDetailAdminPage } from "./pages/event-detail-admin.tsx";
import { PlantPageDetail } from "./pages/plant-detail.tsx";
import { SettingsPage } from "./pages/settings.tsx";
import { getCookie } from "./services/cookies.service.ts";
import React from "react";
import AuthGuard from "./auth-guard.tsx";

const router = createBrowserRouter([
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/terrain-upsert/:terrainId",
        element: (
            <AuthGuard>
                <TerrainUpsert />
            </AuthGuard>
        ),
    },
    {
        path: "/terrain-upsert/",
        element: (
            <AuthGuard>
                <TerrainUpsert />
            </AuthGuard>
        ),
    },
    {
        path: "*",
        element: <h1>404!</h1>,
    },
    {
        path: "/event",
        element: (
            <AuthGuard>
                <EventPage />
            </AuthGuard>
        ),
    },
    {
        path: "/plants",
        element: (
            <AuthGuard>
                <PlantPage />
            </AuthGuard>
        ),
    },
    {
        path: "/plants/:plantId",
        element: (
            <AuthGuard>
                <PlantPageDetail />
            </AuthGuard>
        ),
    },
    {
        path: "/terrain",
        element: (
            <AuthGuard>
                <TerrainPage />
            </AuthGuard>
        ),
    },
    {
        path: "/plant-upsert",
        element: (
            <AuthGuard>
                <PlantUpsert />
            </AuthGuard>
        ),
    },
    {
        path: "/event-upsert/:eventId",
        element: (
            <AuthGuard>
                <EventUpsert />
            </AuthGuard>
        ),
    },
    {
        path: "/event-upsert",
        element: (
            <AuthGuard>
                <EventUpsert />
            </AuthGuard>
        ),
    },
    {
        path: "/profile",
        element: (
            <AuthGuard>
                <ProfilePage />
            </AuthGuard>
        ),
    },
    {
        path: "/admin-terrains",
        element: (
            <AuthGuard>
                <TerrainAdminPage />
            </AuthGuard>
        ),
    },
    {
        path: "/admin-terrains/:terrainID",
        element: (
            <AuthGuard>
                <TerrainDetailAdminPage />
            </AuthGuard>
        ),
    },
    {
        path: "/admin-events",
        element: (
            <AuthGuard>
                <EventAdminPage />
            </AuthGuard>
        ),
    },
    {
        path: "/admin-events/:eventID",
        element: (
            <AuthGuard>
                <EventDetailAdminPage />
            </AuthGuard>
        ),
    },
    {
        path: "/registration",
        element: <RegistrationPage />,
    },
    {
        path: "/settings",
        element: (
            <AuthGuard>
                <SettingsPage />
            </AuthGuard>
        ),
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <div className="fixed w-full z-50">
            <nav className="px-12 mt-8">
                <Navbar user={getCookie("user")}></Navbar>
            </nav>
        </div>

        <main>
            <RouterProvider router={router} />
        </main>
    </React.StrictMode>
);
