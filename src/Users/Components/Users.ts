import { CiSearch } from "react-icons/ci";
import styled from "styled-components";


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
border-radius: 12px
`
export const IconSearch = styled(CiSearch)`
color:rgba(19, 88, 70, 1);
position: absolute;
right: 5%;
top:20%;
font-size: 1.5rem;
`