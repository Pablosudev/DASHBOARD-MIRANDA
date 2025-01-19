import styled from "styled-components";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


export const CardBookings = styled.section`
background-color: #ffffff;
margin-left: 4%;
margin-top:10%;
border-radius:0.8rem; 
display: flex; 
`
export const CardSlide = styled.article`
position: relative;
`
export const ImgSlide = styled.img`
width:46rem;
height:49.5rem;
border-bottom-right-radius: 12px;
border-top-right-radius: 12px;
`
export const IconArrowRight = styled(FaLongArrowAltRight)`
font-size: 1rem;
color: #ffffff;
`
export const IconArrowLeft = styled(FaLongArrowAltLeft)`
font-size: 1rem;
color: #ffffff;
`
export const ButtonSlideRight = styled.button`
background-color:#C5C5C5;
position:absolute;
bottom:25%;
right: 2%;
border:transparent;
border-radius:10%;
padding-top:0.8rem;
padding-bottom:0.8rem;
padding-left:1rem;
padding-right:1rem;
&:hover{
    background-color:rgb(136, 136, 136);
}
`
export const ButtonSlideLeft = styled.button`
background-color:#C5C5C5;
position:absolute;
bottom:25%;
left:2%;
border:transparent;
border-radius:10%;
padding-top:0.8rem;
padding-bottom:0.8rem;
padding-left:1rem;
padding-right:1rem;

&:hover{
    background-color:rgb(136, 136, 136);
}
`
export const PhoneIcon = styled(FaPhoneAlt )`
color:#135846;
`