import styled from "styled-components";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

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
right:45%;
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