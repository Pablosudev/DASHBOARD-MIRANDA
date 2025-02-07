import { useDispatch, useSelector } from "react-redux";
import {
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
  CardCreate,
} from "../Components/RoomsCreate";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IdRoomThunk, EditRoomThunk } from "../Features/RoomsThunk";
import { useEffect, useState } from "react";
import { getIdRoomsData, getIdRoomsStatus } from "../Features/RoomsSlice";
import { AppDispatch } from "../../App/Store";
import { RoomsEdits, RoomsInter } from "../Interfaces/RoomsInterfaces";
import React from "react";

export const RoomsEdit = () => {
  const { id } = useParams<{id: string}>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const RoomID: RoomsInter | undefined = useSelector(getIdRoomsData);
  const StatusRoom = useSelector(getIdRoomsStatus);
  const [roomId, setRoomId] = useState<RoomsEdits>({
    room_type:"",
    room_number: 0,
    room_price: 0,
    room_offer: 0,
    room_discount: 0,
    room_description: "",
  });
  
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setRoomId((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    dispatch(EditRoomThunk({ id: Number(id), updatedRoom: roomId }))
      .unwrap()
      .then(() => {
        alert("Habitación actualizada correctamente");
        navigate("/rooms");
      })
      .catch((error) => {
        alert("Error al actualizar la habitación: " + error.message);
      });
  };

  
  useEffect(() => {
    
    if (StatusRoom === "idle") {

      dispatch(IdRoomThunk(parseInt(id!)));
      
    } else if (StatusRoom === "fulfilled") {
      if(RoomID?.id != id){
        dispatch(IdRoomThunk(parseInt(id!)))
      }
      if(RoomID){
      setRoomId({
        room_type: RoomID.room_type,
        room_number: RoomID.room_number,
        room_price: RoomID.room_price,
        room_offer: RoomID.room_offer,
        room_discount: RoomID.room_discount ,
        room_description: RoomID.room_description,
      })
    }
    } else if (StatusRoom === "rejected") {
      alert("Error al cargar los datos de la habitación");
    } 
  }, [dispatch, id, StatusRoom]);

  return (
    <CardCreate>
      <ContainerSections>
        <Link to={"/rooms"}>
          <IconClose />
        </Link>
        <RoomInfo>Room Info</RoomInfo>
        <BoxTitle>
          <div>
            <TitleSection>Room Type</TitleSection>
            <InputCreate
              type="text"
              name="room_type"
              value={roomId?.room_type || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <TitleSection>Room Number</TitleSection>
            <InputCreate
              type="text"
              name="room_number"
              value={roomId?.room_number || ""}
              onChange={handleChange}
            />
          </div>
        </BoxTitle>
        <BoxInfo>
          <PriceBox>
            <TitlePrice>Price/Night</TitlePrice>
            <Price
              type="text"
              name="room_price"
              value={roomId?.room_price || ""}
              onChange={handleChange}
            />
          </PriceBox>
          <PriceBox>
            <TitlePrice>Offer</TitlePrice>
            <div>
              <ButtonOffer
                onClick={() =>
                  setRoomId((prevState) => ({
                    ...prevState,
                    room_offer: 10,
                  }))
                }
              >
                10%
              </ButtonOffer>
              <ButtonOffer
                onClick={() =>
                  setRoomId((prevState) => ({
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
              value={roomId?.room_offer || ""}
              onChange={handleChange}
            />
          </PriceBox>
        </BoxInfo>
        <BoxDescription>
          <div>
            <TitleDescripition>Description</TitleDescripition>
            <InputDescription
              type="text"
              name="room_description"
              value={roomId?.room_description || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <TitleDescripition>Amenities</TitleDescripition>
            <div>
              <ButtonAmenities>
                FREE WIFI
              </ButtonAmenities>
              <ButtonAmenities >
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
        <ButtonSave onClick={handleSave}>EDIT</ButtonSave>
      </ContainerSections>
    </CardCreate>
  );
};
