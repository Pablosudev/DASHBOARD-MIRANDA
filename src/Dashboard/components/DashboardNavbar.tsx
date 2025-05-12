import { useLocation, useNavigate} from "react-router-dom";
import { LeftIcon, NavbarStyled, RightIcon, TitleNavbar, ContainerPage, MailIcon, BellIcon, MessageIcon, LogOut} from "./Navbar.ts";
import { ContainerLogo, CustomIcon, ContainerTitle, TitleLogo , SubtitleLogo } from "./DashboardSide.ts";
import { useState } from "react";
import { DashboardSide } from "./DashboardSide.tsx";
import { useAuthContext } from "../../UseContext/AuthContext.jsx";
import React from "react";
import { AppDispatch } from "../../App/Store.ts";




export const DashboardNavbar = () => {

    const [side, setSide] = useState(false);
    const [arrow,setArrow] = useState(true)
    const location = useLocation();
    const navigate = useNavigate();
    const { dispatch } = useAuthContext() as unknown as { dispatch: AppDispatch };

    const handleSideMenu = () => {
        setSide(!side);
        setArrow(!arrow)
    }
    const getTitle = () => {
        switch (location.pathname) {
            case "/dashboard":
                return "Dashboard";
            case "/rooms":
                return "Rooms";
            case "/users":
                return "Users";
            case "/bookings":
                return "Bookings";
            case "/contacts":
                return "Contacts"    
            default:
                return "Hotel Admin ";
        }
    };

    const handleLogOut = () => {

        dispatch({ type: 'login'});
        
        navigate("/");
    }

    return (
        <>
        <DashboardSide side = {side}/>
        <NavbarStyled>
            <ContainerLogo>
                <CustomIcon/>
                <ContainerTitle>
                    <TitleLogo>travl</TitleLogo>
                    <SubtitleLogo>Hotel Admin Dashboard</SubtitleLogo>
                </ContainerTitle>
               
                <ContainerPage>
                    {side ? ( <LeftIcon onClick={handleSideMenu}/>) : (<RightIcon onClick={handleSideMenu} />)}
                    <TitleNavbar>{getTitle()}</TitleNavbar>
                </ContainerPage>
            </ContainerLogo> 
            <div>
                <MailIcon />
                <BellIcon />
                <MessageIcon />
                <LogOut onClick={handleLogOut}/>
            </div>
        </NavbarStyled>
        </>
    )
}