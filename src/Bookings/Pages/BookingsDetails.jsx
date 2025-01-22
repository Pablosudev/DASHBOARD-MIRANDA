import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import bookings from "../Data/bookings.json";
import {
  TypeSlide, BoxDescription, ButtonDetails, BoxRoom, CardInfo, ContainerRoom,
  TypeRoom, BoxPrice, Price, ImgSlide, Night, ButtonSlideLeft, ButtonSlideRight,
  IconArrowLeft, IconArrowRight, DescriptionRoom, CardBookings, CardSlide,
  PhoneIcon, IconMessage, ButtonMessage, BoxMessage, ContainerDetails, BoxCheck,
  TitleData, DataCheck, NameBooking, IdBookings, Request
} from "../Components/BookingsDetails";

export const BookingsDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [booking, setBooking] = useState(null); 
  const { id_booking } = useParams(); 

  const images = [
    "/src/assets/Imagenes/room1.jpg",
    "/src/assets/Imagenes/room2.jpg",
    "/src/assets/Imagenes/room5.jpg",
    "/src/assets/Imagenes/room4.jpg"
  ];

  
  useEffect(() => {
    const selectedBooking = bookings.find((booking) => booking.id_booking === parseInt(id_booking));
    setBooking(selectedBooking);
  }, [id_booking]);

 
  if (!booking) {
    return <div>Booking not found</div>;
  }

  const handleButtonNext = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleButtonPrev = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <CardBookings key={booking.id_booking}>
        <CardInfo>
          
          <NameBooking>{booking.full_name}</NameBooking>
          <IdBookings>{booking.id_booking}</IdBookings>

          <BoxMessage>
            <PhoneIcon />
            <ButtonMessage>
              <IconMessage /> Send Message
            </ButtonMessage>
          </BoxMessage>

          <ContainerDetails>
            <BoxCheck>
              <TitleData>Check In</TitleData>
              <DataCheck>{booking.check_in}</DataCheck> 
            </BoxCheck>
            <BoxCheck>
              <TitleData>Check Out</TitleData>
              <DataCheck>{booking.check_out}</DataCheck> 
            </BoxCheck>
          </ContainerDetails>

          <ContainerRoom>
            <BoxRoom>
              <TitleData>Room Info</TitleData>
              <TypeRoom>{booking.room_type} - {booking.number_room}</TypeRoom> 
            </BoxRoom>
            <BoxRoom>
              <TitleData>Price</TitleData>
              <BoxPrice>
                <Price>${booking.price}</Price> 
                <Night>/night</Night>
              </BoxPrice>
            </BoxRoom>
          </ContainerRoom>

          <Request>{booking.special_request}</Request> 

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
          <ImgSlide src={images[currentImage]} alt="photo room" />
          <ButtonSlideRight onClick={handleButtonNext}>
            <IconArrowRight />
          </ButtonSlideRight>
          <ButtonSlideLeft onClick={handleButtonPrev}>
            <IconArrowLeft />
          </ButtonSlideLeft>
          <BoxDescription>
            <TypeSlide>Deluxe</TypeSlide>
            <DescriptionRoom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </DescriptionRoom>
          </BoxDescription>
        </CardSlide>
      </CardBookings>
    </>
  );
};
