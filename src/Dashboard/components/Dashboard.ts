import styled from "styled-components";
import { HiOutlineLogout } from "react-icons/hi";
import { HiOutlineLogin } from "react-icons/hi";
import { LuBedDouble } from "react-icons/lu";
import { TbCalendarCheck } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";

export const DashboardSection = styled.section`
    margin-top: 10%;
    margin-left: 2%;
    margin-right: 2%;
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`
export const ContainerKpis = styled.div`
   display: flex;
   align-items:center;
   margin-left: 4%;
`
export const Kpis = styled.div`
    display: flex;
    align-items: center;
    background-color:#FFFFFF;
    box-shadow: 0px 4px 4px #00000005;
    border-radius: 12px;
    margin-right: 3rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left:2rem;
    padding-right:5rem;
    &:hover{
        box-shadow: 0px 16px 30px #00000014;
    }
`
export const  DataKpis = styled.div`
    text-align: left;
    margin-left:1rem;
    margin-top: 0.5rem;
`
export const NumberKpis = styled.p`
    font-family: "Poppins";
    font-size: 1.8rem;
    margin-bottom: 0.1rem;
    margin-top: 0.2rem;
`
export const TypeKpis = styled.p`
    font-family: "Poppins";
    font-size: 0.87rem;
    color: #787878;
    margin-top: 0%;
    margin-bottom: 1.5rem;
`
export const IconLogOut = styled(HiOutlineLogout)`
    font-size: 4rem;
    color: #E23428;
    background-color:#FFEDEC;
    border-radius: 0.5rem;
    padding: 1rem;
    ${Kpis}:hover & {
        background-color:#E23428;
        color:#FFFFFF;
    }
`
export const IconLogIn = styled(HiOutlineLogin)`
    font-size: 4rem;
    color: #E23428;
    background-color:#FFEDEC;
    border-radius: 0.5rem;
    padding: 1rem;
    ${Kpis}:hover & {
        background-color:#E23428;
        color:#FFFFFF;
    }
`

export const IconBed = styled(LuBedDouble)`
    font-size: 4rem;
    color: #E23428;
    background-color:#FFEDEC;
    border-radius: 0.5rem;
    padding: 1rem;
    ${Kpis}:hover & {
        background-color:#E23428;
        color:#FFFFFF;
    }
`
export const IconCalendary = styled(TbCalendarCheck)`
    font-size: 4rem;
    color: #E23428;
    background-color:#FFEDEC;
    border-radius: 0.5rem;
    padding: 1rem;
    ${Kpis}:hover & {
        background-color:#E23428;
        color:#FFFFFF;
    }
`
export const Reviews = styled.h3`
color: #393939;
font-family: "Poppins"; 
font-size: 1.2rem;
margin-left: 1rem;
text-align: left;
`
export const ContainerReviews = styled.article`
background-color: #ffffff;
box-shadow: 0px 4px 4px #00000005;
border-radius: 0.8rem;
padding-top: 1%;
padding-bottom: 4rem;
margin-top: 4rem;
width:100%;


`
export const BoxReviews = styled.div`
background-color: #ffffff;
border: 1px solid #EBEBEB;
max-width: 27rem;
border-radius: 0.8rem;
margin-left: 1rem;
padding-left: 1rem;
padding-right:1rem;
padding-top: 1rem;
padding-bottom: 1rem;
`
export const ButtonSlider = styled.button`
width:3.5rem;
height:3.5rem;
color: #ffffff;
border-radius: 0.8rem;
border: transparent;
background-color: #135846;
position: absolute;
left: 98%;
bottom: 40%;
`
export const IconArrowRight = styled(FaArrowRight)`
font-size: 1.5rem;
`
export const SectionDashboard = styled.section`
margin-top: 6%;

`