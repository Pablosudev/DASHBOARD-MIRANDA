import React, { useEffect, useState } from "react";

import {
  CardCreate,
  IconClose,
  ButtonSave,
  CancellationBox,
  ButtonAmenities,
  BoxDescription,
  TitlePrice,
  InputDiscount,
  InputDescription,
  TitleDescripition,
  ButtonOffer,
  Price,
  PriceBox,
  InputCreate,
  BoxInfo,
  RoomInfo,
  BoxTitle,
  TitleSection,
  ContainerSections,
} from "../../Rooms/Components/RoomsCreate";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getBookingsId, getStatusId } from "../Features/BookingsSlice";
import { IdRoomThunk } from "../../Rooms/Features/RoomsThunk";
import { EditBookingThunk } from "../Features/BookingsThunk";

export const BookingsEdit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id} = useParams();
  const BookingId = useSelector(getBookingsId);
  const StatusBookingId = useSelector(getStatusId);
  const [newBooking, setNewBooking] = useState({
    full_name: "",
    check_in: "",
    check_out: "",
    room_type: "",
    price: "",
    special_request: "",
    status: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBooking((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleEditBookings = () => {
      dispatch(EditBookingThunk({ id: Number(id), updatedBooking: newBooking }))
        .unwrap()
        .then(() => {
          alert("Reserva actualizada correctamente");
          navigate("/bookings");
        })
        .catch((error) => {
          alert("Error al actualizar la habitación: " + error.message);
        });
    };

  useEffect(() => {
    if (StatusBookingId === "idle") {
      dispatch(IdRoomThunk(id));
    } else if (StatusBookingId === "fulfilled") {
      setNewBooking({
        full_name: BookingId.full_name,
        check_in: BookingId.check_in,
        check_out: BookingId.check_out,
        room_type: BookingId.room_type,
        price: BookingId.price,
        special_request: BookingId.special_request,
        status: BookingId.status,
      });
    } else if (StatusBookingId === "rejected") {
      alert("Error al cargar los datos de la reserva");
    }
  }, [StatusBookingId, id , dispatch , BookingId]);

  return (
    <CardCreate>
      <ContainerSections>
        <IconClose
          onClick={() => {
            navigate("/bookings");
          }}
        />
        <RoomInfo>Bookings Edit </RoomInfo>
        <BoxTitle>
          <div>
            <TitleSection>Name</TitleSection>
            <InputCreate
              type="text"
              name="room_type"
              value={newBooking.full_name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <TitleSection>Room Type</TitleSection>
            <InputCreate
              type="text"
              name="room_type"
              value={newBooking.room_type}
              onChange={handleInputChange}
            />
          </div>
        </BoxTitle>
        <BoxInfo>
          <PriceBox>
            <TitlePrice>Price/Night</TitlePrice>
            <Price
              type="text"
              name="room_price"
              value={newBooking.price}
              onChange={handleInputChange}
            />
          </PriceBox>
          <PriceBox>
          <TitlePrice>Check-In</TitlePrice>
            <Price
              type="text"
              name="room_price"
              value={new Date(newBooking.check_in)}
              onChange={handleInputChange}
            />
          </PriceBox>
          <PriceBox>
          <TitlePrice>Check-Out</TitlePrice>
            <Price
              type="text"
              name="room_price"
              value={new Date(newBooking.check_out)}
              onChange={handleInputChange}
            />
          </PriceBox>
          <PriceBox>
            <TitlePrice>Status</TitlePrice>
            <InputDiscount
              type="text"
              name="status"
              value={newBooking.status}
              onChange={handleInputChange}
            />
          </PriceBox>
        </BoxInfo>

        <BoxDescription>
          <div>
            <TitleDescripition>Description</TitleDescripition>
            <InputDescription
              type="text"
              name="special_request"
              value={newBooking.special_request}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <TitleDescripition>Amenities</TitleDescripition>
            <div>
              <ButtonAmenities onClick={() => handleAmenities("FREE WIFI")}>
                FREE WIFI
              </ButtonAmenities>
              <ButtonAmenities onClick={() => handleAmenities("TV LED")}>
                TV LED
              </ButtonAmenities>
              <ButtonAmenities onClick={() => handleAmenities("2 BATHROOM")}>
                2 BATHROOM
              </ButtonAmenities>
              <ButtonAmenities onClick={() => handleAmenities("AC")}>
                AC
              </ButtonAmenities>
              <ButtonAmenities onClick={() => handleAmenities("3 BED SPACE")}>
                3 BED SPACE
              </ButtonAmenities>
              <ButtonAmenities onClick={() => handleAmenities("COFEE SET")}>
                COFEE SET
              </ButtonAmenities>
              <ButtonAmenities onClick={() => handleAmenities("BATHUP")}>
                BATHUP
              </ButtonAmenities>
              <ButtonAmenities onClick={() => handleAmenities("TOWEL")}>
                TOWEL
              </ButtonAmenities>
              <ButtonAmenities onClick={() => handleAmenities("SHOWER")}>
                SHOWER
              </ButtonAmenities>
            </div>
          </div>
        </BoxDescription>

        <CancellationBox>
          <TitleSection>Cancellation Policy</TitleSection>
          <p>
            Guests may cancel their reservation up to 48 hours prior to the
            scheduled check-in date without any charge. Cancellations made
            within 48 hours of the check-in date will incur a one-night charge.
            No-shows will be charged the full amount of the reservation. For any
            changes or cancellations, please contact the hotel directly.
          </p>
        </CancellationBox>
        <ButtonSave onClick={handleEditBookings}>SAVE</ButtonSave>
      </ContainerSections>
    </CardCreate>
  );
};
