import styled from "styled-components"
<<<<<<< HEAD
import { ButtonFakeProps } from "../InterfacesCommon/CommonInterface"
=======
import { ButtonFakeProps } from "../../Users/Interfaces/UsersInterfaces"
>>>>>>> 20e8c94a76ff30b63110851212c9fe8cc4b6849c

export const ButtonFake = styled.button<ButtonFakeProps>`
background-color: ${(props) => (props.active ? '#135846' : '#F5F5F5')};
color: ${(props) => (props.active ? 'white' : 'black')};
padding-top:1rem;
padding-bottom:1rem;
padding-left:1.2rem;
padding-right:1.2rem;
border-radius: 12px;
border: transparent;
`