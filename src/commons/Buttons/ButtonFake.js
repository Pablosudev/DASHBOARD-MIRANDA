import styled from "styled-components"


export const ButtonFake = styled.button`
background-color: ${(props) => (props.active ? '#135846' : '#F5F5F5')};
color: ${(props) => (props.active ? 'white' : 'black')};
padding-top:1rem;
padding-bottom:1rem;
padding-left:1.2rem;
padding-right:1.2rem;
border-radius: 12px;
border: transparent;
`