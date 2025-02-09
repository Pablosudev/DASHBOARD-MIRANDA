import {
  SectionTable,
  TableBody,
  TableHead,
  TableImg,
  TableR,
  TableRooms,
  TableTd,
  TableAmenities,
  ContainerId,
} from "../../commons/Table";
import {
  ContainerSelect,
  SelectTitle,
  ContainerButtons,
  ContainerFake,
  BoxSelect,
} from "../../Rooms/Components/RoomsList";
import { ButtonGreen } from "../../commons/Buttons/ButtonGreen";
import { useEffect, useState } from "react";
import { ButtonFake } from "../../commons/Buttons/ButtonFake";
import { ContainerInput, IconSearch, UsersInput } from "../Components/Users";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AllDataUsers, AllStatusUsers } from "../Features/UsersSlice";
import { DeleteUserThunk, UsersAllThunk } from "../Features/UsersThunk";
import { StatusUsers } from "../../commons/Table";
import { Users } from "../Interfaces/UsersInterfaces";
import {
  DeleteIcon,
  EditIcon,
} from "../../Bookings/Components/BookingsDetails";
import { Link } from "react-router-dom";
import React from "react";
import { AppDispatch } from "../../App/Store";

export const UserList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const DataUsers = useSelector(AllDataUsers);
  const [users, setUsers] = useState<Users []>(DataUsers);
  const StatusUser = useSelector(AllStatusUsers);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const {id} = useParams<{id:string}>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const sortedUsers: Users [] = [...users].sort((a, b) => {
    return new Date(a.start_date).getTime() - new Date(b.start_date).getTime();
  });
  const filteredUsers: Users[] = DataUsers.filter((user) =>
    user.full_name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser)

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);
  
  const handleCreateUser = () => {
    navigate("/users/new")
  }
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };
  const handleDeleteUser = (id: number) => {
    dispatch(DeleteUserThunk(id));
  };

  

  useEffect(() => {
    if (StatusUser === "idle") {
      dispatch(UsersAllThunk(id));
    } else if (StatusUser === "fulfilled") {
      setUsers(DataUsers);
    } else if (StatusUser === "rejected") {
      alert("Error al cargar los datos de los usuarios");
    }
  },[dispatch, id, StatusUser, DataUsers]);


  return (
    <>
      <SectionTable>
        <BoxSelect>
          <ContainerSelect>
            <SelectTitle>All Employee</SelectTitle>
            <SelectTitle>Active Employee</SelectTitle>
            <SelectTitle>Inactive Employee</SelectTitle>
          </ContainerSelect>
          <ContainerInput>
            <UsersInput type="text" value={searchTerm} onChange={handleSearch}/>
            <label>
              <IconSearch />
            </label>
          </ContainerInput>
          <div>
            <ButtonGreen type ="secondary" onClick={handleCreateUser}>
              Create User
            </ButtonGreen>
          </div>
        </BoxSelect>

        <TableRooms>
          <TableHead>
            <TableR>
              <th>Name</th>
              <th></th>
              <th>Start Date</th>
              <th>Job Desk</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Status</th>
            </TableR>
          </TableHead>
          <TableBody>
            {currentUsers.map((user) => (
              <TableR key={user.id}>
                <TableTd>
                  <TableImg
                    src="/src/assets/Imagenes/users logo.jpg"
                    alt="User photo"
                  />
                </TableTd>
                <ContainerId>
                  {user.full_name} <br />
                  {user.id}
                </ContainerId>
                <TableAmenities>{user.start_date}</TableAmenities>
                <TableAmenities>{user.job_description}</TableAmenities>
                <TableAmenities>{user.phone_number}</TableAmenities>
                <TableAmenities>{user.email}</TableAmenities>
                <td>
<<<<<<< HEAD
                  <StatusUsers status ={user.status}>{user.status}</StatusUsers>
=======
                  <StatusUsers typeof ={user.status}>{user.status}</StatusUsers>
>>>>>>> 20e8c94a76ff30b63110851212c9fe8cc4b6849c
                </td>
                <td>
                  <Link to= {`/users/edit/${user.id}`}> <EditIcon /></Link>
                  
                  <DeleteIcon
                    onClick={() => handleDeleteUser(user.id)}
                    aria-label="Delete user"
                  />
                </td>
              </TableR>
            ))}
          </TableBody>
        </TableRooms>

        <ContainerButtons>
          <ButtonGreen
            onClick={prevPage}
            type ="primary"
            disabled={currentPage === 1}
          >
            Prev
          </ButtonGreen>
          <ContainerFake>
            {[...Array(Math.ceil(sortedUsers.length / usersPerPage))].map(
              (_, index) => (
                <ButtonFake
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  active ={currentPage === index + 1}
                >
                  {index + 1}
                </ButtonFake>
              )
            )}
          </ContainerFake>
          <ButtonGreen
            onClick={nextPage}
            type ="primary"
            disabled={currentPage * usersPerPage >= sortedUsers.length}
          >
            Next
          </ButtonGreen>
        </ContainerButtons>
      </SectionTable>
    </>
  );
};
