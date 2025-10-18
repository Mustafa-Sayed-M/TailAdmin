import Sidebar from "@components/Sidebar";
import MainContent from "@components/MainContent";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
    return (
        <div className="dashboard-layout h-screen flex">
            {/* Sidebar */}
            <Sidebar />
            {/* Main Content */}
            <MainContent>
                <Outlet />
            </MainContent>
        </div>
    )
}

export default DashboardLayout;