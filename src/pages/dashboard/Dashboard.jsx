import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";
import Navbar from "../../components/Navbar";

const Dashboard = () => {
    const { user } = useContext(UserContext)
    console.log(user?.user);
    return (
        <div>
            <Navbar />
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">{user?.user.role ? user?.user?.name + ' House Owner Dashboard' : user?.user?.name + ' House Renter Dashboard'}</label>
            {/* Drawer for dashboard */}
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}

                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        {/* House Owner Routes */}
                        {user?.user?.role && (
                            <div>
                                <li>
                                    <Link to='/listed-houses'>Listed Houses</Link>
                                </li>
                                <li>
                                    <Link to='/add-houses'>Add New House</Link>
                                </li>
                            </div>
                        )}
                        {/* Renter Routes */}
                        {!user?.user?.role && (
                            <div>
                                <li>
                                    <Link to='/manage-bookings'>Manage Bookings</Link>
                                </li>

                            </div>
                        )}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;