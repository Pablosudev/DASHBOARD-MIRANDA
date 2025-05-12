import { createAsyncThunk } from "@reduxjs/toolkit";
import { Users } from "../Interfaces/UsersInterfaces";
import { GetAuthHeaders } from "../../UseContext/GetAuth";

export const UsersAllThunk = createAsyncThunk<Users[], number | undefined>(
  "users/getUsers",
  async (_, {rejectWithValue}) => {
    
          try {
            const response = await fetch("http://localhost:3005/api/v1/users", {
              method: "GET",
              headers: GetAuthHeaders(),
            });
            if (!response.ok) {
              return rejectWithValue("Error al cargar los datos");
            }
            const users: Users[] = await response.json();
            return users;
          } catch (error) {
            return rejectWithValue(error.message || "Error al obtener los datos de los usuarios");
          }
        }
      );
      

//FETCH ID
export const IdUserThunk = createAsyncThunk<Users, number>(
  "userId/getIdUser",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:3005/api/v1/users/${id}`, {
        method: "GET",
        headers: GetAuthHeaders(),
      });
      if (!response.ok) {
        console.log("Error en la respuesta de la API:", response);
      }
      const userData: Users = await response.json();

      if (userData) {
        return userData; 
      } else {
        return rejectWithValue("Usuario no encontrado");
      }
    } catch (error) {
      console.error("Error en el thunk:", error);
      return rejectWithValue(
        error.message || "Error al obtener los datos del usuario"
      );
    }
  }
);

//FETCH DELETE

export const DeleteUserThunk = createAsyncThunk<{ id: number }, number>(
  "user/deleteUser",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:3005/api/v1/users/${id}`,
        {
          method: "DELETE",
          headers: GetAuthHeaders(),
        }
      );

      if (!response.ok) {
        return rejectWithValue("Error al eliminar el usuario");
      }

      return { id };
    } catch (error) {
      return rejectWithValue(error.message || "Error desconocido al eliminar el usuario");
    }
  }
);

      
//FETCH CREATE
export const CreateUserThunk = createAsyncThunk<Users, Users>(
  "user/createUser",
  async (newUser, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3005/api/v1/users", {
        method: "POST",
        headers: GetAuthHeaders(),
        body: JSON.stringify(newUser),
      });
      console.log(response)
      if (!response.ok) {
        throw new Error("Error al crear el usuario");
      }

      const createdUser = await response.json();
      return createdUser;
    } catch (error) {
      return rejectWithValue(error.message || "Error al crear el usuario");
    }
  }
);

//FETCH EDIT
export const EditUserThunk = createAsyncThunk<
  Users,
  { id: number; updatedUser: Users }
>("user/editUser", async ({ id, updatedUser }, { rejectWithValue }) => {
  try {
    const response = await fetch(`http://localhost:3005/api/v1/users/${id}`, {
      method: "PUT",
      headers: GetAuthHeaders(),
      body: JSON.stringify(updatedUser),
    });

    if (!response.ok) {
      return rejectWithValue("Error al editar el usuario");
    }

    const updatedUserData = await response.json();
    return updatedUserData;
  } catch (error) {
    return rejectWithValue(error.message || "Error al editar el usuario");
  }
});
