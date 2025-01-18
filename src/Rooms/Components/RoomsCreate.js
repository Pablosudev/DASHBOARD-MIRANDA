import styled from "styled-components";
import { IoMdCloseCircleOutline } from "react-icons/io";

export const CardCreate = styled.section`
margin-top: 10%;
margin-left:4%;
background-color: #FFFFFF;
border-radius: 12px;
padding-bottom: 10rem;
max-height:49.5rem;
display: flex;
justify-content:space-between;
position:relative;
margin-bottom:6rem;
`
export const ContainerSections = styled.div`
width:92rem;
`
export const TitleSection = styled.h3`
font-family: "Poppins";
`
export const BoxTitle = styled.div`
margin-top: 3rem;
align-items: center;
border-bottom:2px solid #F8F8F8;
display: flex;
justify-content: space-around;
margin-left: 3rem;
margin-right:3rem;
`
export const RoomInfo = styled.h4`
color: #6E6E6E;
font-family: "Poppins";
font-size:2rem;
margin-left: 5rem;
margin-right: 5rem;
border-bottom: 1px solid #6E6E6E;
`
export const BoxInfo = styled.div`
display:flex;
justify-content:space-around;
`
export const InputCreate = styled.input`
background-color: #C5C5C5;
border:transparent;
border-radius:0.8rem;
padding-left:0.5rem;
padding-top:0.5rem;
padding-bottom:1rem;
padding-right:1rem;
margin-bottom:2rem;
`
export const PriceBox = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
export const TitlePrice = styled.h3`
font-family: "Poppins";
font-size:1rem;
`
export const Price = styled.input`
background-color: #C5C5C5;
border:transparent;
border-radius:0.8rem;
padding-left:0.5rem;
padding-top:0.5rem;
padding-bottom:1rem;
padding-right:0%.8;
margin-bottom:2rem;
margin-left:2rem;
`
export const ButtonOffer = styled.button`
background-color:#c5c5c5;
color:#135846;
border-radius: 0.8rem;
padding-left: 2rem;
padding-right: 2rem;
padding-top: 1rem;
padding-bottom: 1rem;
margin-bottom: 1rem;
margin-right: 1rem;
border: transparent;
&:hover{
    color: #ffffff;
    background-color:#135846;
}
`
export const TitleDescripition = styled.h3`
font-family: "Poppins";
font-size:1.5rem;
margin-left:2rem;
`
export const InputDescription  = styled.input`
padding-left: 1rem;
padding-right: 8rem;
padding-top: 1rem;
padding-bottom: 4rem;
background-color: #c5c5c5;
border:transparent;
border-radius: 0.8rem;
margin-left: 2rem;
`
export const InputDiscount = styled.input`
background-color: #C5C5C5;
border:transparent;
border-radius:0.8rem;
padding-top:0.5rem;
padding-bottom:1rem;
margin-bottom:2rem;
margin-left:2rem;
`
export const BoxDescription = styled.div`
display: flex;
justify-content: space-around;
`
export const ButtonAmenities = styled.button`
border-radius: 0.8rem;
border: 1px solid #135846;
color:#135846;
background-color:#ffffff;
padding-top: 0.5rem;
padding-bottom:0.5rem;
margin-right: 0.5rem;

&:hover{
background-color:#135846;
color: #ffffff;
}
`
export const CancellationBox = styled.div`
margin-left: 8rem;
margin-right:8rem;
margin-top: 4rem;
font-family: "Poppins";
`
export const ButtonSave = styled.button`
padding-left:1.5rem;
padding-right:1.5rem;
padding-top:1rem;
padding-bottom:1rem;
border: 1px solid #135846;
color:  #135846;
border-radius: 12px;
position: absolute;
left: 50%;
&:hover {
    background-color:#135846;
    color:#ffffff;
}
`
export const IconClose = styled(IoMdCloseCircleOutline)`
color:#135846; 
position:absolute;
right: 2%;
top: 2%;
font-size:2.5rem;
`