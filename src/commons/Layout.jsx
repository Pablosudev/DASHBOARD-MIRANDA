
import { Outlet } from "react-router-dom";
import { DashboardMenu } from "../Dashboard/components/DashboardMenu";
import { LayaoutContainer } from "./LayoutStyle";





export const Layout = () => {


    return(
        <LayaoutContainer>
        <DashboardMenu/>
        <Outlet/>
        </LayaoutContainer>
    )
}