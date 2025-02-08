import { useReducer , createContext, useContext } from "react";
import { AuthState } from "./Interface/AuthContextInterface";
import React from "react";
const initialState: AuthState = {
  email: "",
  authenticated: false,
  password: ""
};

const AuthContext = createContext<{
  state: AuthState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const useAuthContext = () => {
  return useContext(AuthContext);
}



const reducer = (state, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_AUTHENTICATED":
      return { ...state, authenticated: action.payload };
    case "LOGOUT":
      localStorage.removeItem('email');
      localStorage.removeItem ('password');
      localStorage.removeItem ('isAuthenticated')
      return {
        email:"",
        authenticated: false,
      }
    
    default:
      return state;
  }
}

const AuthProvider = ({children}: { children: React.ReactNode }) => {

  const [state, dispatch] = useReducer( reducer, initialState )

  return(
    <AuthContext.Provider value={{
      dispatch,
      email: state.email,
      password: state.password,
      authenticated: state.autheticated,
      setEmail: (email) => dispatch({ type: "SET_EMAIL", payload: email }),
      setPassword: (password) => dispatch({ type: "SET_PASSWORD", payload: password }),
      setAuthenticated: (status) => dispatch({ type: "SET_AUTHENTICATED", payload: status }),
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthProvider, useAuthContext
}