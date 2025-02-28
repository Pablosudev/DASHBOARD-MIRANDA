import { ReactNode } from "react";

export interface AuthState {
    email: string;
    authenticated: boolean;
    password?: string;
    
  }
  export interface AuthProviderProps {
    children: ReactNode;
  }