import { createSlice } from "@reduxjs/toolkit";
import {
  RoomsThunk,
  IdRoomThunk,
  EditRoomThunk,
  DeleteRoomThunk,
  CreateRoomThunk,
} from "./RoomsThunk";

export const SliceRooms = createSlice({
  name: "rooms",
  initialState: {
    status: "idle",
    statusId: "idle", 
    statusDelete: "idle",
    statusEdit: "idle",
    statusCreate: "idle",
    error: null,
    data: [],
    roomId: {
      status: "idle",
      error: null,
      data: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    // RoomsThunk Reducers
    builder
      .addCase(RoomsThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(RoomsThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
        state.error = null;
      })
      .addCase(RoomsThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });

    // IdRoomThunk Reducers
    builder
      .addCase(IdRoomThunk.pending, (state) => {
        state.roomId.statusId = "pending";
      })
      .addCase(IdRoomThunk.fulfilled, (state, action) => {
        state.roomId.statusId = "fulfilled";
        state.roomId.data = action.payload;
        state.roomId.error = null;
        console.log("Datos de la habitación cargados:", action.payload);
      })
      .addCase(IdRoomThunk.rejected, (state, action) => {
        state.roomId.statusId = "rejected";
        state.roomId.error = action.error.message;
      });

    // EditRoomThunk Reducers
    
    
      builder
        .addCase(EditRoomThunk.pending, (state) => {
          state.roomId.statusEdit = "pending";
          console.log("Editando la habitación...");
        })
        .addCase(EditRoomThunk.fulfilled, (state, action) => {
          state.roomId.statusEdit = "fulfilled";
          state.roomId.data = action.payload; // Actualiza los datos de la habitación
    
          // Actualiza la lista de habitaciones con la habitación editada
          const index = state.data.findIndex((room) => room.id === action.payload.id);
          if (index !== -1) {
            state.data[index] = action.payload;
          }
    
          console.log("Habitación actualizada en el estado:", action.payload);
        })
        .addCase(EditRoomThunk.rejected, (state, action) => {
          state.roomId.statusEdit = "rejected";
          state.roomId.error = action.error.message;
          console.error("Error al editar la habitación:", action.error);
        });
 
    
      // DeleteRoomThunk Reducers
      builder
        .addCase(DeleteRoomThunk.pending, (state) => {
          state.roomId.statusDelete = "pending";
        })
        .addCase(DeleteRoomThunk.fulfilled, (state, action) => {
          state.statusDelete = "fulfilled";
         
          state.data = state.data.filter(
            (room) => room.id !== action.payload.id
          );
          console.log(JSON.stringify(state.data))
          if (state.roomId.data.id === action.payload.id) {
            state.roomId.data = {};
            state.roomId.statusDelete = "idle";
          }

          state.error = null;
        })
        .addCase(DeleteRoomThunk.rejected, (state, action) => {
          state.roomId.statusDelete = "rejected";
          state.roomId.error = action.error.message;
        });

    //CreateRoomThunk Reducers
    builder
      .addCase(CreateRoomThunk.pending, (state) => {
        state.roomId.statusCreate = "pending";
      })
      .addCase(CreateRoomThunk.fulfilled, (state, action) => {
        state.statusCreate = "fulfilled";
        state.data.push(action.payload);
        state.error = null;
      })
      .addCase(CreateRoomThunk.rejected, (state, action) => {
        state.roomId.statusCreate = "rejected";
        state.roomId.error = action.error.message;
      });
  },
});

// Selectores
export const getAllRoomsData = (state) => state.rooms.data;
export const getAllRoomsStatus = (state) => state.rooms.status;
export const getAllRoomsError = (state) => state.rooms.error;

export const getIdRoomsData = (state) => state.rooms.roomId.data;
export const getIdRoomsStatus = (state) => state.rooms.roomId.statusId;
export default SliceRooms.reducer;
