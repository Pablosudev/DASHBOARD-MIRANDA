import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CreateRoomThunk } from "../Features/RoomsThunk";
import {
  IconClose,
  ButtonSave,
  CancellationBox,
  ButtonAmenities,
  BoxDescription,
  TitlePrice,
  InputDiscount,
  TitleDescripition,
  Price,
  PriceBox,
  InputCreate,
  RoomInfo,
  BoxTitle,
  TitleSection,
  ContainerSections,
  CardCreate,
  SelectCreateRoom,
  BoxInfoRooms,
} from "../Components/RoomsCreate";
import { AppDispatch } from "../../App/Store";
import { RoomCreate } from "../Interfaces/RoomsInterfaces";
export const RoomsCreate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [newRoom, setNewRoom] = useState<RoomCreate>({
    type: "",
    number: 0,
    price: 0,
    offer: 0,
    roomStatus: "",
    amenities: [],
   _id: 0
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewRoom((prevState) => ({
      ...prevState,
      [name]: name === "number" || name === "price" || name === "offer"
      ? Number(value): value,
    }));
  };

  const handleAmenities = (amenity) => {
    setNewRoom((prevState) => {
      const changeAmenities = prevState.amenities.includes(amenity)
        ? prevState.amenities.filter((item) => item !== amenity)
        : [...prevState.amenities, amenity];
      return {
        
        ...prevState,
        amenities: changeAmenities,
      };
    });
  };
  const handleCreateRoom = () => {

    
    dispatch(CreateRoomThunk(newRoom));
    console.log(newRoom)
    navigate("/rooms");
  };

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
            <TitleSection>Room Type</TitleSection>
            <SelectCreateRoom
              typeof="text"
              name="type"
              value={newRoom.type}
              onChange={handleInputChange}
            >
              <option value="Suite">Suite</option>
              <option value="Double Superior">Double Superior</option>
              <option value="Single Bed">Single Bed</option>
              <option value="Double Bed">Double Bed</option>
            </SelectCreateRoom>
          </div>
          <div>
            <TitleSection>Room Number</TitleSection>
            <InputCreate
              type="number"
              name="number"
              value={newRoom.number}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <TitleSection>Status</TitleSection>
            <SelectCreateRoom
              name="roomStatus"
              value={newRoom.roomStatus}
              onChange={handleInputChange}
            >
              <option value="Booked">Booked</option>
              <option value="Available">Available</option>
            </SelectCreateRoom>
          </div>
        </BoxTitle>
        <BoxInfoRooms>
          <PriceBox>
            <TitlePrice>Price/Night</TitlePrice>
            <Price
              type="number"
              name="price"
              value={newRoom.price}
              onChange={handleInputChange}
            />
          </PriceBox>
          <PriceBox>
            <TitlePrice>Discount</TitlePrice>
            <InputDiscount
              type="number"
              name="offer"
              value={newRoom.offer}
              onChange={handleInputChange}
            />
          </PriceBox>
        </BoxInfoRooms>

        <BoxDescription>
          {/* <div>
            <TitleDescripition>Description</TitleDescripition>
            <InputDescription
              type="text"
              name="room_description"
              value={newRoom.description}
              onChange={handleInputChange}
            />
          </div> */}
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
