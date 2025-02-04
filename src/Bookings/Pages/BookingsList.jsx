import React, { useEffect, useState } from "react";
import {
  ContainerSelect,
  SelectTitle,
  ContainerButtons,
  ContainerFake,
  BoxSelect,
} from "../../Rooms/Components/RoomsList";
import {
  SectionTable,
  TableBody,
  TableHead,
  TableGuest,
  TableR,
  TableRooms,
  TableAmenities,
  TablePrice,
  TableStatus,
  ContainerId,
  ButtonBookings,
} from "../../commons/Table";
import {
  UsersInput,
  IconSearch,
  ContainerInput,
} from "../../Users/Components/Users";
import { DeleteIcon, EditIcon } from "../Components/BookingsDetails";
import { ButtonGreen } from "../../commons/Buttons/ButtonGreen";
import { ButtonFake } from "../../commons/Buttons/ButtonFake";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllBookingsData,
  getAllBookingsStatus,
} from "../Features/BookingsSlice";
import {
  AllBookingsThunk,
  DeleteBookingsThunk,
} from "../Features/BookingsThunk";

export const BookingsList = () => {
  const dispatch = useDispatch();
  const DataBookings = useSelector(getAllBookingsData);
  const StatusBookings = useSelector(getAllBookingsStatus);
  const { id } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [bookingsData, setBookingsData] = useState (DataBookings);
  const bookingsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  
  console.log(DataBookings)
  useEffect(() => {
      if (StatusBookings === "idle") {
        dispatch(AllBookingsThunk(id));
      } else if (StatusBookings === "fulfilled") {
        setBookingsData(DataBookings);
      } else if (StatusBookings === "rejected") {
        alert("Error al cargar los datos de los usuarios");
      }
    },[dispatch, id, StatusBookings, DataBookings]);
  //FILTRADO DE BOOKINGS
  const filteredBookings = DataBookings.filter(
    (bookings) =>
      bookings.full_name.toString().includes(searchTerm) ||
      bookings.room_type.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  //PAGINACIÓN
  const totalPages = Math.ceil(filteredBookings.length / bookingsPerPage);
  const indexOfLastBookings = currentPage * bookingsPerPage;
  const indexOfFirstBookings = indexOfLastBookings - bookingsPerPage;
  const currentBookings = filteredBookings.slice(
    indexOfFirstBookings,
    indexOfLastBookings
  );
  //BOTONES DE PAGINACIÓN
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
  const handleDeleteBookings = (id) => {
    dispatch(DeleteBookingsThunk(id))
  }
 
  return (
    <>
      <section>
        <SectionTable>
          <BoxSelect>
            <ContainerSelect>
              <SelectTitle>All Bookings</SelectTitle>
              <SelectTitle>Check Out</SelectTitle>
              <SelectTitle>Check Out</SelectTitle>
              <SelectTitle>In Progress</SelectTitle>
            </ContainerSelect>
            <ContainerInput>
              <UsersInput type="text" />
              <label>
                <IconSearch />
              </label>
            </ContainerInput>
          </BoxSelect>
          <TableRooms>
            <TableHead>
              <TableR>
                <TableGuest>Guest</TableGuest>
                <th>Order Date</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Special Request</th>
                <th>Room Type</th>
                <TableStatus>Status</TableStatus>
              </TableR>
            </TableHead>
            <TableBody>
              {currentBookings.map((booking) => (
                <TableR key={booking.id}>
                  <TableGuest>
                    {booking.full_name} <br /> #{booking.id}
                  </TableGuest>
                  <ContainerId>{booking.date_booking}</ContainerId>
                  <TableAmenities>{booking.check_in}</TableAmenities>
                  <TableAmenities>{booking.check_out}</TableAmenities>
                  <TableAmenities>{booking.special_request}</TableAmenities>
                  <TablePrice>
                    {booking.room_type} <br /> Room {booking.number_room}
                  </TablePrice>
                  <td>
                    <ButtonBookings status={booking.status}>
                      {booking.status}
                    </ButtonBookings>
                  </td>
                  <td>
                    <Link to={`/bookings/details/${booking.id}`}>
                      <EditIcon />
                    </Link>
                    <DeleteIcon onClick={() => handleDeleteBookings(booking.id)}/>
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
      </section>
    </>
  );
};
