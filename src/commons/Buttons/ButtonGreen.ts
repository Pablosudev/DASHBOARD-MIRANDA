import styled from "styled-components";

export interface ButtonGreenProps {
    type: string,
}

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

