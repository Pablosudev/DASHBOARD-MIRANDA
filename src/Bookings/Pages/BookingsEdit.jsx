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
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getBookingsId, getStatusId } from "../Features/BookingsSlice";
import { IdRoomThunk } from "../../Rooms/Features/RoomsThunk";

export const BookingsEdit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  useEffect(() => {
    if (StatusBookingId === "idle") {
      dispatch(IdRoomThunk(id));
    } else if (StatusBookingId === "fulfilled") {
      setNewBooking({
        full_name: newBooking.full_name,
        check_in: newBooking.check_in,
        check_out: newBooking.check_out,
        room_type: newBooking.room_type,
        price: newBooking.price,
        special_request: newBooking.special_request,
        status: newBooking.status,
      });
    } else if (StatusBookingId === "rejected") {
      alert("Error al cargar los datos de la reserva");
    }
  }, []);

  return (
    <CardCreate>
      <ContainerSections>
        <IconClose
          onClick={() => {
            navigate("/rooms");
          }}
        />
        <RoomInfo>Room Info</RoomInfo>
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
            <TitleSection>Room Number</TitleSection>
            <InputCreate
              type="text"
              name="room_number"
              value={newRoom.room_number}
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
              value={newRoom.room_price}
              onChange={handleInputChange}
            />
          </PriceBox>
          <PriceBox>
            <TitlePrice>Offer</TitlePrice>
            <div>
              <ButtonOffer
                onClick={() =>
                  setNewRoom((prevState) => ({
                    ...prevState,
                    room_offer: 10,
                  }))
                }
              >
                10%
              </ButtonOffer>
              <ButtonOffer
                onClick={() =>
                  setNewRoom((prevState) => ({
                    ...prevState,
                    room_offer: 15,
                  }))
                }
              >
                15%
              </ButtonOffer>
            </div>
          </PriceBox>
          <PriceBox>
            <TitlePrice>Discount</TitlePrice>
            <InputDiscount
              type="text"
              name="room_discount"
              value={newRoom.room_discount}
              onChange={handleInputChange}
            />
          </PriceBox>
        </BoxInfo>

        <BoxDescription>
          <div>
            <TitleDescripition>Description</TitleDescripition>
            <InputDescription
              type="text"
              name="room_description"
              value={newRoom.room_description}
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
        <ButtonSave onClick={handleCreateRoom}>SAVE</ButtonSave>
      </ContainerSections>
    </CardCreate>
  );
};
