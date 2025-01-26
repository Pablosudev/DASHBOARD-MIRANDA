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
  ContainerInput,
  UsersInput,
  IconSearch,
  OfferPrice,
} from "../Components/RoomsList";
import { ButtonGreen } from "../../commons/Buttons/ButtonGreen";
import { ButtonFake } from "../../commons/Buttons/ButtonFake";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllRoomsData, getAllRoomsStatus } from "../Features/RoomsSlice";
import {
  RoomsThunk,
  DeleteRoomThunk,
  IdRoomThunk,
} from "../Features/RoomsThunk";
import {
  DeleteIcon,
  EditIcon,
} from "../../Bookings/Components/BookingsDetails";
import { Link } from "react-router-dom";

export const RoomsList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const DataAllRooms = useSelector(getAllRoomsData);
  const StatusAllRooms = useSelector(getAllRoomsStatus);
  const [dataRooms, setDataRooms] = useState(DataAllRooms);
  const roomsList = useMemo(() => DataAllRooms, [DataAllRooms]);
  const roomsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(roomsList.length / roomsPerPage);
  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = roomsList.slice(indexOfFirstRoom, indexOfLastRoom);
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(IdRoomThunk)
  }
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (StatusAllRooms === "idle") {
      console.log("Despachando");
      dispatch(RoomsThunk());
    } else if (StatusAllRooms === "fulfilled") {
      setDataRooms(DataAllRooms);
    } else if (StatusAllRooms === "rejected") {
      alert("Error");
    }
  }, [StatusAllRooms, DataAllRooms, dispatch]);

  if (StatusAllRooms === "pending") {
    return <div>Loading...</div>;
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNewRoom = () => {
    navigate("/rooms/create");
  };

  const handleDeleteRoom = (id) => {
    console.log("Eliminar habitación con id:", id);
    dispatch(DeleteRoomThunk(id));
  };

  return (
    <SectionTable>
      <BoxSelect>
        <ContainerSelect>
          <SelectTitle>All Rooms</SelectTitle>
        </ContainerSelect>
        <ContainerInput>
          <UsersInput type="text" onChanfe={handleSearch} value={searchTerm} onChange={(e) =>{setSearchTerm(e.target.value)}}/>
          <label>
            <IconSearch />
          </label>
        </ContainerInput>
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
          {currentRooms.map((room) => (
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
                {Array.isArray(room.amenities)
                  ? room.amenities.join(", ")
                  : room.amenities || "No amenities"}
              </TableAmenities>
              <TablePrice>
                ${room.room_price}
                <Night>/night</Night>
              </TablePrice>
              <OfferPrice>
                {" "}
                ${" "}
                {(
                  room.room_price -
                  room.room_price * (room.room_offer / 100)
                ).toFixed(2)}
              </OfferPrice>
              <td>
                <ButtonTable status={room.status}>{room.status}</ButtonTable>
              </td>
              <td>
                <Link to={`/rooms/edit/${room.id}`}>
                  <EditIcon />
                </Link>

                <DeleteIcon onClick={() => handleDeleteRoom(room.id)} />
              </td>
            </TableR>
          ))}
        </TableBody>
      </TableRooms>

      <ContainerButtons>
        <ButtonGreen
          type="primary"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Prev
        </ButtonGreen>
        <ContainerFake>
          {[...Array(totalPages)].map((_, index) => (
            <ButtonFake
              key={index}
              onClick={() => handlePageClick(index + 1)}
              active={currentPage === index + 1}
            >
              {index + 1}
            </ButtonFake>
          ))}
        </ContainerFake>
        <ButtonGreen
          type="primary"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </ButtonGreen>
      </ContainerButtons>
    </SectionTable>
  );
};
