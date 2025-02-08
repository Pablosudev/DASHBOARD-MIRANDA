import { StyledNavLink, CardContainer, EmailUser, FooterText, IconBookings, IconContact, IconDashboard, IconHeart, IconRooms, IconUsers, ImgUser, ListSide, SideStyled, TravlStyled, Ulist, NameUser } from "./DashboardSide";
import { ButtonDefault } from "../../commons/Buttons/Button"; 


export const DashboardSide = ({side}) => {
    


    
    return(
        
        <SideStyled style={{display: side ? "block" : "none"}}>
            <article>
                <Ulist>
                    <ListSide><StyledNavLink to = "/dashboard" type="active"><IconDashboard/>Dashboard</StyledNavLink></ListSide>
                    <ListSide><StyledNavLink to = "/bookings" type="active"><IconBookings/>Bookings</StyledNavLink></ListSide>
                    <ListSide><StyledNavLink to = "/rooms" type = "active"><IconRooms/>Rooms</StyledNavLink></ListSide>
                    <ListSide><StyledNavLink to = "contact" type = "active"><IconContact/>Contact</StyledNavLink></ListSide>
                    <ListSide><StyledNavLink to = "/users" type="active"><IconUsers/>Users</StyledNavLink></ListSide>
                </Ulist>
            </article>
            <CardContainer>
                <ImgUser src="/src/assets/Imagenes/photoUser.jpg" alt="imgUser" />
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