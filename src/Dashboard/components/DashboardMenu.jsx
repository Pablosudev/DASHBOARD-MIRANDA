import { useState } from "react"
import { LeftIcon, NavbarStyled, RightIcon, TitleNavbar, ContainerPage, MailIcon, BellIcon, MessageIcon, ContainerIcon, LogOut} from "./Navbar";
import { Aside, CardContainer, ContainerLogo, ContainerTitle, CustomIcon, EmailUser, FooterText, IconBookings, IconContact, IconDashboard, IconHeart, IconRooms, IconUsers, ImgUser, ListSide, SectionMenu, SideStyled, SubtitleLogo, TitleLogo, TravlStyled, Ulist, NameUser } from "./DashboardSide";
import { ButtonDefault } from "../../commons/Button";
import { useLocation, useNavigate } from "react-router-dom";


export const DashboardMenu = () => {

    const [side, setSide] = useState(false);
    const [arrow,setArrow] = useState(true)
    const navigate = useNavigate();
    const location = useLocation();

    const handleSideMenu = () => {
        setSide(!side);
        setArrow(!arrow)
    }

    const handleLogOut = () => {

        localStorage.removeItem("authToken");
        navigate("/");
    }
    
    const getTitle = () => {
        switch (location.pathname) {
            case "/dashboard":
                return "Dashboard";
            case "/rooms":
                return "Rooms";
            case "/users":
                return "Users";
            default:
                return "Hotel Admin Dashboard";
        }
    };

    return(
        <>
        <SectionMenu>
        <SideStyled style={{ display: side ? "block" : "none" }}>
            <ContainerLogo>
                <CustomIcon/>
                <ContainerTitle>
                <TitleLogo>travl</TitleLogo>
                <SubtitleLogo>Hotel Admin Dashboard</SubtitleLogo>
            </ContainerTitle>
            </ContainerLogo>    
                <article>
                    <Ulist>
                        <ListSide><IconDashboard/><Aside href="/dashboard">Dashboard</Aside></ListSide>
                        <ListSide><IconBookings/><Aside href="">Bookings</Aside></ListSide>
                        <ListSide><IconRooms/><Aside href="/rooms">Rooms</Aside></ListSide>
                        <ListSide><IconContact/><Aside href="">Contact</Aside></ListSide>
                        <ListSide><IconUsers/><Aside href="/users">Users</Aside></ListSide>
                    </Ulist>
                </article>
                <CardContainer>
                    <ImgUser src="../Imagenes/photoUser.jpg" alt="imgUser" />
                    <NameUser>Pablo López</NameUser>
                    <EmailUser>pablo.losu.dev@gmail.com</EmailUser>
                    <ButtonDefault>Contact Us</ButtonDefault>
                </CardContainer>
                <TravlStyled>Travl Hotel Admin Dashboard</TravlStyled>
                <FooterText>2025 All Rights Reserved</FooterText>
                <FooterText>Made whit<IconHeart/>by Pablo</FooterText>
        </SideStyled>
        <NavbarStyled>
            <ContainerPage>
                {side ? ( <LeftIcon onClick={handleSideMenu}/>) : (<RightIcon onClick={handleSideMenu} />)}
                <TitleNavbar>{getTitle()}</TitleNavbar>
            </ContainerPage>
            <ContainerIcon>
                <MailIcon />
                <BellIcon />
                <MessageIcon />
                <LogOut onClick={handleLogOut}/>
            </ContainerIcon>
        </NavbarStyled>

        </SectionMenu>
        </>
    )
}