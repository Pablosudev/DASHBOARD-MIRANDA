import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonStyled, CustomIcon, DivStyled, InputStyled} from "./LogInStyle";
import { FaHotel } from "react-icons/fa6";



export const LogIn = () => {

    const [email, setEmail ] = useState("")
    const [password, setPassword ] = useState ("")
    const  navigate = useNavigate();

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === 'email@email.com' && password === 'password123'){
            localStorage.setItem('email', email);
            navigate('/dashboard')
        } else {
            alert ('Incorrect password or email.')
        }
        console.log('Email:', email);
        console.log('Contraseña', password);
    }

    return (
        <DivStyled>
          <CustomIcon/>
          <h1>HOTEL MIRANDA</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <InputStyled type="text" placeholder="Email" value={email} onChange={handleChangeEmail}/>
            </div>
            <div>
              <InputStyled type="password" placeholder="Contraseña" value={password} onChange={handleChangePassword}/>
            </div>
            <ButtonStyled type="submit">Login</ButtonStyled>
          </form>
      </DivStyled>
    )
}