import { createAsyncThunk } from "@reduxjs/toolkit";

//FETCH TODOS
export const RoomsThunk = createAsyncThunk("rooms/getRooms", async () => {
  try {
    const rooms = await new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          const response = await fetch("/Data/rooms.json");
          if (!response.ok) {
            reject("Error al cargar los datos");
          }
          const json = await response.json();
          resolve(json);
        } catch (error) {
          reject(error);
        }
      }, 200);
    });

    return rooms;
  } catch (error) {
    throw new Error("Error al obtener los datos de las habitaciones");
  }
});
//FETCH UNO
export const IdRoomThunk = createAsyncThunk("roomID/getRoomId", async () => {
  try {
    const roomId = await new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          const response = await fetch(`/Data/rooms.json?id=${id_room}`);
          if (!response.ok) {
            reject("Error al cargar los datos");
          }
          const jsonId = await response.json();
          resolve(jsonId);
        } catch (error) {
          reject(error);
        }
      }, 200);
    });
    return roomId;
  } catch (error) {
    throw new Error("Error al obtener los datos de la ID");
  }
});

//FETCH EDIT
export const EditRoomThunk = createAsyncThunk("room/getEditRoom", async () => {
  try {
    const roomId = await new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          const response = await fetch(`/Data/rooms.json?id=${id_room}`);
          if (!response.ok) {
            reject("Error al cargar los datos");
          }
          const jsonId = await response.json();
          resolve(jsonId);
        } catch (error) {
          reject(error);
        }
      }, 200);
    });
    return roomId;
  } catch (error) {
    throw new Error("Error al obtener los datos de la ID");
  }
});

export const DeleteRoomThunk = createAsyncThunk("room/deleteRoom", async (id) => {
  try {
    const roomId = await new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          
          const response = await fetch(`/Data/rooms.json?id=${id}`, {
          
          });
          
          if (!response.ok) {
            reject("Error al eliminar la habitación");
          }
          
          resolve({ id: id }); 
        } catch (error) {
          reject(error);
        }
      }, 200);
    });
    return roomId; 
  } catch (error) {
    throw new Error("Error al eliminar la habitación");
  }
});