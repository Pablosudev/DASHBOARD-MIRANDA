import styled from "styled-components";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";



export const CardCreate = styled.section`
margin-top: 10%;
margin-left:10%;
background-color: #FFFFFF;
border-radius: 12px;
width:92rem;
max-height:49.5rem;
display: flex;
justify-content:space-between;
position:relative;
`
export const ContainerSections = styled.div`
width:92rem;
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
right: 0%;
`
export const ButtonSlideLeft = styled.button`
background-color:#C5C5C5;
position:absolute;
bottom:25%;
right:45%;
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
margin-left: 4rem;
margin-right: 5rem;
`
export const BoxInfo = styled.div`
display:flex;
`
