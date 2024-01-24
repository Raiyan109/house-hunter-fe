import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";
import Dashboard from "../pages/dashboard/Dashboard";
import ListedHouses from "../pages/dashboard/ListedHouses";
import AddHouses from "../pages/dashboard/AddHouses";
import ManageBookings from "../pages/dashboard/ManageBookings";
import BookNew from "../pages/dashboard/BookNew";
import HouseDetail from "../components/HouseDetail";

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
    {
        path: '/manage-bookings',
        element: <ManageBookings />
    },
    {
        path: '/book-new',
        element: <BookNew />
    },
    {
        path: '/house/:id',
        element: <HouseDetail />
    },
])

export default routes