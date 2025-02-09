import styled from "styled-components"
import { CiSearch } from "react-icons/ci";


export const ContainerSelect = styled.h3`
display: flex;
font-size: 1rem;
border-bottom: 2px solid #6E6E6E;
`
export const SelectTitle = styled.h3`
margin-left: 2rem;
margin-right: 2rem; 
font-family: "Poppins";
color: #6E6E6E;
`
export const ContainerButtons = styled.div`
display:flex;
justify-content: end;
margin-top: 2rem;
`
export const ContainerFake = styled.div`
background-color:#F5F5F5;
margin-left:1rem;
margin-right:1rem;
border-radius: 12px;
`
export const BoxSelect = styled.div`
display:flex;
justify-content: space-between;
padding-right: 2rem;
align-items: center;
`
export const SelectRooms = styled.select`
padding-left:1.5rem;
padding-right:1.5rem;
padding-top:1rem;
padding-bottom:1rem;
border: 1px solid #135846;
border-radius: 12px;
background-color: #FFFFFF;
color: #135846;
`
export const ContainerInput = styled.div`
position: relative;
`
export const UsersInput = styled.input`
border:transparent;
background-color:#ffffff;
padding-left:2rem;
padding-right:2rem;
padding-top:0.7rem;
padding-bottom:0.7rem; 
border-radius: 12px;
`
export const IconSearch = styled(CiSearch)`
color:rgba(19, 88, 70, 1);
position: absolute;
right: 5%;
top:20%;
font-size: 1.5rem;
`
export const OfferPrice = styled.td`
font-family: "Poppins";
`