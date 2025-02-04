import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import {
  TypeSlide,
  BoxDescription,
  ButtonDetails,
  BoxRoom,
  CardInfo,
  ContainerRoom,
  TypeRoom,
  BoxPrice,
  Price,
  ImgSlide,
  Night,
  ButtonSlideLeft,
  ButtonSlideRight,
  IconArrowLeft,
  IconArrowRight,
  DescriptionRoom,
  CardBookings,
  CardSlide,
  PhoneIcon,
  IconMessage,
  ButtonMessage,
  BoxMessage,
  ContainerDetails,
  BoxCheck,
  TitleData,
  DataCheck,
  NameBooking,
  IdBookings,
  Request,
  CloseIcon,
  ButtonEditDetails,
  ButtonBookingsDetails,
} from "../Components/BookingsDetails";
import { useSelector } from "react-redux";
import { getBookingsId, getStatusId } from "../Features/BookingsSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BookingsIdThunk } from "../Features/BookingsThunk";


export const BookingsDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [booking, setBooking] = useState(null);
  const images = [
    "/src/assets/Imagenes/room1.jpg",
    "/src/assets/Imagenes/room2.jpg",
    "/src/assets/Imagenes/room5.jpg",
    "/src/assets/Imagenes/room4.jpg",
  ];
  const [bookingsDetails, setBookingDetails] = useState({
    full_name: "",
    check_in: "",
    check_out: "",
    room_type: "",
    price: "",
    special_request: "",
    status: "",
  });
  const StatusBookingsId = useSelector(getStatusId);
  const BookingsId = useSelector(getBookingsId);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  //BOTONES PARA IMG
  const handleButtonNext = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleButtonPrev = () => {
    setCurrentImage(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  const handleChangeEdit = () => {
    navigate(`/bookings/edit/${bookingsDetails.id}`)
  }
  
  useEffect(() => {
    if (StatusBookingsId === "idle") {
      dispatch(BookingsIdThunk(id));
    } else if (StatusBookingsId === "fulfilled") {
      if (BookingsId.id != id) {
        dispatch(BookingsIdThunk(id));
      }
      setBookingDetails({
        full_name: BookingsId.full_name,
        check_in: BookingsId.check_in,
        check_out: BookingsId.check_out,
        room_type: BookingsId.room_type,
        price: BookingsId.price,
        special_request: BookingsId.special_request,
        status: BookingsId.status,
      });
    } else if (StatusBookingsId === "rejected") {
      alert("Error al cargar los datos de la reserva");
    }
  }, [dispatch, id, StatusBookingsId, BookingsId]);

  return (
    <>
      <CardBookings key={bookingsDetails.id}>
        <CardInfo>
          <Link to={"/bookings"}>
            <CloseIcon />
          </Link>
          <NameBooking>{bookingsDetails.full_name}</NameBooking>
          <IdBookings>{bookingsDetails.id}</IdBookings>
          <BoxMessage>
            <PhoneIcon />
            <ButtonMessage>
              <IconMessage /> Send Message
            </ButtonMessage>
            <ButtonMessage onClick={() => handleChangeEdit(id)}>
              Edit <ButtonEditDetails />
            </ButtonMessage>
          </BoxMessage>

          <ContainerDetails>
            <BoxCheck>
              <TitleData>Check In</TitleData>
              <DataCheck>{bookingsDetails.check_in}</DataCheck>
            </BoxCheck>
            <BoxCheck>
              <TitleData>Check Out</TitleData>
              <DataCheck>{bookingsDetails.check_out}</DataCheck>
            </BoxCheck>
          </ContainerDetails>
          <ContainerRoom>
            <BoxRoom>
              <TitleData>Room Info</TitleData>
              <TypeRoom>
                {bookingsDetails.room_type} {bookingsDetails.number_room}
              </TypeRoom>
            </BoxRoom>
            <BoxRoom>
              <TitleData>Price</TitleData>
              <BoxPrice>
                <Price>${bookingsDetails.price}</Price>
                <Night>/night</Night>
              </BoxPrice>
            </BoxRoom>
          </ContainerRoom>

          <Request>{bookingsDetails.special_request}</Request>
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
          <ButtonBookingsDetails status = {bookingsDetails.status}>
            {bookingsDetails.status}
          </ButtonBookingsDetails>
          <ImgSlide src={images[currentImage]} alt="photo room" />
          <ButtonSlideRight onClick={handleButtonNext}>
            <IconArrowRight />
          </ButtonSlideRight>
          <ButtonSlideLeft onClick={handleButtonPrev}>
            <IconArrowLeft />
          </ButtonSlideLeft>
          <BoxDescription>
            <TypeSlide>{bookingsDetails.room_type}</TypeSlide>
            <DescriptionRoom>{bookingsDetails.special_request}</DescriptionRoom>
          </BoxDescription>
        </CardSlide>
      </CardBookings>
    </>
  );
};
