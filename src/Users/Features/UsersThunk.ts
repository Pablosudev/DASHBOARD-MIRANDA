import { createAsyncThunk } from "@reduxjs/toolkit";
import { Users, UsersEdit } from "../Interfaces/UsersInterfaces";

export const UsersAllThunk = createAsyncThunk<Users[], string | undefined>(
  "users/getUsers",
  async (_, {rejectWithValue}) => {
    
          try {
            const response = await fetch("http://localhost:3001/api/v1/users", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkNoYXJsZXNfU2F3YXluMTRAZ21haWwuY29tIiwiaWF0IjoxNzQwNDU4MTEwLCJleHAiOjE3NzIwMTU3MTB9.7QDNSNaftYFVV8QNiXcKYYN9jdHUHOt13eQpSW-CorE`,
              },
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
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:3001/api/v1/users/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkNoYXJsZXNfU2F3YXluMTRAZ21haWwuY29tIiwiaWF0IjoxNzQwNDU4MTEwLCJleHAiOjE3NzIwMTU3MTB9.7QDNSNaftYFVV8QNiXcKYYN9jdHUHOt13eQpSW-CorE`,
        },
      });
      if (!response.ok) {
        return rejectWithValue("Error al cargar los datos");
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

export const DeleteUserThunk = createAsyncThunk<{ id: string }, string>(
  "user/deleteUser",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/v1/users/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkNoYXJsZXNfU2F3YXluMTRAZ21haWwuY29tIiwiaWF0IjoxNzQwNDU4MTEwLCJleHAiOjE3NzIwMTU3MTB9.7QDNSNaftYFVV8QNiXcKYYN9jdHUHOt13eQpSW-CorE`, 
          },
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
      const response = await fetch("http://localhost:3001/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkNoYXJsZXNfU2F3YXluMTRAZ21haWwuY29tIiwiaWF0IjoxNzQwNDU4MTEwLCJleHAiOjE3NzIwMTU3MTB9.7QDNSNaftYFVV8QNiXcKYYN9jdHUHOt13eQpSW-CorE`,
        },
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
  { id: string; updatedUser: UsersEdit }
>("user/editUser", async ({ id, updatedUser }, { rejectWithValue }) => {
  try {
    const response = await fetch(`http://localhost:3001/api/v1/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkNoYXJsZXNfU2F3YXluMTRAZ21haWwuY29tIiwiaWF0IjoxNzQwNDU4MTEwLCJleHAiOjE3NzIwMTU3MTB9.7QDNSNaftYFVV8QNiXcKYYN9jdHUHOt13eQpSW-CorE`,
      },
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
