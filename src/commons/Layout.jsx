
import { Outlet } from "react-router-dom";
import { DashboardMenu } from "../Dashboard/components/DashboardMenu";




export const Layout = () => {


    return(
        <>
        <DashboardMenu/>
        <Outlet/>
        </>
    )
}