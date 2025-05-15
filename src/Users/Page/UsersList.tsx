import {
  SectionTable,
  TableBody,
  TableHead,
  HeadType,
  TableR,
  TableTd,
  ContainerId,
  TableHeadName,
  TableUsers,
  TableEmail,
  TableDate,
  TableImgUsers,
  TabledIcons,
  TabledStatus,
  TableDepartment,
  HeadDepartment,
  HeadContact,
  HeadEmail,
  HeadStatus
} from "../../commons/Table";
import {
  ContainerSelect,
  ContainerButtons,
  ContainerFake,
  BoxSelect,
} from "../../Rooms/Components/RoomsList";
import { ButtonGreen } from "../../commons/Buttons/ButtonGreen";
import { useEffect, useState } from "react";
import { ButtonFake } from "../../commons/Buttons/ButtonFake";
import { ContainerInput, IconSearch, UsersInput, SelectTitle } from "../Components/Users";
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
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export const UserList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const DataUsers = useSelector(AllDataUsers);
  const [users, setUsers] = useState<Users []>(DataUsers);
  const StatusUser = useSelector(AllStatusUsers);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const {_id} = useParams<{_id}>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedStatus , setSelectedStatus] = useState<string>("all")

  //FILTRADO DE USUARIOS
  const sortedUsers: Users [] = [...users].sort((a, b) => {
    return new Date(a.start_date).getTime() - new Date(b.start_date).getTime();
  });
  const filteredUsers: Users[] = DataUsers.filter((user) => {
    const usersSearchTerm = user.name.toLowerCase().includes(searchTerm.toLowerCase())
    const usersStatus = selectedStatus === "all" || user.status === selectedStatus
    return usersSearchTerm && usersStatus
  });
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser)

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);
  
  const handleCreateUser = () => {
    navigate("/users/new")
  
  }
  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };
  const handleDeleteUser = (_id: number) => {
    dispatch(DeleteUserThunk(_id))
    .then(()=> {
      dispatch(UsersAllThunk())
    })
    Toastify({
      text: "¡Usuario eliminado con éxito!",
      duration: 3000,  
      gravity: "top",  
      position: "right",  
      backgroundColor: "linear-gradient(to right, #28a745, #218838)",
      stopOnFocus: true  
    }).showToast();
  };
  const handleStatusChange = ( status: string) => {
    setSelectedStatus(status);
    setCurrentPage(1);
  }
  
  useEffect(() => {
    if (StatusUser === "idle") {
      dispatch(UsersAllThunk());
    } else if (StatusUser === "fulfilled") {
      setUsers(DataUsers);
    } else if (StatusUser === "rejected") {
      alert("Error al cargar los datos de los usuarios");
    }
  },[dispatch, StatusUser, DataUsers]);


  return (
    <>
      <SectionTable>
        <BoxSelect>
          <ContainerSelect>
            <SelectTitle onClick={() => handleStatusChange("all")} isActive = {selectedStatus === "all"}>All Employee</SelectTitle>
            <SelectTitle onClick={() => handleStatusChange("Active")} isActive = {selectedStatus === "Active"}>Active Employee</SelectTitle>
            <SelectTitle onClick={() => handleStatusChange("Inactive")} isActive = {selectedStatus === "Inactive"}>Inactive Employee</SelectTitle>
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

        <TableUsers>
          <TableHead>
            <TableR>
              <TableHeadName>Name</TableHeadName>
              <th></th>
              <HeadType>Start Date</HeadType>
              <HeadDepartment>Department</HeadDepartment>
              <HeadContact>Contact</HeadContact>
              <HeadEmail>Email</HeadEmail>
              <HeadStatus>Status</HeadStatus>
            </TableR>
          </TableHead>
          <TableBody>
            {currentUsers.map((user) => (
              <TableR key={user._id}>
                <TableTd>
                  <TableImgUsers
                    src="/src/assets/Imagenes/users logo.jpg"
                    alt="User photo"
                  />
                </TableTd>
                <ContainerId>
                  {user.name} <br />
                  {user._id}
                </ContainerId>
                <TableDate>{new Date(user.start_date).toLocaleDateString()}</TableDate>
                <TableDepartment>{user.department}</TableDepartment>
                <TableDate>{user.phone}</TableDate>
                <TableEmail>{user.email}</TableEmail>
                <TabledStatus>
                  <StatusUsers status ={user.status}>{user.status}</StatusUsers>
                </TabledStatus>
                <TabledIcons>
                  <Link to= {`/users/edit/${user._id}`}> <EditIcon /></Link>
                  
                  <DeleteIcon
                    onClick={() => handleDeleteUser(user._id)}
                    aria-label="Delete user"
                  />
                </TabledIcons>
              </TableR>
            ))}
          </TableBody>
        </TableUsers>

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
            type = "primary"
            disabled={currentPage * usersPerPage >= sortedUsers.length}
          >
            Next
          </ButtonGreen>
        </ContainerButtons>
      </SectionTable>
    </>
  );
};
