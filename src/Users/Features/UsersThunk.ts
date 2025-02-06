import { createAsyncThunk } from "@reduxjs/toolkit";
import { Users, UsersEdit } from "../Interfaces/UsersInterfaces"

export const UsersAllThunk = createAsyncThunk<Users [], string | undefined>("users/getUsers" , async () => {
    try{
        const users = await new Promise<Users []> ((resolve, reject) => {
            setTimeout(async () => {
                try {
                    const response = await fetch ("/Data/users.json");
                    if(!response.ok){
                        reject("Error al cargar los datos");
                    }
                    const json: Users [] = await response.json();
                    resolve(json);
                } catch(error) {
                    reject(error);
                }
            }, 200)
        });
        return users;
    }   catch (error) {
        throw new Error("Error al obetener los datos de los usuarios");
    }
});

//FETCH ID
export const IdUserThunk = createAsyncThunk<Users , number>(
  "userId/getIdUser",
  async (id: number, { rejectWithValue }) => {
    try {
      const userId = await new Promise<Users>((resolve, reject) => {
        setTimeout(async () => {
          try {
            
            const response = await fetch("/Data/users.json");
            if (!response.ok) {
              reject("Error al cargar los datos");
            }
            const jsonData: Users[] = await response.json();

            const users = jsonData.find((users) => users.id === Number(id));
           
            if (users) {
              resolve(users);
            } else {
              reject("Usuario no encontrado");
            }
          } catch (error) {
            reject(error);
          }
        }, 200);
      });
      return userId;
    } catch (error) {
      console.error("Error en el thunk:", error);
      return rejectWithValue(
        error.message || "Error al obtener los datos de la ID"
      );
    }
  }
);




//FETCH DELETE

export const DeleteUserThunk = createAsyncThunk<{id:number}, number>(
  "user/deleteUser",
  async (id: number) => {
    try {
      const userId = await new Promise<{ id: number}> ((resolve, reject) => {
        setTimeout(async () => {
          try {
            const response = await fetch(`/Data/users.json?id=${id}`, {method: 'DELETE'});
              
            if (!response.ok) {
              reject("Error al eliminar la habitación");
            }

            resolve({id});
          } catch (error) {
            reject(error);
          }
        }, 200);
      });
      return userId;
    } catch (error) {
      throw new Error("Error al eliminar la habitación");
    }
  }
);

//FETCH CREATE
export const CreateUserThunk = createAsyncThunk<Users, Users>(
  "user/createUser",
  async (newUser, { rejectWithValue }) => {
    try {
      const userId = await new Promise<Users>((resolve, reject) => {
        setTimeout(() => {
          try {
            const newUserWithId = {
              ...newUser,
              id: Date.now(),
            };
            console.log(typeof(newUser))
            resolve(newUserWithId);
          } catch (error) {
            reject("Error al crear la habitación");
          }
        }, 200);
      });

      return userId; 
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//FETCH EDIT
export const EditUserThunk  = createAsyncThunk<Users, {id: number , updatedUser: UsersEdit}>(
  "user/editUser",
  async ({ id, updatedUser}, { rejectWithValue }) => {
    try {
      const userId = await new Promise<Users>((resolve, reject) => {
        setTimeout(async () => {
          try {
           
            const response = await fetch("/Data/users.json");
            if (!response.ok) {
              reject("Error al cargar los datos");
            }
            const jsonData: Users[] = await response.json();
            const updatedData = jsonData.map((user) =>
              user.id === Number(id) ? { ...user, ...updatedUser } : user
            );
            const updatedUserData = updatedData.find(
              (user) => user.id === Number(id)
            );
            if (updatedUserData) {
              
              resolve(updatedUserData);
            } else {
    
              reject("Usuario no encontrada");
            }
          } catch (error) {
            
            reject(error);
          }
        }, 200);
      });
      return userId;
    } catch (error) {
      
      return rejectWithValue(error.message || "Error al editar el usuario");
    }
  }
);
