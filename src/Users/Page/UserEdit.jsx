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

export const UserEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const Users = useSelector(IdData);
  const UserStatus = useSelector(StatusId);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
      dispatch(EditUserThunk({ id: Number(id), updatedUser: newUser }))
        .unwrap()
        .then(() => {
          alert("Habitación actualizada correctamente");
          navigate("/users");
        })
        .catch((error) => {
          alert("Error al actualizar la habitación: " + error.message);
        });
    };
  const [newUser, setNewUser] = useState({
    full_name: "",
    start_date: "",
    job_description: "",
    phone_number: "",
    email: "",
    job_desk: "",
    password: "",
  });

  useEffect(() => {
    if (UserStatus === "idle") {
      dispatch(IdUserThunk(id));
    } else if (UserStatus === "fulfilled") {
    
      setNewUser({
        full_name: Users.full_name,
        start_date: Users.start_date,
        job_description: Users.job_description,
        phone_number: Users.phone_number,
        email: Users.email,
        job_desk: "",
        password: "",
      });
      if (Users.id != id) {
        dispatch(IdUserThunk(id));
      }
    } else if (UserStatus === "rejected") {
      alert("Error al cargar los datos de la habitación");
    }
  }, [dispatch, id, UserStatus,]);

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
                name="full_name"
                value={newUser.full_name}
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
                name="phone_number"
                value={newUser.phone_number}
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
                type="text"
                name="job_description"
                value={newUser.job_description}
                onChange={handleInputChange}
              >
                <option value="MANAGER">MANAGER</option>
                <option value="RECEPTIONIST">RECEPTIONIST</option>
                <option value="ROOM SERVICE">ROOM SERVICE</option>
              </SelectCreate>
              <TypeInput>Status</TypeInput>
              <SelectCreate
                type="text"
                name="status"
                value={newUser.status}
                onChange={handleInputChange}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
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
            <div>
              <TypeInput>Create Password</TypeInput>
              <InputName
                type="password"
                name="password"
                onChange={handleInputChange}
              />
            </div>{" "}
            <div>
              <TypeInput>Star Date</TypeInput>
              <InputName
                type="text"
                name="start_Date"
                placeholder="0/00/0000"
                value={newUser.start_date}
                onChange={handleInputChange}
              />
            </div>
          </BoxArticle>
        </ContainerInput>
        <ContainerButton>
          <ButtonGreen onClick={handleSave}>Edit User</ButtonGreen>
        </ContainerButton>
      </ContainerNewUsers>
    </>
  );
};
