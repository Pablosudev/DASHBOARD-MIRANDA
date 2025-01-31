import { createAsyncThunk } from "@reduxjs/toolkit";


export const UsersAllThunk = createAsyncThunk("users/getUsers" , async () => {
    try{
        const users = await new Promise ((resolve, reject) => {
            setTimeout(async () => {
                try {
                    const response = await fetch ("/Data/users.json");
                    if(!response.ok){
                        reject("Error al cargar los datos");
                    }
                    const json = await response.json();
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
export const IdUserThunk = createAsyncThunk(
  "userId/getIdUser",
  async (id, { rejectWithValue }) => {
    try {
      const userId = await new Promise((resolve, reject) => {
        setTimeout(async () => {
          try {
            
            const response = await fetch("/Data/users.json");
            if (!response.ok) {
              reject("Error al cargar los datos");
            }
            const jsonData = await response.json();

            const user = jsonData.find((user) => user.id === Number(id));

            if (user) {
              resolve(user);
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

export const DeleteUserThunk = createAsyncThunk(
  "user/deleteUser",
  async (id) => {
    try {
      const userId = await new Promise((resolve, reject) => {
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
export const CreateUserThunk = createAsyncThunk(
  "user/createUser",
  async (newUser, { rejectWithValue }) => {
    try {
      const userId = await new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            const newUserWithId = {
              ...newUser,
            };
            
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
export const EditUserThunk = createAsyncThunk(
  "user/editUser",
  async ({ id, updatedUser }, { rejectWithValue }) => {
    try {
      const userId = await new Promise((resolve, reject) => {
        setTimeout(async () => {
          try {
           
            const response = await fetch("/Data/users.json");
            if (!response.ok) {
              reject("Error al cargar los datos");
            }
            const jsonData = await response.json();
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
