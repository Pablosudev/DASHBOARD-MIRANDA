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


//FETCH DELETE
export const DeleteUsersThunk = createAsyncThunk(
    "user/deleteUser",
    async (id) => {
      try {
        const roomId = await new Promise((resolve, reject) => {
          setTimeout(async () => {
            try {
              const response = await fetch(`/Data/users.json?id=${id}`, {});
  
              if (!response.ok) {
                reject("Error al eliminar el ususario");
              }
  
              resolve({ id: id });
            } catch (error) {
              reject(error);
            }
          }, 200);
        });
        return userId;
      } catch (error) {
        throw new Error("Error al eliminar el ususario");
      }
    }
  );