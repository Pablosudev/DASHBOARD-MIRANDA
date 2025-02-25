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
border-radius: 12px;
border: 1px solid rgba(19, 88, 70, 1);
`
export const IconSearch = styled(CiSearch)`
color:rgba(19, 88, 70, 1);
position: absolute;
right: 5%;
top:20%;
font-size: 1.5rem;
`
export const SelectTitle = styled.h3<{ isActive: boolean }>`
  margin-left: 2rem;
  margin-bottom: 2%;
  margin-top: 4%;
  font-family: "Poppins";
  color: ${(props) => (props.isActive ? "#135846" : "#6E6E6E")}; 
  cursor: pointer; 
  transition: color 0.3s ease; 
  
  
  ${(props) =>
    props.isActive &&
    `
    border-bottom: 2px solid #135846;
    font-weight: bold; 
  `}

  &:hover {
    color: #135846; 
  }
`