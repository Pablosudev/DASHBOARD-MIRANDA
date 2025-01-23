import { createAsyncThunk } from "@reduxjs/toolkit";


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