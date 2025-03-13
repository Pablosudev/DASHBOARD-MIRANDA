import React, { useEffect, useState } from "react";
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
  TableRow,
  TableStatusRooms,
  TableIcons,
  HeadType,
  HeadAmenities,
  HeadStatus,
  HeadRoomType,
  HeadRoomAmenities,
  HeadPrice,
  HeadOffer,
  HeadRoomStatus,
} from "../../commons/Table";
import {
  ContainerSelect,
  SelectTitleRooms,
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
import { RoomsThunk, DeleteRoomThunk } from "../Features/RoomsThunk";
import {
  DeleteIcon,
  EditIcon,
} from "../../Bookings/Components/BookingsDetails";
import { Link } from "react-router-dom";
import { AppDispatch } from "../../App/Store";
import { RoomsInter } from "../Interfaces/RoomsInterfaces";

export const RoomsList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const DataAllRooms: RoomsInter[] = useSelector(getAllRoomsData);
  const StatusAllRooms = useSelector(getAllRoomsStatus);
  const [rooms , setRooms] = useState<RoomsInter []>(DataAllRooms);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const roomsPerPage = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedFilter, setSelectedFilter] = useState<string>("All Rooms");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [statusFilter, setStatusFilter] = useState<"Available" | "Booked">("Available");

  useEffect(() => {
    if (StatusAllRooms === "idle") {
      dispatch(RoomsThunk());
    }else if (StatusAllRooms === "fulfilled"){
      setRooms(DataAllRooms)
    }
  }, [StatusAllRooms, dispatch]);
 

  let filteredRooms = DataAllRooms.filter((room) => 
    room.number.toString().includes(searchTerm) ||
    room.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortRooms = (rooms: RoomsInter[]) => {
    let sortedRooms = rooms;

    if (selectedFilter === "Status") {
      sortedRooms = sortedRooms.filter((room) => room.roomStatus === statusFilter);
    }


    if (selectedFilter === "Price") {
      sortedRooms.sort((a, b) => 
        sortOrder === "asc" ? a.price - b.price : b.price - a.price
      );
    }

    return sortedRooms;
  };

  filteredRooms = sortRooms(filteredRooms);

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

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleNewRoom = () => {
    navigate("/rooms/create");
  };

  const handleDeleteRoom = (id) => {
    dispatch(DeleteRoomThunk(id))
    
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    setCurrentPage(1); 
  };

  const handleStatusFilter = () => {
    setStatusFilter((prev) => (prev === "Available" ? "Booked" : "Available"));
  };

  return (
    <SectionTable>
      <BoxSelect>
        <ContainerSelect>
          <SelectTitleRooms
            isActive={selectedFilter === "All Rooms"}
            onClick={() => {
              handleFilterChange("All Rooms");
            }}
          >
            All Rooms
          </SelectTitleRooms>
          <SelectTitleRooms
            isActive={selectedFilter === "Price"}
            onClick={() => {
              handleFilterChange("Price");
              setSortOrder(sortOrder === "asc" ? "desc" : "asc"); 
            }}
          >
            Price {selectedFilter === "Price" && (sortOrder === "asc" ? "↑" : "↓")}
          </SelectTitleRooms>
          <SelectTitleRooms
            isActive={selectedFilter === "Status"}
            onClick={() => {
              handleFilterChange("Status");
              handleStatusFilter(); 
            }}
          >
            Status {selectedFilter === "Status" && `(${statusFilter})`}
          </SelectTitleRooms>
        </ContainerSelect>
        <ContainerInput>
          <UsersInput
            type="text"
            placeholder="Search your Room"
            value={searchTerm}
            onChange={handleSearch}
          />
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
            <HeadRoomType>Room Type</HeadRoomType>
            <HeadRoomAmenities>Amenities</HeadRoomAmenities>
            <HeadPrice>Price</HeadPrice>
            <HeadOffer>Offer</HeadOffer>
            <HeadRoomStatus>Status</HeadRoomStatus>
          </TableR>
        </TableHead>
        <TableBody>
          {currentRooms.map((room) => (
            <TableRow key={Number(room.id)} index={Number(room.id)}>
              <TableTd>
                <TableImg
                  src={room.image_url || "/src/assets/Imagenes/room10.jpg"}
                  alt={`Room ${room.number} photo`}
                />
              </TableTd>
              <ContainerId>
                <Night>{room.number}</Night> <p>#{room.id}</p>
              </ContainerId>
              <TableAmenities>{room.type}</TableAmenities>
              <TableAmenities>
                {Array.isArray(room.amenities)
                  ? room.amenities.join(", ")
                  : room.amenities || "No amenities"}
              </TableAmenities>
              <TablePrice>
                ${room.price}
                <Night>/night</Night>
              </TablePrice>
              <OfferPrice>
                {" "}
                ${" "}
                {(
                  room.price -
                  room.price * (room.offer / 100)
                ).toFixed(2)}
              </OfferPrice>
              <TableStatusRooms>
                <ButtonTable status={room.roomStatus}>{room.roomStatus}</ButtonTable>
              </TableStatusRooms>
              <TableIcons>
                <Link to={`/rooms/edit/${room.id}`} aria-label="Edit room">
                  <EditIcon />
                </Link>
                <DeleteIcon
                  onClick={() => handleDeleteRoom(room.id)}
                  aria-label="Delete room"
                />
              </TableIcons>
            </TableRow>
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