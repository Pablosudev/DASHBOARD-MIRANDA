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
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllRoomsData, getAllRoomsStatus} from "../Features/RoomsSlice";
import { RoomsThunk, DeleteRoomThunk } from "../Features/RoomsThunk";
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
  const [searchTerm, setSearchTerm] = useState("");
  const roomsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const {id} = useParams()
  useEffect(() => {
    if (StatusAllRooms === "idle") {
      dispatch(RoomsThunk());
    } else if (StatusAllRooms === "fulfilled") {
      
    }
  }, [StatusAllRooms, dispatch, DataAllRooms]);

  if (StatusAllRooms === "pending") {
    return <div>Loading...</div>;
  }

  if (StatusAllRooms === "rejected") {
    return <div>Error loading rooms. Please try again later.</div>;
  }

  // Filtrar habitaciones
  const filteredRooms = DataAllRooms.filter(
    (room) =>
      room.room_number.toString().includes(searchTerm) ||
      room.room_type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginación
  const totalPages = Math.ceil(filteredRooms.length / roomsPerPage);
  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = filteredRooms.slice(indexOfFirstRoom, indexOfLastRoom);

  // Funciones de paginación
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleNewRoom = () => {
    navigate("/rooms/create");
  };

  const handleDeleteRoom = (id) => {
    dispatch(DeleteRoomThunk(id));
    
    
  };

  return (
    <SectionTable>
      <BoxSelect>
        <ContainerSelect>
          <SelectTitle>All Rooms</SelectTitle>
          <SelectTitle>Price</SelectTitle>
          <SelectTitle>Status</SelectTitle>
        </ContainerSelect>
        <ContainerInput>
          <UsersInput type="text" placeholder="Search your Room" value={searchTerm} onChange={handleSearch} />
          <label>
            <IconSearch/>
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
          {currentRooms.map((room, index ) => (
            <TableR key={room.room_number}index={index}>
              <TableTd>
                <TableImg
                  src={room.image_url || "/src/assets/Imagenes/room10.jpg"}
                  alt={`Room ${room.room_number} photo`}
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
                <Link to={`/rooms/edit/${room.id}`} aria-label="Edit room">
                  <EditIcon />
                </Link>
                <DeleteIcon
                  onClick={() => handleDeleteRoom(room.id)}
                  aria-label="Delete room"
                />
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
