import { createAsyncThunk } from "@reduxjs/toolkit";
import { Users } from "../Interfaces/UsersInterfaces";
import { GetAuthHeaders } from "../../UseContext/GetAuth";

export const UsersAllThunk = createAsyncThunk<Users[], number | undefined>(
  "users/getUsers",
  async (_, {rejectWithValue}) => {
    
          try {
            const response = await fetch("https://yj5nkhibw8.execute-api.eu-west-3.amazonaws.com/dev/api/v1/users", {
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
export const IdUserThunk = createAsyncThunk<Users, string>(
  "userId/getIdUser",
  async (_id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://yj5nkhibw8.execute-api.eu-west-3.amazonaws.com/dev/api/v1/users/${_id}`, {
        method: "GET",
        headers: GetAuthHeaders(),
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error ${response.status}: ${errorText}`);
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

export const DeleteUserThunk = createAsyncThunk<{ _id: string }, string>(
  "user/deleteUser",
  async (_id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://yj5nkhibw8.execute-api.eu-west-3.amazonaws.com/dev/api/v1/users/${_id}`,
        {
          method: "DELETE",
          headers: GetAuthHeaders(),
        }
      );

      if (!response.ok) {
        return rejectWithValue("Error al eliminar el usuario");
      }

      return { _id };
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
      const response = await fetch("https://yj5nkhibw8.execute-api.eu-west-3.amazonaws.com/dev/api/v1/users", {
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
  { _id: string; updatedUser: Users }
>("user/editUser", async ({ _id, updatedUser }, { rejectWithValue }) => {
  try {
    const response = await fetch(`https://yj5nkhibw8.execute-api.eu-west-3.amazonaws.com/dev/api/v1/users/${_id}`, {
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
