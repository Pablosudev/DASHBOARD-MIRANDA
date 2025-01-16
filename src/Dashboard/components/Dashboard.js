import styled from "styled-components";
import { HiOutlineLogout } from "react-icons/hi";

export const DashboardSection = styled.section`
    position: absolute;
    top: 12%;
    right:50%;
`
export const ContainerKpis = styled.div`
    display: flex;
`
export const Kpis = styled.div`
    display: flex;
    background-color:#FFFFFF;
    box-shadow: 0px 4px 4px #00000005;
    border-radius: 12px;
    padding-left:2rem;
    padding-right:2rem;
`
export const  DataKpis = styled.div`
    text-align: left;
`
export const NumberKpis = styled.p`
    font-family: "Poppins";
    font-size: 1.8rem;
`
export const IconLogOut = styled(HiOutlineLogout)`
    font-size: 2rem;
    color: #E23428;
    background-color:#FFEDEC;
    border-radius: 0.5rem;
`