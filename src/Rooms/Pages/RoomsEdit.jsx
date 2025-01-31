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

export const RoomsEdit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const RoomID = useSelector(getIdRoomsData);
  const StatusRoom = useSelector(getIdRoomsStatus);
  const [roomId, setRoomId] = useState({
    room_type:"",
    room_number: "",
    room_price: "",
    room_offer: "",
    room_discount: "" ,
    room_description: "",
  });
  
  const handleChange = (e) => {
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
      dispatch(IdRoomThunk(id));
      
    } else if (StatusRoom === "fulfilled") {
      if(RoomID.id != id){
        dispatch(IdRoomThunk(id))
      }
      setRoomId({
        room_type: RoomID.room_type,
        room_number: RoomID.room_number,
        room_price: RoomID.room_price,
        room_offer: RoomID.room_offer,
        room_discount: RoomID.room_discount ,
        room_description: RoomID.room_description,
      })
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
                    room_offer: "10",
                  }))
                }
              >
                10%
              </ButtonOffer>
              <ButtonOffer
                onClick={() =>
                  setRoomId((prevState) => ({
                    ...prevState,
                    room_offer: "15",
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
              <ButtonAmenities onClick={() => handleAmenityChange("FREE WIFI")}>
                FREE WIFI
              </ButtonAmenities>
              <ButtonAmenities onClick={() => handleAmenityChange("TV LED")}>
                TV LED
              </ButtonAmenities>
              <ButtonAmenities
                onClick={() => handleAmenityChange("2 BATHROOM")}
              >
                2 BATHROOM
              </ButtonAmenities>
              <ButtonAmenities onClick={() => handleAmenityChange("AC")}>
                AC
              </ButtonAmenities>
              <ButtonAmenities
                onClick={() => handleAmenityChange("3 BED SPACE")}
              >
                3 BED SPACE
              </ButtonAmenities>
              <ButtonAmenities onClick={() => handleAmenityChange("COFEE SET")}>
                COFEE SET
              </ButtonAmenities>
              <ButtonAmenities onClick={() => handleAmenityChange("BATHUP")}>
                BATHUP
              </ButtonAmenities>
              <ButtonAmenities onClick={() => handleAmenityChange("TOWEL")}>
                TOWEL
              </ButtonAmenities>
              <ButtonAmenities onClick={() => handleAmenityChange("SHOWER")}>
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
