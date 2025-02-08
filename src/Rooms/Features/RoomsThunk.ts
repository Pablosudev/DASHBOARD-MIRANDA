import { createAsyncThunk } from "@reduxjs/toolkit";
import { RoomsInter, RoomsEdit } from "../Interfaces/RoomsInterfaces";
//FETCH TODOS
export const RoomsThunk = createAsyncThunk<RoomsInter []>("rooms/getRooms", async () => {
  try{
    const rooms = await new Promise<RoomsInter []>((resolve,reject) => {
      setTimeout(async () => {
        try {
          const response = await fetch("/Data/rooms.json");
          if(!response.ok){
            reject("Error al cargar los datos");
          }
          const json: RoomsInter []= await response.json();
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
export const IdRoomThunk = createAsyncThunk<RoomsInter, number>(
  "roomId/getIdRoom",
  async (id: number, { rejectWithValue }) => {
    try {
      const roomId = await new Promise<RoomsInter>((resolve, reject) => {
        setTimeout(async () => {
          try {
            
            const response = await fetch("/Data/rooms.json");
            if (!response.ok) {
              reject("Error al cargar los datos");
            }
            const jsonData: RoomsInter [] = await response.json();

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
export const EditRoomThunk = createAsyncThunk<RoomsInter , {id:number , updatedRoom: RoomsEdit}>(
  "room/editRoom",
  async ({ id, updatedRoom }, { rejectWithValue }) => {
    try {
      const roomId = await new Promise<RoomsInter>((resolve, reject) => {
        setTimeout(async () => {
          try {
           
            const response = await fetch("/Data/rooms.json");
            if (!response.ok) {
              reject("Error al cargar los datos");
            }
            const jsonData: RoomsInter [] = await response.json();
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
export const DeleteRoomThunk = createAsyncThunk<{id: number}, number>(
  "room/deleteRoom",
  async (id: number) => {
    try {
      const roomId = await new Promise<{id: number}>((resolve, reject) => {
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
export const CreateRoomThunk = createAsyncThunk<RoomsInter,  RoomsInter>(
  "room/createRoom",
  async (newRoom, { rejectWithValue }) => {
    try {
      const roomId = await new Promise<RoomsInter>((resolve, reject) => {
        setTimeout(() => {
          try {
            const newRoomWithId = {
              ...newRoom,
              id: Date.now(),
            };

            
            resolve(newRoomWithId);
          } catch (error) {
            reject("Error al crear la habitación");
          }
        }, 200);
      });

      return roomId; 
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
