import { useDispatch, useSelector } from "react-redux";
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
  SelectTypeRoom,
} from "../Components/RoomsCreate";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IdRoomThunk, EditRoomThunk } from "../Features/RoomsThunk";
import { useEffect, useState } from "react";
import { getIdRoomsData, getIdRoomsStatus } from "../Features/RoomsSlice";
import { AppDispatch } from "../../App/Store";
import { RoomsInter } from "../Interfaces/RoomsInterfaces";
import React from "react";

export const RoomsEdit = () => {
  const { _id } = useParams<{ _id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const RoomID: RoomsInter | undefined = useSelector(getIdRoomsData);
  const StatusRoom = useSelector(getIdRoomsStatus);
  const [roomId, setRoomId] = useState<RoomsInter>({
    number: 0,
    price: 0,
    offer: 0,
    roomStatus: "",
    type: "",
    amenities: [],
    _id: ""
  });
  const handleAmenities = (amenity: string) => {
    setRoomId((prevState) => {
      const changeAmenities = prevState.amenities.includes(amenity)
        ? prevState.amenities.filter((item) => item !== amenity)
        : [...prevState.amenities, amenity];
      return {
        ...prevState,
        amenities: changeAmenities,
      };
    });
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setRoomId((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (!_id) {
      alert("ID no válido");
      return;
    }
    dispatch(EditRoomThunk({_id, updatedRoom: roomId }))
      .unwrap()
      .then(() => {
        alert("Habitación actualizada correctamente");
        navigate("/rooms");
      })
      .catch((error) => {
        alert("Error al actualizar la habitación: " + error.message);
        navigate("/rooms");
      });
  };

  useEffect(() => {
    if (StatusRoom === "idle") {
      console.log(RoomID)
      if (_id) {
        dispatch(IdRoomThunk(_id));
      }
    } else if (StatusRoom === "fulfilled") {
      if (RoomID) {
        setRoomId({
          number: RoomID.number,
          price: RoomID.price,
          offer: RoomID.offer,
          roomStatus: RoomID.roomStatus,
          type: RoomID.type,
          amenities: RoomID.amenities,
          _id: RoomID._id
        });
        if (RoomID._id != _id) {
          dispatch(IdRoomThunk(_id ?? ""));
        }
      }
    } else if (StatusRoom === "rejected") {
      alert("Error al cargar los datos de la habitación");
    }
  }, [dispatch, _id, StatusRoom]);

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
            <SelectTypeRoom
              typeof="text"
              name="type"
              value={roomId.type}
              onChange={handleChange}
            >
              <option value="Suite">Suite</option>
              <option value="Double Superior">Double Superior</option>
              <option value="Single Bed">Single Bed</option>
              <option value="Double Bed">Double Bed</option>
            </SelectTypeRoom>
          </div>
          <div>
            <TitleSection>Room Number</TitleSection>
            <InputCreate
              type="text"
              name="number"
              value={roomId?.number || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <TitleSection>Status</TitleSection>
            <SelectCreateRoom
              typeof="text"
              name="roomStatus"
              value={roomId.roomStatus}
              onChange={handleChange}
            >
              <option value="Available">Available</option>
              <option value="Booked">Booked</option>
            </SelectCreateRoom>
          </div>
        </BoxTitle>
        <BoxInfoRooms>
          <PriceBox>
            <TitlePrice>Price/Night</TitlePrice>
            <Price
              type="text"
              name="price"
              value={roomId?.price || ""}
              onChange={handleChange}
            />
          </PriceBox>

          <PriceBox>
            <TitlePrice>Discount</TitlePrice>
            <InputDiscount
              type="text"
              name="offer"
              value={roomId?.offer || ""}
              onChange={handleChange}
            />
          </PriceBox>
        </BoxInfoRooms>
        <BoxDescription>
          <div>
            <TitleDescripition>Amenities</TitleDescripition>
            <div>
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
