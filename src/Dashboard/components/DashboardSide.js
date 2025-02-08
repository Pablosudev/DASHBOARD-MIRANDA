import styled from "styled-components";
import { FaHotel } from "react-icons/fa6";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineVpnKey } from "react-icons/md";
import { TbCalendarCheck } from "react-icons/tb";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const SideStyled = styled.section`
    max-width: 11rem;
    padding-bottom: auto;
    padding-right:6.5rem;
    box-shadow: 13px 3px 40px rgba(0, 0, 0, 0.02);
    background-color: rgba(255, 255, 255, 1);
`
export const ContainerLogo = styled.article`
    display: flex;
    margin-left: 2rem;
`
export const TitleLogo = styled.h2`
    font-family: "Poppins";
    margin-bottom: 0%;
`
export const SubtitleLogo = styled.p`
    margin-top: 0.2rem;
    text-align: left;
    font-size: 0.8rem;
    font-family: "Poppins";
    letter-spacing: 0dp;
    color: rgba(93, 84, 73, 1);
    opacity: 1;
`
export const ContainerTitle = styled.div`
    margin-left: 2rem;
    margin-right: 2.5rem;
`
export const Ulist = styled.ul`
    text-align: left;
    font-size: 18px;
    letter-spacing: 0dp;
    color: rgba(121, 146, 131, 1);
    list-style: none;
    margin-top: 10rem;
    padding:0%;
`
export const ListSide = styled.li`
    margin-bottom: 2rem;
`
export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: rgba(121, 146, 131, 1);
    font-family: "Poppins";
    display:flex;
    padding-left: 2rem;

    &.active{
        color:red;
        border-left: 4px solid red;
    }
`
export const CardContainer = styled.article`
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: rgba(255, 255, 255, 1) 0% 0% no-repeat padding-box;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.08);
    border-radius: 18px;
    text-align: center;
    width: 14.5rem;
    margin-left: 1.5rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
    padding-bottom: 2rem;
`
export const ImgUser = styled.img`
    background: var(--unnamed-color-c5c5c5) 0% 0% no-repeat padding-box;
    background: rgba(197, 197, 197, 1) 0% 0% no-repeat padding-box;
    border-radius: 8px;
    width:  4.3rem;
    height: 4.3rem;
`
export const NameUser = styled.h3`
    font-family: "Poppins";
`
export const EmailUser = styled.p`
    letter-spacing: 0px;
    color: rgba(178, 178, 178, 1);
    opacity: 1;
    font-family: "Poppins";
`
export const TravlStyled = styled.h4`
    letter-spacing: 0px;
    color: rgba(33, 33, 33, 1);
    opacity: 1;
    margin-bottom: 0%;
    margin-left: 1.5rem;
    font-family: "Poppins";
`
export const FooterText = styled.p`
    letter-spacing: 0px;
    color: rgba(121, 146, 131, 1);
    opacity: 1;
    margin-bottom: 3rem;
    margin-left: 1.5rem;
    font-family: "Poppins";
`
export const CustomIcon = styled(FaHotel)`
    color: rgba(19, 88, 70, 1);
    margin-top: 1rem;
    font-size: 3rem;
` 
export const IconDashboard = styled(LuLayoutDashboard)`
margin-right: 1rem;
font-size: 1.5rem;
`
export const IconRooms = styled(MdOutlineVpnKey)`
margin-right: 1rem;
font-size: 1.5rem;
`
export const IconBookings = styled(TbCalendarCheck)`
margin-right: 1rem;
font-size: 1.5rem;
`
export const IconContact = styled(IoPersonOutline)`
margin-right: 1rem;
font-size: 1.5rem;
`
export const IconUsers = styled(HiOutlinePuzzlePiece)`
margin-right: 1rem;
font-size: 1.5rem;
`
export const IconHeart = styled(FaHeart)`
margin-right: 0.5rem;
margin-left: 0.5rem;
font-size: 0.7rem;
`
export const SectionMenu = styled.section`
display: flex;
justify-content: flex-star;
align-items: flex-start;
background-color: rgba(255, 255, 255, 1);
`
export const ContainerLayaout = styled.div`
display: flex;
`
