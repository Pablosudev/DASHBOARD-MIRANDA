import styled from "styled-components";
import { GiCancel } from "react-icons/gi";
import { FaRegCircleCheck } from "react-icons/fa6"
import { MdOutlineCancel } from "react-icons/md";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import { IoCloseCircleOutline } from "react-icons/io5";


export const SliderReviews = styled.div`
  margin-top: 10%;
  margin-left:2%
`
export const SliderDashboard = styled.div`
  margin-top: 5%;
`
export const BoxReviews = styled.div`
background-color: #ffffff;
box-shadow: 0px 4px 4px #00000005;
border-radius: 0.8rem;
padding-left: 2%;
padding-right:2%;
padding-top: 2%;
padding-bottom: 1%;
width: 100%;

`
export const CancelIcon = styled(GiCancel)`
color: #E23428;
font-size:2rem;
margin-right:15%;
`
export const CheckIcon = styled(FaRegCircleCheck)`
color:#5AD07A;
font-size:2rem;
`
export const TimeReview = styled.p`
text-align: left;
margin-top: 0%;
font: normal normal normal 14px/21px "Poppins";
color: #799283;
`
export const Review = styled.p`
text-align: left;
font: normal normal normal 16px/28px "Poppins";
color: #4E4E4E;
margin-bottom: 2.5rem;
`
export const BoxTime = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
export const BoxName = styled.div`
display:flex;
flex-direction: column;
margin-left:1rem;
`
export const BoxCard = styled.div`
display: flex;
align-items: center;

`
export const ImgUser = styled.img`
width:3.5rem;
height:3.5rem;
`
export const NameReview = styled.h3`
text-align: left;
font: normal normal 600 16px/25px Poppins;
color: #262626;
margin-bottom:0%;
`
export const BoxIcon = styled.div`
position:absolute;
right: 2%;
display: flex;
`
export const CancelArchive = styled(MdOutlineCancel)`
color: red;
font-size: 1.5rem;
margin-top: 0.5rem;
margin-left: 40%;
align-items:center;
cursor: pointer;
`
export const ButtonDelete = styled.button`
    background: rgb(216, 231, 226) 0% 0% no-repeat padding-box;
    text-align: center;
    font: normal normal 600 14px/21px Poppins;
    letter-spacing: 0px;
    color: rgb(236, 68, 68);
    opacity: 1;
    border: transparent;
    background: rgba(235, 241, 239, 1) 0% 0% no-repeat padding-box;
    border-radius: 8px;
    opacity: 1;
    padding-left: 20%;
    padding-right: 20%;
    padding-top:3%;
    padding-bottom: 3%;
    margin-top: 1rem;
    cursor: pointer;
`

export const SelectTitle = styled.h3<{ $isActive: boolean }>`
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 4%;
  margin-top:4%;
  font-family: "Poppins";
  color: ${(props) => (props.$isActive ? "#135846" : "#6E6E6E")}; 
  cursor: pointer; 
  transition: color 0.3s ease; 
  
  ${(props) =>
    props.$isActive &&
    `
    border-bottom: 2px solid #135846;
    font-weight: bold; 
  `}

  &:hover {
    color: #135846; 
  }
`;

export const ContactInput = styled.input`
border-radius:12px;
background-color:#ffffff;
padding-left:2rem;
padding-right:2rem;
padding-top:0.7rem;
padding-bottom:0.7rem; 
border: 1px solid rgba(19, 88, 70, 1);

`
export const  StyledSwiper = styled(Swiper)`
width:100%;
margin:0%; 
`;
export const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  align-items: center;
`;
export const SectionContact = styled.div`
width: 100%;
max-width:100%;
margin-left:2%;
margin-right: 2%;
margin-top: 10%;
overflow: hidden;
`
export const PopUp = styled.div`
position: fixed; 
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  background-color: white; 
  padding: 20px; 
  border-radius: 8px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  z-index: 9999;
  font-family: "Poppins";
  padding-top: 5%;
  padding-bottom: 5%;
`
export const ClosePopUp = styled(IoCloseCircleOutline )`
position: absolute;
top: 2%;
right: 1%;
width: 2rem;
height: 2rem;
cursor: pointer;
`
export const NamePopUp = styled.p`
font-family: "Poppins";
font-size: 1.5rem;
margin-bottom: 1%;
`
export const DatePopUp= styled.p`
font-family: "Poppins";
font-size: 1.2rem;
margin-bottom: 1%;
`
