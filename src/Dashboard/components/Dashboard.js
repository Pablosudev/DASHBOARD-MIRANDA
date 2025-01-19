import styled from "styled-components";
import { HiOutlineLogout } from "react-icons/hi";
import { HiOutlineLogin } from "react-icons/hi";
import { LuBedDouble } from "react-icons/lu";
import { TbCalendarCheck } from "react-icons/tb";

export const DashboardSection = styled.section`
    margin-top: 10%;
    margin-left: 5%;
`
export const ContainerKpis = styled.div`
    display: flex;
`
export const Kpis = styled.div`
    display: flex;
    align-items: center;
    background-color:#FFFFFF;
    box-shadow: 0px 4px 4px #00000005;
    border-radius: 12px;
    margin-left:4rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left:2rem;
    padding-right:6rem;
    &:hover{
        box-shadow: 0px 16px 30px #00000014;
        .IconLogOut{
            color: #FFFFFF;
            background-color:#E23428;
        }

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
    font-size: 2rem;
    color: #E23428;
    background-color:#FFEDEC;
    border-radius: 0.5rem;
    padding: 1rem;
`
export const IconLogIn = styled(HiOutlineLogin)`
    font-size: 2rem;
    color: #E23428;
    background-color:#FFEDEC;
    border-radius: 0.5rem;
    padding: 1rem;
`
export const IconBed = styled(LuBedDouble)`
    font-size: 2rem;
    color: #E23428;
    background-color:#FFEDEC;
    border-radius: 0.5rem;
    padding: 1rem;
`
export const IconCalendary = styled(TbCalendarCheck)`
    font-size: 2rem;
    color: #E23428;
    background-color:#FFEDEC;
    border-radius: 0.5rem;
    padding: 1rem;
`
export const Reviews = styled.h3`
color: #393939;
font-family: "Poppins"; 
font-size: 1.2rem;
text-align: left;
`
export const ContainerReviews = styled.article`
background-color: #ffffff;
box-shadow: 0px 4px 4px #00000005;
border-radius: 0.8rem;
padding-top: 1.5rem;
padding-left: 1.5rem;
padding-bottom: 4rem;
margin-top: 4rem;
`
export const BoxReviews = styled.div`
background-color: #ffffff;
border: 1px solid #EBEBEB;
max-width: 27rem;
border-radius: 0.8rem;
margin-right: 3rem;
padding-left: 1rem;
padding-right:1rem;
padding-top: 1rem;
padding-bottom: 1rem;
`