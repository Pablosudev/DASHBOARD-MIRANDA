import { Aside, CardContainer, ContainerLogo, ContainerTitle, CustomIcon, EmailUser, FooterText, IconBookings, IconContact, IconDashboard, IconHeart, IconRooms, IconUsers, ImgUser, ListSide, SectionMenu, SideStyled, SubtitleLogo, TitleLogo, TravlStyled, Ulist, NameUser } from "./DashboardSide";
import { ButtonDefault } from "../../commons/Button";

export const DashboardSide = ({side}) => {
    
    
    return(
        
        <SideStyled style={{display: side ? "block" : "none"}}>
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
        
    )
};