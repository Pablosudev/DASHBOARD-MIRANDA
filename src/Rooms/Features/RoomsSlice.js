import { createSlice } from "@reduxjs/toolkit";
import { RoomsThunk } from "./RoomsThunk";


export const SliceRooms = createSlice({
  name: "rooms",
  initialState: {
    status: "idle",
    error: null, 
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(RoomsThunk.pending, (state) => {
        console.log("Estado en pending...");
        state.status = "pending";
      })
      .addCase(RoomsThunk.fulfilled, (state, action) => {
        console.log("Estado en fulfilled...");
        console.log("Data:", action.payload);
        state.status = "fulfilled";
        state.data = action.payload;
        state.error = null; 
      })
      .addCase(RoomsThunk.rejected, (state, action) => {
        console.log("Estado en rejected...");
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const getAllRoomsData = (state) => state.rooms.data;
export const getAllRoomsStatus = (state) => state.rooms.status;
export const getAllRoomsError = (state) => state.rooms.error;

export default SliceRooms.reducer;


