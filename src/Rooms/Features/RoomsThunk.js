import { createAsyncThunk } from "@reduxjs/toolkit";
import rooms from "../Data/rooms.json"
//FETCH TODOS
export const RoomsThunk = createAsyncThunk("rooms/getRooms", async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(rooms)
    })
  })
})
//FETCH UNO
export const IdRoomThunk = createAsyncThunk(
  "roomId/getIdRoom",
  async (id, { rejectWithValue }) => {
    try {
      const roomId = await new Promise((resolve, reject) => {
        setTimeout(async () => {
          try {
            console.log("Realizando solicitud para obtener la habitación con ID:", id);

            // Simulamos una solicitud a un archivo JSON local
            const response = await fetch("/Data/rooms.json");
            if (!response.ok) {
              reject("Error al cargar los datos");
            }
            const jsonData = await response.json();
            console.log("Datos cargados:", jsonData);

            // Convertimos el ID a número antes de compararlo
            const room = jsonData.find((room) => room.id === Number(id));

            if (room) {
              console.log("Habitación encontrada:", room);
              resolve(room); // Resolvemos con la habitación encontrada
            } else {
              console.log("Habitación no encontrada para el ID:", id);
              reject("Habitación no encontrada");
            }
          } catch (error) {
            console.error("Error en la solicitud:", error);
            reject(error);
          }
        }, 200); // Simulamos un retraso de 200ms
      });
      return roomId;
    } catch (error) {
      console.error("Error en el thunk:", error);
      return rejectWithValue(error.message || "Error al obtener los datos de la ID");
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
            console.log("Editando la habitación con ID:", id);

            // Simulamos una solicitud a un archivo JSON local
            const response = await fetch("/Data/rooms.json");
            if (!response.ok) {
              reject("Error al cargar los datos");
            }
            const jsonData = await response.json();

            // Encontramos la habitación por su ID y la actualizamos
            const updatedData = jsonData.map((room) =>
              room.id === Number(id) ? { ...room, ...updatedRoom } : room
            );

            // Resolvemos con la habitación actualizada
            const updatedRoomData = updatedData.find((room) => room.id === Number(id));
            if (updatedRoomData) {
              console.log("Habitación actualizada:", updatedRoomData);
              resolve(updatedRoomData);
            } else {
              console.log("Habitación no encontrada para el ID:", id);
              reject("Habitación no encontrada");
            }
          } catch (error) {
            console.error("Error en la solicitud:", error);
            reject(error);
          }
        }, 200); // Simulamos un retraso de 200ms
      });
      return roomId;
    } catch (error) {
      console.error("Error en el thunk:", error);
      return rejectWithValue(error.message || "Error al editar la habitación");
    }
  }
);


//FETCH DELETE
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
              id: Date.now()
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