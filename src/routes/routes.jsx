import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";
import Dashboard from "../pages/dashboard/Dashboard";
import ListedHouses from "../pages/dashboard/ListedHouses";
import AddHouses from "../pages/dashboard/AddHouses";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signUp',
        element: <SignUp />
    },
    {
        path: '/forgot-password',
        element: <ForgotPassword />
    },
    {
        path: '/dashboard',
        element: <Dashboard />
    },
    {
        path: '/listed-houses',
        element: <ListedHouses />
    },
    {
        path: '/add-houses',
        element: <AddHouses />
    },
])

export default routes