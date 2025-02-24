
import { Outlet } from "react-router-dom";
import { DashboardNavbar } from "../../Dashboard/components/DashboardNavbar.jsx";
import { DashboardSide } from "../../Dashboard/components/DashboardSide.jsx";
import React from "react";







export const Layout = () => {


    return(
        <>
        
        <div style={{ display: "flex" }}>
        <DashboardNavbar/>
        <DashboardSide />
        <Outlet/>
        </div>
        </>
    )
}