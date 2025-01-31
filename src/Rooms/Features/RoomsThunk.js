import { createAsyncThunk } from "@reduxjs/toolkit";
//FETCH TODOS
export const RoomsThunk = createAsyncThunk("rooms/getRooms", async () => {
  try{
    const rooms = await new Promise ((resolve,reject) => {
      setTimeout(async () => {
        try {
          const response = await fetch("/Data/rooms.json");
          if(!response.ok){
            reject("Error al cargar los datos");
          }
          const json = await response.json();
          resolve(json);
        } catch(error) {
          reject(error)
        }
      }, 200);
    });
    return rooms;
  } catch(error) {
    throw new Error("Error al obtener los datos de la habitación");
  }
});

//FETCH UNO
export const IdRoomThunk = createAsyncThunk(
  "roomId/getIdRoom",
  async (id, { rejectWithValue }) => {
    try {
      const roomId = await new Promise((resolve, reject) => {
        setTimeout(async () => {
          try {
            
            const response = await fetch("/Data/rooms.json");
            if (!response.ok) {
              reject("Error al cargar los datos");
            }
            const jsonData = await response.json();

            const room = jsonData.find((room) => room.id === Number(id));

            if (room) {
              resolve(room);
            } else {
              reject("Habitación no encontrada");
            }
          } catch (error) {
            reject(error);
          }
        }, 200);
      });
      return roomId;
    } catch (error) {
      console.error("Error en el thunk:", error);
      return rejectWithValue(
        error.message || "Error al obtener los datos de la ID"
      );
    }
  }
);

//FETCH EDIT
export const EditRoomThunk = createAsyncThunk(
  "room/editRoom",
  async ({ id, updatedRoom }, { rejectWithValue }) => {
    try {
      const roomId = await new Promise((resolve, reject) => {
        setTimeout(async () => {
          try {
           
            const response = await fetch("/Data/rooms.json");
            if (!response.ok) {
              reject("Error al cargar los datos");
            }
            const jsonData = await response.json();
            const updatedData = jsonData.map((room) =>
              room.id === Number(id) ? { ...room, ...updatedRoom } : room
            );
            const updatedRoomData = updatedData.find(
              (room) => room.id === Number(id)
            );
            if (updatedRoomData) {
              
              resolve(updatedRoomData);
            } else {
    
              reject("Habitación no encontrada");
            }
          } catch (error) {
            
            reject(error);
          }
        }, 200);
      });
      return roomId;
    } catch (error) {
      
      return rejectWithValue(error.message || "Error al editar la habitación");
    }
  }
);

//FETCH DELETE
export const DeleteRoomThunk = createAsyncThunk(
  "room/deleteRoom",
  async (id) => {
    try {
      const roomId = await new Promise((resolve, reject) => {
        setTimeout(async () => {
          try {
            const response = await fetch(`/Data/rooms.json?id=${id}`, {method: 'DELETE'});
              
            if (!response.ok) {
              reject("Error al eliminar la habitación");
            }

            resolve({id});
          } catch (error) {
            reject(error);
          }
        }, 200);
      });
      return roomId;
    } catch (error) {
      throw new Error("Error al eliminar la habitación");
    }
  }
);

//FETCH CREATE
export const CreateRoomThunk = createAsyncThunk(
  "room/createRoom",
  async (newRoom, { rejectWithValue }) => {
    try {
      const roomId = await new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            const newRoomWithId = {
              ...newRoom,
              id: Date.now(),
            };

            // Resolvemos la promesa con el nuevo objeto de la habitación
            resolve(newRoomWithId);
          } catch (error) {
            reject("Error al crear la habitación");
          }
        }, 200);
      });

      return roomId; // Devolvemos la habitación creada
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
