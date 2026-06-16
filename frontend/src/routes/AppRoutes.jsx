import { createBrowserRouter } from "react-router";
import ErrorPage from "../components/ErrorPage";
import MainLayout from "../components/layouts/MainLayout";
import AdminLayout from "../components/layouts/AdminLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Service from "../pages/Service";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminService from "../components/admin/AdminService";
import CreateServices from "../components/admin/CreateServices";
import Contacts from "../components/admin/Contacts";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/service',
                element: <Service />,
            },
            {
                path: '/login',
                element: <Login />,
            },{
                path: '/register',
                element: <Register />,
            },
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/admin/contacts',
                element: <Contacts />,
            },
            {
                path: '/admin/services',
                element: <AdminService />,
            },
            {
                path: '/admin/create-services',
                element: <CreateServices />,
            },
        ]
    }
]);

export default router;