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
  ButtonOffer,
  Price,
  PriceBox,
  InputCreate,
  BoxInfo,
  RoomInfo,
  BoxTitle,
  TitleSection,
  ContainerSections,
  CardCreate
} from "../Components/RoomsCreate";
import { RoomsInter } from "../Interfaces/RoomsInterfaces";
import { AppDispatch } from "../../App/Store";


export const RoomsCreate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  
  const [newRoom, setNewRoom] = useState<RoomsInter>({
    type: "",
    number: 0,
    price: 0,
    offer: 0,
    roomStatus: "",
    amenities: [],
  });

  
  const handleInputChange = (e: any ) => {
    const { name, value } = e.target;
    setNewRoom((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAmenities = (amenity) => {
    setNewRoom ((prevState) => {
      const changeAmenities = prevState.amenities.includes(amenity)
      ?prevState.amenities.filter((item) => item !== amenity) : [...prevState.amenities,amenity];
      return {
        ...prevState,
        amenities: changeAmenities,
      }
    })
  }
  //BUTTON_CREATE
  const handleCreateRoom = () => {
    dispatch(CreateRoomThunk(newRoom)); 
    navigate("/rooms"); 
  };

  

  return (
    <CardCreate>
      <ContainerSections>
        <IconClose onClick={() => {navigate("/rooms")}} />
        <RoomInfo>Room Info</RoomInfo>
        <BoxTitle>
          <div>
            <TitleSection>Room Type</TitleSection>
            <InputCreate
              type="text"
              name="type"
              value={newRoom.type}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <TitleSection>Room Number</TitleSection>
            <InputCreate
              type="text"
              name="number"
              value={newRoom.number}
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
              value={newRoom.price}
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
              name="offer"
              value={newRoom.offer}
              onChange={handleInputChange}
            />
          </PriceBox>
        </BoxInfo>

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
              <ButtonAmenities
                onClick={() => handleAmenities("2 BATHROOM")}
              >
                2 BATHROOM
              </ButtonAmenities>
              <ButtonAmenities onClick={() => handleAmenities("AC")}>
                AC
              </ButtonAmenities>
              <ButtonAmenities
                onClick={() => handleAmenities("3 BED SPACE")}
              >
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
