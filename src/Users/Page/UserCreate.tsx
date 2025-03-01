import { SelectCreate, ImgUser, ContainerNewUsers, TitleHotel, ContainerImg, AddImg, ContainerInput, BoxArticle, TypeInput, InputName, InputDesk, ContainerButton, IconClose } from "../Components/UsersCreate";
import { ButtonGreen } from "../../commons/Buttons/ButtonGreen";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateUserThunk } from "../Features/UsersThunk";
import React from "react";
import { AppDispatch } from "../../App/Store";
import { Users } from "../Interfaces/UsersInterfaces";


export const UserCreate = () => {
    const dispatch= useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const[ newUser, setNewUser] = useState<Users>({
        name: "",
        email:"",
        start_date: "",
        description: "",
        phone: "",
        status: "",
        department:"",
        password:"",
    })

    const handleInputChange = (e:any) => {
        const { name, value } = e.target;
        setNewUser((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    const handleCreateUser = () => {
        dispatch(CreateUserThunk(newUser));
        navigate("/users")
    }

    return (
        <>
            <ContainerNewUsers>
            <TitleHotel>HOTEL MIRANDA</TitleHotel>
            <Link to={"/users"}>
            <IconClose onClick={() => {navigate("/users")}}/>
            </Link>
            <ContainerImg>
                <ImgUser src="/src/assets/Imagenes/149071.png" alt="img NewUser" />
                <AddImg/>
                <BoxArticle>
                    <div>
                        <TypeInput>Full Name</TypeInput>
                        <InputName
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={newUser.name}
                            onChange={handleInputChange} /> 
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
                        <SelectCreate typeof="text" name="department" value={newUser.department} onChange={handleInputChange}>
                        <option value="MANAGER">MANAGER</option>
                        <option value="RECEPTIONIST">RECEPTIONIST</option>
                        <option value="ROOM SERVICE">ROOM SERVICE</option>
                        </SelectCreate> 
                        <TypeInput>Status</TypeInput>
                        <SelectCreate typeof="text" name="status" value={newUser.status} onChange={handleInputChange}>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        </SelectCreate> 

                    </div> 
                    <div>
                        <TypeInput>Job Desk</TypeInput>
                        <InputDesk type="text" name="description" onChange={handleInputChange}/> 
                    </div> 
                </BoxArticle>
                <BoxArticle>
                    <div>
                        <TypeInput>Create Password</TypeInput>
                        <InputName type="password" name="password" onChange={handleInputChange}/> 
                    </div> <div>
                        <TypeInput>Star Date</TypeInput>
                        <InputName type="date" name="start_date"  value={newUser.start_date} onChange={handleInputChange}/> 
                    </div> 
                </BoxArticle>
            </ContainerInput>
            <ContainerButton>
                <ButtonGreen type="" onClick={handleCreateUser}>SAVE</ButtonGreen>
            </ContainerButton>
            
            </ContainerNewUsers>
        </>
    )
}