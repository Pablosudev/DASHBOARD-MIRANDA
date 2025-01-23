import { createSlice } from "@reduxjs/toolkit";
import { RoomsThunk } from "./RoomsThunk";
import { IdRoomThunk } from "./RoomsThunk"; 

export const SliceRooms = createSlice({
  name: "rooms",
  initialState: {
    status: "idle",
    error: null,
    data: [], 
    room: { 
      status: "idle",
      error: null,
      data: {},
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    //RoomsThunk
    builder
      .addCase(RoomsThunk.pending, (state) => {
        console.log("Estado Rooms en pending...");
        state.status = "pending";
      })
      .addCase(RoomsThunk.fulfilled, (state, action) => {
        console.log("Estado Rooms en fulfilled...");
        console.log("Data Rooms:", action.payload);
        state.status = "fulfilled";
        state.data = action.payload;
        state.error = null;
      })
      .addCase(RoomsThunk.rejected, (state, action) => {
        console.log("Estado Rooms en rejected...");
        state.status = "rejected";
        state.error = action.error.message;
      });

    //IdRoomThunk
    builder
      .addCase(IdRoomThunk.pending, (state) => {
        console.log("Estado ID en pending...");
        state.room.status = "pending"; 
      })
      .addCase(IdRoomThunk.fulfilled, (state, action) => {
        console.log("Estado ID en fulfilled...");
        console.log("Data ID:", action.payload);
        state.room.status = "fulfilled"; 
        state.room.data = action.payload; 
        state.room.error = null; 
      })
      .addCase(IdRoomThunk.rejected, (state, action) => {
        console.log("Estado ID en rejected...");
        state.room.status = "rejected"; 
        state.room.error = action.error.message; 
      });
  },
});

// Selectores
export const getAllRoomsData = (state) => state.rooms.data;
export const getAllRoomsStatus = (state) => state.rooms.status;
export const getAllRoomsError = (state) => state.rooms.error;

export const getIdRoomData = (state) => state.rooms.room.data; 
export const getIdRoomStatus = (state) => state.rooms.room.status; 
export const getIdRoomError = (state) => state.rooms.room.error; 

export default SliceRooms.reducer;
