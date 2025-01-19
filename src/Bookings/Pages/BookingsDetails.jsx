import { useState } from "react";
import {TypeSlide , BoxDescription , ButtonDetails , BoxRoom , CardInfo ,ContainerRoom ,TypeRoom, BoxPrice, Price, ImgSlide,Night, ButtonSlideLeft, ButtonSlideRight, IconArrowLeft, IconArrowRight,DescriptionRoom, CardBookings, CardSlide, PhoneIcon, IconMessage, ButtonMessage, BoxMessage, ContainerDetails, BoxCheck, TitleData, DataCheck, NameBooking, IdBookings , Request } from "../Components/BookingsDetails";
export const BookingsDetails = () => {


const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/src/assets/Imagenes/room1.jpg",
    "/src/assets/Imagenes/room2.jpg",
    "/src/assets/Imagenes/room5.jpg",
    "/src/assets/Imagenes/room4.jpg"
  ];

  const handleButtonNext = () => {
    setCurrentImage ((prevIndex) => (prevIndex +1) % images.length);
  };
  const handleButtonPrev = () => {
    setCurrentImage ((prevIndex) => (prevIndex -1 + images.length ) % images.length)
  };

return (
    <>
    <CardBookings>
      <CardInfo>
        <NameBooking>Roberto Mansini</NameBooking>
        <IdBookings>ID 1234124512551</IdBookings>
        <BoxMessage>
          <PhoneIcon/>
          <ButtonMessage> <IconMessage/> Send Message</ButtonMessage>
        </BoxMessage>
        <ContainerDetails>
          <BoxCheck>
            <TitleData>Check In</TitleData>
            <DataCheck>October 30th, 2025 | 8:23 AM </DataCheck>
          </BoxCheck>
          <BoxCheck>
            <TitleData>Check Out</TitleData>
            <DataCheck>November 2th, 2025</DataCheck>
          </BoxCheck>
        </ContainerDetails>
        <ContainerRoom>
          <BoxRoom>
            <TitleData>Room Info</TitleData>
            <TypeRoom>Deluxe Z - 002424</TypeRoom>
          </BoxRoom>
          <BoxRoom>
            <TitleData>Price</TitleData>
            <BoxPrice>
              <Price>$145</Price>
              <Night>/night</Night>
            </BoxPrice>
          </BoxRoom>
        </ContainerRoom>
        <Request>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Request>
        <TitleData>Amenities</TitleData>
        <div>
          <ButtonDetails>FREE WIFI</ButtonDetails>
          <ButtonDetails>TV LED</ButtonDetails>
          <ButtonDetails>2 BATHROOM</ButtonDetails>
          <ButtonDetails>AC</ButtonDetails>
          <ButtonDetails>3 BED SPACE</ButtonDetails>
          <ButtonDetails>COFEE SET</ButtonDetails>
          <ButtonDetails>BATHUP</ButtonDetails>
          <ButtonDetails>TOWEL</ButtonDetails>
          <ButtonDetails>SHOWER</ButtonDetails>
        </div>
      </CardInfo>
      <CardSlide>
        <ImgSlide src= {images[currentImage]} alt="photo room 1" />
        <ButtonSlideRight onClick={handleButtonNext}><IconArrowRight/></ButtonSlideRight>
        <ButtonSlideLeft onClick={handleButtonPrev}><IconArrowLeft/></ButtonSlideLeft>
        <BoxDescription>
          <TypeSlide>Deluxe</TypeSlide>
          <DescriptionRoom>Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam , quis nostrud exerci.</DescriptionRoom>
        </BoxDescription>
      </CardSlide>

    </CardBookings>
    </>
)

}