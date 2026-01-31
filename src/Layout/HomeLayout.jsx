import { Outlet } from "react-router";

import Navber from "../Shared/Navber/Navber";
import Sideber from "../Shared/Sideber/Sideber";


const HomeLayout = () => {
    return (
        <div className="flex min-h-screen bg-base-100">
            {/* Sidebar - Fixed on left */}
            <div>
                <Sideber />
            </div>
            
            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                {/* Navbar at the top */}
                <div>
                    <Navber />
                </div>
                
                {/* Main Content with Outlet */}
                <div className="flex-1 p-6 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default HomeLayout;