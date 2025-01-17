
import { Outlet } from "react-router-dom";
import { DashboardNavbar } from "../Dashboard/components/DashboardNavbar";
import { DashboardSide } from "../Dashboard/components/DashboardSide.jsx";







export const Layout = () => {


    return(
        <>
        
        <div style={{ display: "flex" }}>
        <DashboardNavbar/>
        <DashboardSide/>
        <Outlet/>
        </div>
        </>
    )
}