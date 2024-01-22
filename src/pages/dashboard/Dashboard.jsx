import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";

const Dashboard = () => {
    const { userData } = useContext(UserContext)
    console.log(userData);
    return (
        <div>
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">{userData.role ? 'House Owner Dashboard' : 'House Renter Dashboard'}</label>
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
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;