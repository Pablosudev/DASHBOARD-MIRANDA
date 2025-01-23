import React, { useEffect, useMemo, useState } from "react";
import {
  SectionTable,
  TableBody,
  TableHead,
  TableImg,
  TableR,
  TableRooms,
  TableTd,
  ButtonTable,
  TableAmenities,
  TablePrice,
  Night,
  ContainerId,
  TableName,
} from "../../commons/Table";
import {
  ContainerSelect,
  SelectTitle,
  ContainerButtons,
  ContainerFake,
  BoxSelect,
} from "../Components/RoomsList";
import { ButtonGreen } from "../../commons/Buttons/ButtonGreen";
import { ButtonFake } from "../../commons/Buttons/ButtonFake";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllRoomsData, getAllRoomsStatus } from "../Features/RoomsSlice";
import { RoomsThunk, DeleteRoomThunk } from "../Features/RoomsThunk";
import { DeleteIcon, EditIcon } from "../../Bookings/Components/BookingsDetails";


export const RoomsList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNewRoom = () => {
    navigate("/rooms/create");
  };


  const handleDeleteRoom = (id) => {
    console.log("Eliminar habitación con id:", id);
    dispatch(DeleteRoomThunk(id));
  };

  const DataAllRooms = useSelector(getAllRoomsData);
  const StatusAllRooms = useSelector(getAllRoomsStatus);


  useEffect(() => {
    if (StatusAllRooms === "idle") {
      console.log("Despachando");
      dispatch(RoomsThunk());
    } else if (StatusAllRooms === "fulfilled") {
    } else if (StatusAllRooms === "rejected") {
      alert("Error");
    }
  }, [StatusAllRooms, dispatch]);

  const roomsList = useMemo(() => DataAllRooms, [DataAllRooms]);

  if (StatusAllRooms === "pending") {
    return <div>Loading...</div>;
  }
 
  return (
    <SectionTable>
      <BoxSelect>
        <ContainerSelect>
          <SelectTitle>All Rooms</SelectTitle>
        </ContainerSelect>
        <div>
          <ButtonGreen type="secundary" onClick={handleNewRoom}>
            + New Room
          </ButtonGreen>
        </div>
      </BoxSelect>
      <TableRooms>
        <TableHead>
          <TableR>
            <TableName>Room Name</TableName>
            <th></th>
            <th>Room Type</th>
            <th>Amenities</th>
            <th>Price</th>
            <th>Offer</th>
            <th>Status</th>
          </TableR>
        </TableHead>
        <TableBody>
          {roomsList.slice(0, 10).map((room) => (
            <TableR key={room.room_number}>
              <TableTd>
                <TableImg
                  src="/src/assets/Imagenes/room10.jpg"
                  alt="Room photo"
                />
              </TableTd>
              <ContainerId>
                <Night>#{room.room_number}</Night> <p>{room.id}</p>
              </ContainerId>
              <TableAmenities>{room.room_type}</TableAmenities>
              <TableAmenities>
                AC,Shower,Double Bed, Towel, Bathup, Cofee Ser, LED TV, Wifi
              </TableAmenities>
              <TablePrice>
                ${room.room_price}
                <Night>/night</Night>
              </TablePrice>
              <td>{room.room_offer}</td>
              <td>
                <ButtonTable status={room.status}>{room.status}</ButtonTable>
              </td>
              <td>
                <EditIcon/>
                <DeleteIcon onClick={() => handleDeleteRoom(room.id)} />
              </td>
            </TableR>
          ))}
        </TableBody>
      </TableRooms>
      <ContainerButtons>
        <ButtonGreen type="primary">Prev</ButtonGreen>
        <ContainerFake>
          <ButtonFake>1</ButtonFake>
          <ButtonFake>2</ButtonFake>
          <ButtonFake>3</ButtonFake>
          <ButtonFake>4</ButtonFake>
        </ContainerFake>
        <ButtonGreen type="primary">Next</ButtonGreen>
      </ContainerButtons>
    </SectionTable>
  );
};
