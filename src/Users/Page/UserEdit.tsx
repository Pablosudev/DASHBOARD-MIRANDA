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

export const UserEdit = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const Users = useSelector(IdData);
  const UserStatus = useSelector(StatusId);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [newUser, setNewUser] = useState<Users>({
    name: "",
    email: "",
    start_date: new Date,
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
        alert("Usuario actualizado correctamente");
        navigate("/users");
      })
      .catch((error) => {
        console.error("Error en handleSave:", error);
        alert("Error al actualizar el usuario: " + (error.payload?.message || error.message || "Error desconocido"));
        navigate("/users")
      });
  };
  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toISOString().split("T")[0];
  };
  
  useEffect(() => {
    if (UserStatus === "idle" ) {
      if(id){
      dispatch(IdUserThunk(id));
      }
    } else if (UserStatus === "fulfilled") {
      if (Users) {
        setNewUser({
          name: Users.name,
          start_date: Users.start_date,
          description: Users.description,
          phone: Users.phone,
          email: Users.email,
          password: "",
          status: "",
          department: "",
          _id: "",
        });
        if(Users._id != id){
          dispatch(IdUserThunk(id ?? ""))
        }
      }
    } else if (UserStatus === "rejected") {
      alert("Error al cargar los datos de la habitación");
    }
  }, [dispatch, id, UserStatus, Users]);

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
                name="description"
                value={newUser.description}
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
                name="job_desk"
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
