import React from 'react';
import { useAuthContext } from '../../UseContext/AuthContext';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { DivStyled, CustomIcon, InputStyled, ButtonStyled } from '../Components/LogInStyle';

export const LogIn = () => {
  const navigate = useNavigate();
  const { authState, setEmail, setPassword, login } = useAuthContext();
  const { email, password } = authState;

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password); 
    navigate('/dashboard'); 
  };

  return (
    <DivStyled>
      <CustomIcon />
      <h1 data-cy="Title">HOTEL MIRANDA</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <InputStyled
            type="text"
            placeholder="1234@gmail.com"
            value={email}
            onChange={handleChangeEmail}
            data-cy="InputEmail"
          />
        </div>
        <div>
          <InputStyled
            type="password" 
            placeholder="1234"
            value={password}
            onChange={handleChangePassword}
            data-cy="InputPassword"
          />
        </div>
        <ButtonStyled type="submit" data-cy="ButtonStyled">
          Login
        </ButtonStyled>
      </form>
    </DivStyled>
  );
};
