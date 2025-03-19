import {
  SelectCreate,
  ImgUser,
  ContainerNewUsers,
  TitleHotel,
  ContainerImg,
  AddImg,
  ContainerInput,
  BoxArticle,
  TypeInput,
  InputName,
  InputDesk,
  ContainerButton,
  IconClose,
} from "../Components/UsersCreate";
import { ButtonGreen } from "../../commons/Buttons/ButtonGreen";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IdData, StatusId } from "../Features/UsersSlice";
import { IdUserThunk, EditUserThunk } from "../Features/UsersThunk";
import { AppDispatch } from "../../App/Store";
import { Users } from "../Interfaces/UsersInterfaces";
import React from "react";
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export const UserEdit = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { id } = useParams<{ id }>();
  const Users = useSelector(IdData);
  const UserStatus = useSelector(StatusId);
  const numericId = Number(id);
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [newUser, setNewUser] = useState<Users>({
    id:0,
    name: "",
    email: "",
    start_date: new Date().toISOString().split('T')[0],
    description: "",
    phone: "",
    status: "",
    department: "",
    password: "",
  });


  
  const handleSave = () => {
    
    if (!id) {
      alert("ID no válido");
      return;
    }
    dispatch(EditUserThunk({ id, updatedUser: newUser }))
      .unwrap()
      .then(() => {
        navigate("/users");
      })
      .catch((error) => {
        navigate("/users")
      });
      Toastify({
            text: "¡Usuario editado con éxito!",
            duration: 3000,  
            gravity: "top",  
            position: "right",  
            backgroundColor: "linear-gradient(to right, #28a745, #218838)",
            stopOnFocus: true  
          }).showToast();
  };
  
  

  useEffect(() => {
    if (UserStatus === "idle") {
      if (id) {
        dispatch(IdUserThunk(numericId));
      }
    } else if (UserStatus === "fulfilled" && Users) {
      
      if (Users) {
        
        const isValidDate = Users.start_date && !isNaN(new Date(Users.start_date).getTime());
        const formattedDate = isValidDate
          ? new Date(Users.start_date).toISOString().split('T')[0]
          : new Date().toISOString().split('T')[0]; 
  
        setNewUser({
          name: Users.name,
          start_date: formattedDate, 
          description: Users.description,
          phone: Users.phone,
          email: Users.email,
          password: Users.password,
          status: Users.status,
          department: Users.department,
          id: Users.id,
        });
  
        if (Users.id != numericId) {
          dispatch(IdUserThunk(numericId));
        }
      }
    } else if (UserStatus === "rejected") {
      alert("Error al cargar los datos de la habitación");
    }
  }, [dispatch, numericId, UserStatus, Users]);

  return (
    <>
      <ContainerNewUsers>
        <TitleHotel>HOTEL MIRANDA</TitleHotel>
        <Link to={"/users"}>
          <IconClose
            onClick={() => {
              navigate("/users");
            }}
          />
        </Link>
        <ContainerImg>
          <ImgUser src="/src/assets/Imagenes/149071.png" alt="img NewUser" />
          <AddImg />
          <BoxArticle>
            <div>
              <TypeInput>Full Name</TypeInput>
              <InputName
                type="text"
                placeholder="Name"
                name="name"
                value={newUser.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <TypeInput>Email</TypeInput>
              <InputName
                type="text"
                placeholder="email@email.com"
                name="email"
                value={newUser.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <TypeInput>Phone</TypeInput>
              <InputName
                type="text"
                name="phone"
                value={newUser.phone}
                onChange={handleInputChange}
              />
            </div>
          </BoxArticle>
        </ContainerImg>
        <ContainerInput>
          <BoxArticle>
            <div>
              <TypeInput>Job</TypeInput>
              <SelectCreate
                typeof="text"
                name="department"
                value={newUser.department}
                onChange={handleInputChange}
              >
                <option value="MANAGER">MANAGER</option>
                <option value="RECEPTIONIST">RECEPTIONIST</option>
                <option value="ROOM SERVICE">ROOM SERVICE</option>
              </SelectCreate>
              
            </div>
            <div>
              <TypeInput>Job Desk</TypeInput>
              <InputDesk
                type="text"
                name="description"
                value={newUser.description}
                onChange={handleInputChange}
              />
            </div>
          </BoxArticle>
          <BoxArticle>
          <TypeInput>Status</TypeInput>
              <SelectCreate
                typeof="text"
                name="status"
                value={newUser.status}
                onChange={handleInputChange}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </SelectCreate>
            <div>
              <TypeInput>Star Date</TypeInput>
              <InputName
                type="date"
                name="start_date"
                value={newUser.start_date} 
                onChange={handleInputChange}
              />
            </div>
          </BoxArticle>
        </ContainerInput>
        <ContainerButton>
          <ButtonGreen  onClick={handleSave} >
            Edit User
          </ButtonGreen>
        </ContainerButton>
      </ContainerNewUsers>
    </>
  );
};
