import styled from "styled-components"
import { FaHotel } from "react-icons/fa6"

export const InputStyled = styled.input`
    margin: 1rem;
    border: none;
    border-bottom: 2px solid rgba(19, 88, 70, 1);
    background-color: transparent;
    outline: none;
    padding: 5px 0;
`

export const ButtonStyled = styled.button`
    border: 2px;
    background-color: rgba(19, 88, 70, 1);
    color: white;
    border-radius: 9%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem; 
`
export const DivStyled = styled.div`
    background-color: rgb(226, 222, 222);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.02);
    border-radius: 2%;
    padding-bottom: 10%;
    padding-top: 5%;
    max-width: 30%;
    margin-top: 10%;
    margin-left: 35%;
    text-align: center;
`
 export const CustomIcon = styled(FaHotel)`
    color: rgba(19, 88, 70, 1);
    height: 2rem;
` ;
