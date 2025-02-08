import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonStyled, CustomIcon, DivStyled, InputStyled} from "../Components/LogInStyle";
import { useAuthContext } from "../../UseContext/AuthContext";


export const LogIn = () => {

    const {email, password, setEmail, setAuthenticated , setPassword } = useAuthContext();
  

    const  navigate = useNavigate();

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === '1234' && password === '1234'){
            
          setAuthenticated(true);

          localStorage.setItem('isAuthenticated', 'true');
          localStorage.setItem('email', email)
          navigate('/dashboard');
      
        } else {
            alert ('Incorrect password or email.')
        }
    }

    return (
        <DivStyled>
          <CustomIcon/>
          <h1 data-cy = "Title">HOTEL MIRANDA</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <InputStyled type="text" placeholder="Email" value={email} onChange={handleChangeEmail} data-cy = "InputEmail"/>
            </div>
            <div>
              <InputStyled type="password" placeholder="Contraseña" value={password} onChange={handleChangePassword} data-cy = "InputPassword"/>
            </div>
            <ButtonStyled type="submit" data-cy="ButtonStyled">Login</ButtonStyled>
          </form>
      </DivStyled>
    )
}