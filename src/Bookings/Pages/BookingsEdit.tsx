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
import { BookingsEditInter, BookingsInter } from "../Interfaces/BookingsInterfaces";

export const BookingsEdit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const {id} = useParams();
  const BookingId = useSelector(getBookingsId);
  const StatusBookingId = useSelector(getStatusId);
  const [newBooking, setNewBooking] = useState<BookingsEditInter>({
    full_name: "",
    check_in: "",
    check_out: "",
    room_type: "",
    price: 0,
    special_request: "",
    status: "",
    amenities: [],
  });
  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
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
    const handleAmenities = (amenity: string) => {
      setNewBooking ((prevState) => {
        const changeAmenities = prevState.amenities.includes(amenity)
        ?prevState.amenities.filter((item) => item !== amenity) : [...prevState.amenities,amenity];
        return {
          ...prevState,
          amenities: changeAmenities,
        }
      })
    }

  useEffect(() => {
    if (StatusBookingId === "idle") {
      dispatch(IdRoomThunk(parseInt(id!)));
    } else if (StatusBookingId === "fulfilled") {
      const booking = BookingId as BookingsInter;
      setNewBooking({
        full_name: booking.full_name,
        check_in: booking.check_in,
        check_out: booking.check_out,
        room_type: booking.room_type,
        price: booking.price,
        special_request: booking.special_request,
        status: booking.status,
        amenities: [],
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
