import styled from "styled-components"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { CiBellOn, CiMail } from "react-icons/ci";
import { MdOutlineMessage } from "react-icons/md";
import { MdLogout } from "react-icons/md";



export const NavbarStyled = styled.nav`
    padding-bottom: 1rem;
    padding-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.02);
`
export const ContainerPage = styled.div`
    display:flex;
    align-items: center;
    
`
export const LeftIcon = styled(FaArrowLeft)`
    font-size: 2.5rem;
    
`
export const RightIcon = styled(FaArrowRight)`
    font-size: 2.5rem;
    margin-left: 4rem;
`
export const TitleNavbar = styled.h2`
    margin-left: 3rem;
`
export const MailIcon = styled(CiMail)`
    font-size: 2rem;
    margin-right: 2rem;
    color: rgba(19, 88, 70, 1);
`
export const BellIcon = styled(CiBellOn)`
    font-size: 2rem;
    margin-right: 2rem;
    color: rgba(19, 88, 70, 1);
`
export const MessageIcon = styled(MdOutlineMessage)`
    font-size: 2rem;
    margin-right: 4rem;
    color: rgba(19, 88, 70, 1);
`
export const LogOut = styled(MdLogout)`
    font-size: 2rem;
    margin-right: 4rem;
    color: rgba(19, 88, 70, 1);
`
export const ContainerIcon = styled.div`
    position: absolute;
    top: 4%;
    right: 5%;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.02);
`
