import styled from "styled-components";
<<<<<<< HEAD
import { ButtonGreenProps } from "../InterfacesCommon/CommonInterface";

=======

export interface ButtonGreenProps {
    type: string,
}
>>>>>>> 20e8c94a76ff30b63110851212c9fe8cc4b6849c

export const ButtonGreen = styled.button<ButtonGreenProps>`
font-family: "Poppins"; 
padding-left:1.5rem;
padding-right:1.5rem;
padding-top:1rem;
padding-bottom:1rem;
border: 1px solid #135846;
border-radius: 12px;
background-color: ${props => props.type === 'primary' ? '#ffffff' : '#135846'};
color: ${props => props.type === 'primary' ? '#135846' : '#ffffff'};
`

