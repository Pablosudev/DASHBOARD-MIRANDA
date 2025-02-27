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
import { AppDispatch } from "../../App/Store";
import {
  BookingsDetailsInter,
  BookingsInter,

} from "../Interfaces/BookingsInterfaces";

export const BookingsDetails = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const images = [
    "/src/assets/Imagenes/room1.jpg",
    "/src/assets/Imagenes/room2.jpg",
    "/src/assets/Imagenes/room5.jpg",
    "/src/assets/Imagenes/room4.jpg",
  ];
  const [bookingsDetails, setBookingDetails] = useState<BookingsDetailsInter>({
    name: "",
    date: "",
    check_in: "",
    check_out: "",
    type: "",
    price: 0,
    request: "",
    status: "",
    number: 0,
  });
  const StatusBookingsId = useSelector(getStatusId);
  const BookingsId: BookingsInter | null = useSelector(getBookingsId);
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<string>();
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
  const handleChangeEdit = (_id: string ) => {
    navigate(`/bookings/edit/${bookingsDetails._id}`);
  };

  useEffect(() => {
    if (StatusBookingsId === "idle") {
      dispatch(BookingsIdThunk(id));
    } else if (StatusBookingsId === "fulfilled") {
      if (BookingsId !== null) {
        const parsedId = parseInt(id!);

        if (BookingsId.id !== parsedId) {
          dispatch(BookingsIdThunk(id));
        }
        setBookingDetails({
          name: BookingsId.name,
          check_in: BookingsId.check_in,
          check_out: BookingsId.check_out,
          type: BookingsId.type,
          price: BookingsId.price,
          request: BookingsId.request,
          status: BookingsId.status,
          number: BookingsId.number,
        });
      }
    } else if (StatusBookingsId === "rejected") {
      alert("Error al cargar los datos de la reserva");
    }
  }, [dispatch, id, StatusBookingsId, BookingsId]);

  return (
    <>
      <CardBookings key={bookingsDetails._id}>
        <CardInfo>
          <Link to={"/bookings"}>
            <CloseIcon />
          </Link>
          <NameBooking>{bookingsDetails.name}</NameBooking>
          <IdBookings>{bookingsDetails._id}</IdBookings>
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
                {bookingsDetails.type} {bookingsDetails.number}
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
          <ButtonBookingsDetails status={bookingsDetails.status}>
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
