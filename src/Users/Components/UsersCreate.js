import styled from "styled-components";
import { MdAddAPhoto } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";

export const ContainerNewUsers = styled.section`
    background-color:#ffffff;
    position: absolute;
    right: 20%;
    top:20%;
    padding-left:3rem;
    padding-right:3rem;
    border-radius:12px;
`
export const ImgUser = styled.img`
    width:15rem;
    height:15rem;
    padding-left:10%;
`
export const TitleHotel = styled.h1`
    color:#135846;
    font-family: "Poppins";
    font-size: 6rem;
`
export const ContainerImg = styled.div`
position: relative;
margin-bottom:7rem;
display: flex;
justify-content:space-around;
`
export const AddImg = styled(MdAddAPhoto)`
position: absolute;
top: 5%;
left:42%;
font-size: 3rem;

`
export const ContainerInput = styled.div`
display: flex;
justify-content: space-around;
`
export const BoxArticle = styled.article`
background-color:rgb(207, 205, 205);
border-radius: 12px;
padding-left: 1rem;
padding-right: 1rem;
padding-bottom: 1rem;
`
export const TypeInput = styled.h3`
font-family: "Poppins";
color:#135846;
`
export const InputName = styled.input`
border:transparent;
border-radius: 12px;
padding-top:1rem;
padding-bottom:1rem;
padding-left:0.5rem;
padding-right:2rem;
`
export const InputDesk = styled.input`
border:transparent;
border-radius: 12px;
padding-top:1rem;
padding-bottom:4rem;
padding-left:0.5rem;
padding-right:5rem;
`
export const ContainerButton = styled.div`
margin-top:3rem;
margin-left:46%;
margin-bottom:4rem;
`
export const IconClose = styled(IoMdCloseCircleOutline)`
color:#135846;
font-size:3rem;
position: absolute;
right: 4%;
top:2%;
`