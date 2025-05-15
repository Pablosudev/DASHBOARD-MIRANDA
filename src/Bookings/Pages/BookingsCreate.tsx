import { useState } from "react";

import {
  CardCreate,
  IconClose,
  ButtonSave,
  CancellationBox,
  TitlePrice,
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
  DateBox,
  ImageCreate,
} from "../../Rooms/Components/RoomsCreate";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CreateBookingThunk } from "../Features/BookingsThunk";
import { AppDispatch } from "../../App/Store";
import { BookingsCreateInter } from "../Interfaces/BookingsInterfaces";
import { SelectCreateBookings } from "../../Users/Components/UsersCreate";
import { ContainerDescription, BoxDescription } from "../Components/BookingsDetails";

export const BookingsCreate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [newBooking, setNewBooking] = useState<BookingsCreateInter>({
    name: "",
    date: "",
    check_in: "",
    check_out: "",
    request: "",
    type: "",
    number: 0,
    status: "",
    room: {},
  });
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewBooking((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
  //BUTTON_CREATE
  const handleCreateBooking = () => {
    dispatch(CreateBookingThunk(newBooking));
    navigate("/bookings");
  };

  return (
    <CardCreate>
      <ContainerSections>
        <IconClose
          onClick={() => {
            navigate("/bookings");
          }}
        />
        <RoomInfo>Bookings Edit</RoomInfo>
        <BoxTitle>
          <div>
            <TitleSection>Name</TitleSection>
            <InputCreate
              type="text"
              name="name"
              value={newBooking.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <TitleSection>Number Bookings</TitleSection>
            <InputCreate
              type="text"
              name="number"
              value={newBooking.number}
              onChange={handleInputChange}
            />
          </div>
          
          <PriceBox>
            <TitlePrice>Status</TitlePrice>
            <SelectCreateBookings
              typeof="text"
              name="status"
              value={newBooking.status}
              onChange={handleInputChange}
            >
              <option value="Active">In progress</option>
              <option value="Check-In">Check-In</option>
              <option value="Check-Out">Check-Out</option>
            </SelectCreateBookings>
          </PriceBox>
          <div>
            <TitleSection>Room Type</TitleSection>
            <SelectCreateBookings
              typeof="text"
              name="type"
              value={newBooking.type}
              onChange={handleInputChange}
            >
              <option value="Suite">Suite</option>
              <option value="Double Bed">Double Bed</option>
              <option value="Single Bed">Single Bed</option>
              <option value="Double Superior">Double Superior</option>
            </SelectCreateBookings>
          </div>
        </BoxTitle>
        <BoxInfo>
          <DateBox>
            <TitlePrice>Check-In</TitlePrice>
            <Price
              type="date"
              name="check_in"
              value={
                newBooking.check_in
                  ? new Date(newBooking.check_in).toISOString().split("T")[0]
                  : ""
              }
              onChange={handleInputChange}
            />
          </DateBox>
          <DateBox>
            <TitlePrice>Check-Out</TitlePrice>
            <Price
              type="date"
              name="check_out"
              value={
                newBooking.check_out
                  ? new Date(newBooking.check_out).toISOString().split("T")[0]
                  : ""
              }
              onChange={handleInputChange}
            />
          </DateBox>
          <DateBox>
            <TitlePrice>Date</TitlePrice>
            <Price
              type="date"
              name="date"
              value={newBooking.date}
              onChange={handleInputChange}
            />
          </DateBox>
        </BoxInfo>
        <BoxDescription>
          <ContainerDescription>
            <TitleDescripition>Description</TitleDescripition>
            <InputDescription
              type="text"
              name="request"
              value={newBooking.request}
              onChange={handleInputChange}
            />
          </ContainerDescription>
          <ImageCreate src="/src/assets/Imagenes/room10.jpg" alt="image room" />
          <div>
            {/* <TitleDescripition>Amenities</TitleDescripition>
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
            </div> */}
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
        <ButtonSave onClick={handleCreateBooking}>SAVE</ButtonSave>
      </ContainerSections>
    </CardCreate>
  );
};
