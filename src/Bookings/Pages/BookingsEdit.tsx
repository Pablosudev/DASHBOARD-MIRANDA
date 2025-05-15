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
import { AppDispatch } from "../../App/Store";
import { BookingsInter } from "../Interfaces/BookingsInterfaces";

export const BookingsEdit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const {id} = useParams<{id: string}>();
  const BookingId = useSelector(getBookingsId);
  const StatusBookingId = useSelector(getStatusId);
  const formatedDate = Date.toString()
  const [newBooking, setNewBooking] = useState<BookingsInter>({
    name: "",
    _id: 0,
    date: new Date,
    check_in: new Date,
    check_out: new Date,
    request: "",
    status: "",
    room_id: 0,
  });
  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewBooking((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleEditBookings = () => {
      dispatch(EditBookingThunk({ id, updatedBooking: newBooking }))
        .unwrap()
        .then(() => {
          alert("Reserva actualizada correctamente");
          navigate("/bookings");
        })
        .catch((error) => {
          alert("Error al actualizar la habitación: " + error.message);
        });
    };
    // const handleAmenities = (amenity: string) => {
    //   setNewBooking ((prevState) => {
    //     const changeAmenities = prevState.amenities.includes(amenity)
    //     ?prevState.amenities.filter((item) => item !== amenity) : [...prevState.amenities,amenity];
    //     return {
    //       ...prevState,
    //       amenities: changeAmenities,
    //     }
    //   })
    // }

  useEffect(() => {
    if (StatusBookingId === "idle") {
      dispatch(IdRoomThunk(Number(id)));
    } else if (StatusBookingId === "fulfilled") {
      const booking = BookingId as BookingsInter;
      setNewBooking({
        name: booking.name,
        _id: booking._id,
        date: booking.date,
        check_in: booking.check_in,
        check_out: booking.check_out,
        request: booking.request,
        status: booking.status,
        room_id: booking.room_id,
        type: booking.type,
        number:booking.number
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
              name="full"
              value={newBooking.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <TitleSection>Room Type</TitleSection>
            <InputCreate
              type="text"
              name="room_type"
              value={newBooking.type}
              onChange={handleInputChange}
            />
          </div>
        </BoxTitle>
        <BoxInfo>
          <PriceBox>
            <TitlePrice>Price/Night</TitlePrice>
            <Price
              type="text"
              name="price"
              value={newBooking.price}
              onChange={handleInputChange}
            />
          </PriceBox>
          <PriceBox>
          <TitleSection>Check-In</TitleSection>
            <Price
              type="date"
              name="check_in"
              value={newBooking.check_in ? new Date(newBooking.check_in).toISOString().split('T')[0] : ''}
              onChange={handleInputChange}
            />
          </PriceBox>
          <PriceBox>
          <TitleSection>Check-Out</TitleSection>
            <Price
              type ="date"
              name ="check_out"
              value = {newBooking.check_out ? new Date(newBooking.check_out).toISOString().split('T')[0] : ''}
              onChange = {handleInputChange}
            />
          </PriceBox>
          <PriceBox>
            <TitleSection>Status</TitleSection>
            <InputDiscount
              typeof ="text"
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
              value={newBooking.request}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <TitleDescripition>Amenities</TitleDescripition>
            <div>
              <ButtonAmenities >
                FREE WIFI
              </ButtonAmenities>
              <ButtonAmenities>
                TV LED
              </ButtonAmenities>
              <ButtonAmenities>
                2 BATHROOM
              </ButtonAmenities>
              <ButtonAmenities>
                AC
              </ButtonAmenities>
              <ButtonAmenities>
                3 BED SPACE
              </ButtonAmenities>
              <ButtonAmenities>
                COFEE SET
              </ButtonAmenities>
              <ButtonAmenities>
                BATHUP
              </ButtonAmenities>
              <ButtonAmenities>
                TOWEL
              </ButtonAmenities>
              <ButtonAmenities>
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
