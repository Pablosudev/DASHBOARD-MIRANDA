import React, { useEffect, useMemo, useState } from "react";
import { SelectTitle } from "../../Users/Components/Users";
import {
  ContainerSelect,
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
  TableBookings,
  TableAmenities,
  TablePrice,
  TableStatus,
  ContainerId,
  ButtonBookings,
  TableIcons,
} from "../../commons/Table";
import {
  UsersInput,
  IconSearch,
  ContainerInput,
} from "../../Users/Components/Users";
import { ButtonsRequest, DeleteIcon, EditIcon } from "../Components/BookingsDetails";
import { ButtonGreen } from "../../commons/Buttons/ButtonGreen";
import { ButtonFake } from "../../commons/Buttons/ButtonFake";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllBookingsData,
  getAllBookingsStatus,
} from "../Features/BookingsSlice";
import {
  AllBookingsThunk,
  DeleteBookingsThunk,
} from "../Features/BookingsThunk";
import { AppDispatch } from "../../App/Store";
import { BookingsInter } from "../Interfaces/BookingsInterfaces";
import { getAllRoomsData, getIdRoomsData } from "../../Rooms/Features/RoomsSlice";
import { RoomsThunk } from "../../Rooms/Features/RoomsThunk";
import { RoomsInter } from "../../Rooms/Interfaces/RoomsInterfaces";
import { ClosePopUp, PopUp } from "../../Contact/Components/Contact";


export const BookingsList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const DataBookings: BookingsInter[] = useSelector(getAllBookingsData);
  const StatusBookings = useSelector(getAllBookingsStatus);
  const RoomData: RoomsInter [] = useSelector(getAllRoomsData);
  const RoomId: RoomsInter | undefined = useSelector(getIdRoomsData);
  const { _id } = useParams<string>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [bookingsData, setBookingsData] = useState<BookingsInter[]>(DataBookings);
  const bookingsPerPage: number = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const navigate = useNavigate();
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [room, setRoom] = useState<RoomsInter | undefined>(RoomId)
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (StatusBookings === "idle") {
      dispatch(AllBookingsThunk());
      dispatch(RoomsThunk())
    } else if (StatusBookings === "fulfilled") {
      setBookingsData(DataBookings)
    } else if (StatusBookings === "rejected") {
      alert("Error al cargar los datos de los usuarios");
    }
  }, [dispatch, _id, StatusBookings]);

  const roomsMap = useMemo(() => {
    const map: { [key: string]: RoomsInter } = {};
    RoomData.forEach((room) => {
      map[room._id] = room;
    });
    return map;
  }, [RoomData]);

  //FILTRADO DE BOOKINGS
  const filteredBookings = DataBookings.filter((booking) => {
    const stateSearchTerm = booking.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const stateStatus =
      selectedStatus === "all" ||
      booking.status.toLowerCase() === selectedStatus.toLowerCase();
    return stateSearchTerm && stateStatus;
  });
  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };
  const handleStatusChange = (status: string) => {
    setSelectedStatus(status);
    setCurrentPage(1);
  };
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
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handleDeleteBookings = (id) => {
    dispatch(DeleteBookingsThunk(id))
      .then(() => {
        dispatch(AllBookingsThunk());
      })
      .catch((error) => {
        alert("Error al eliminar la reserva");
      });
  };
  const handlePopUp = (_id:number) => {
    if (open === _id) {
      setOpen(null);
    } else {
      setOpen(_id);
    }
  }

  const handleNewBooking = () => {
    navigate("/bookings/create");
  };

  return (
    <>
      <SectionTable>
        <BoxSelect>
          <ContainerSelect>
            <SelectTitle
              onClick={() => handleStatusChange("all")}
              isActive={selectedStatus === "all"}
            >
              All Bookings
            </SelectTitle>
            <SelectTitle
              onClick={() => handleStatusChange("Check-In")}
              isActive={selectedStatus === "Check-In"}
            >
              Check In
            </SelectTitle>
            <SelectTitle
              onClick={() => handleStatusChange("Check-Out")}
              isActive={selectedStatus === "Check-Out"}
            >
              Check Out
            </SelectTitle>
            <SelectTitle
              onClick={() => handleStatusChange("In Progress")}
              isActive={selectedStatus === "In Progress"}
            >
              In Progress
            </SelectTitle>
          </ContainerSelect>
          <ContainerInput>
            <UsersInput
              type="text"
              value={searchTerm}
              onChange={handleSearch}
            />
            <label>
              <IconSearch />
            </label>
          </ContainerInput>
          <ButtonGreen type="secundary" onClick={handleNewBooking}>
            + New Booking
          </ButtonGreen>
        </BoxSelect>
        <TableBookings>
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
            {currentBookings.map((booking) =>{
              const room = roomsMap[booking.room_id]
            return (
              
              <TableR key={booking._id}>
                <TableGuest>
                  {booking.name} <br /> #{booking._id}
                </TableGuest>
                <ContainerId>{new Date(booking.date).toLocaleDateString()}</ContainerId>
                <TableAmenities>{new Date(booking.check_in).toLocaleDateString()}</TableAmenities>
                <TableAmenities>{new Date(booking.check_out).toLocaleDateString()}</TableAmenities>
                <TableAmenities><ButtonsRequest onClick={() => handlePopUp(booking._id)}>VIEW REQUEST</ButtonsRequest></TableAmenities>
                {open !== null &&(
                <PopUp>
                  <p>{DataBookings.find(booking => booking._id === open)?.request}</p>
                  <ClosePopUp onClick={() => setOpen(null)}>&#x2716;</ClosePopUp>
                </PopUp>
                )}
                <TableAmenities>
                {room ? (
            <>
              {room.type} <br /> Room {room.number}
            </>
          ) : (
            "Room details loading..." 
          )}
                </TableAmenities>
                <td>
                  <ButtonBookings status={booking.status}>
                    {booking.status}
                  </ButtonBookings>
                </td>
                <TableIcons>
                  <Link to={`/bookings/details/${booking._id}`}>
                    <EditIcon />
                  </Link>
                  <DeleteIcon
                    onClick={() => handleDeleteBookings(booking._id)}
                  />
                </TableIcons>
              </TableR>
            )
            })}
          </TableBody>
        </TableBookings>
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
    </>
  );
};
