import styled from "styled-components";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { LuMessageCircleMore } from "react-icons/lu";
import { GrView } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoCloseCircleOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";

export const CardBookings = styled.section`
background-color: #ffffff;
margin-left: 4%;
margin-top:10%;
border-radius:0.8rem; 
display: flex; 
max-width: 92rem;
max-height: 47rem;
`
export const CardInfo = styled.article`
padding-left: 4rem;
padding-right: 4rem;
position: relative; 
`
export const CardSlide = styled.article`
position: relative;
`
export const ImgSlide = styled.img`
width:46rem;
height:47rem;
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
border: 1px solid #E8F2EF;
padding: 1rem;
border-radius: 0.8rem;
`
export const IconMessage = styled(LuMessageCircleMore)`
color: #ffffff;
font-size: 1.3rem;
margin-right: 0.5rem;
`
export const ButtonMessage = styled.button`
background-color: #135846;
border: transparent;
color: #ffffff;
font-family: "Poppins";
font-size:1rem;
padding-left: 2rem;
padding-right: 2rem;
border-radius: .8rem; 
display: flex;
align-items: center;

`
export const ButtonEditDetails = styled(CiEdit)`
color: #ffffff;
font-family: "Poppins";
font-size:1.5rem;
margin-left: 1rem;
`

export const IdBookings = styled.p`
font-family: "Poppins";
font-size: 0.8rem;
color:#799283;
text-align: center;
`
export const BoxMessage = styled.div`
display: flex;
justify-content: space-around;
margin-top: 2rem;
margin-bottom: 0.5rem;
`
export const ContainerDetails = styled.article`
display: flex;
border-bottom:2px solid #C5C5C5;
margin-right: 1rem;
margin-left: 1rem;
margin-top: 2rem;
justify-content: center ;
`
export const BoxCheck = styled.div`
margin-right: 2rem;
margin-left: 2rem;
text-align:left;

`
export const TitleData = styled.h3`
font-family: "Poppins";
font-size: 0.87rem;
color: #6E6E6E;
`
export const DataCheck = styled.p`
font-family: "Poppins";
font-size: 1rem; 
`
export const NameBooking = styled.h1`
font-family: "Poppins";
font-size: 1.8rem;
margin-top: 5rem;
text-align: center;
margin-bottom: 0%;
`
export const Night = styled.p`
color: #799283;
font-family: "Poppins";
font-size: 0.87rem;
margin-top: 0%;
`
export const BoxPrice = styled.div`
display: flex;
align-items: center;
`
export const Price = styled.p`
font-family: "Poppins";
font-size: 1.5rem;
margin-right: 0.5rem;
margin-top: 0%;
`
export const TypeRoom = styled.p`
font-family: "Poppins";
font-size: 1.5rem;
margin-top: 1rem;
`
export const ContainerRoom = styled.div`
display: flex;
justify-content: center;
margin-top: 2rem;
`
export const Request = styled.p`
font-family: "Poppins";
font-size: 0.87rem;
text-align: left;
`
export const BoxRoom = styled.div`
margin-left: 3rem;
margin-right: 2rem;
`
export const ButtonDetails = styled.button`
border-radius: 0.8rem;
border: 1px solid #135846;
background-color:#135846;
color: #ffffff;
padding-top: 0.5rem;
padding-bottom:0.5rem;
margin-right: 0.5rem;
margin-bottom: 0.5rem;
`
export const TypeSlide = styled.h3`
font-family: "Poppins";
font-size: 1.5rem;
color: #ffffff;
`
export const DescriptionRoom = styled.p`
font-family: "Poppins";
font-size: 0.8rem;
color: #ffffff;
`
export const BoxDescription = styled.div`
position: absolute;
bottom:  5%; 
padding-left: 2rem;
padding-right: 2rem;
`
export const EditIcon = styled(GrView)`
font-size: 1.5rem;
margin-right: 1rem;
color: green;
`
export const DeleteIcon = styled(RiDeleteBin6Line)`
font-size: 1.5rem;
color: red;
`
export const CloseIcon = styled(IoCloseCircleOutline )`
font-size: 2rem;
position: absolute;
top: 4%;
left: 5%;
color: #135846;
`
export const ButtonBookingsDetails = styled.button`
position: absolute;
right: 2%;
top:2%;
padding-left: 1rem;
padding-right: 1rem;
padding-top: 1rem;
padding-bottom: 1rem;
border-radius: 0.8rem;
font-family: "Poppins";
border: transparent;
background-color: ${(props) => 
    props.status === 'In Progress' ? 'yellow' :
    props.status === 'Check In' ? '#5AD07A' :
    props.status === 'Check Out' ? '#E23428' :
    'yellow'};
`