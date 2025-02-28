import React, { createContext, useState, useContext, ReactNode } from 'react';



export interface AuthState {
  email: string;
  authenticated: boolean;
  password?: string;
}

const defaultAuthState: AuthState = {
  email: '',
  authenticated: false,
  password: '',
};

const AuthContext = createContext<{
  authState: AuthState;
  setAuthState: React.Dispatch<React.SetStateAction<AuthState>>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  setEmail: (email: string) => void; 
  setPassword: (password: string) => void;
}>({
  authState: defaultAuthState,
  setAuthState: () => {},
  login: async () => {},
  logout: () => {},
  setEmail: () => {}, 
  setPassword: () => {}, 
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>(defaultAuthState);
  
  const setEmail = (email: string) => {
    setAuthState((prevState) => ({
      ...prevState,
      email,
    }));
  };

  const setPassword = (password: string) => {
    setAuthState((prevState) => ({
      ...prevState,
      password,
    }));
  };

  const login = async (email: string, password: string) => {
    try{
    const response = await fetch('http://localhost:3001/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Credenciales incorrectas');
    }

    const data = await response.json();
    if (data.token) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('email', email);
      localStorage.setItem('token', data.token);

      setAuthState({
        email,
        authenticated: true,
        password: '',
      });
      
    } else {
      
      throw new Error('No se recibió el token');
    }
  } catch (error) {
    console.error('Error:', error);
    alert(error.message);
  }
};

  const logout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('email');
    localStorage.removeItem('token');

    setAuthState({
      email: '',
      authenticated: false,
      password: '',
    });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        setAuthState,
        login,
        logout,
        setEmail,
        setPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
