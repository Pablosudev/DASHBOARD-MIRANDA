import { createSlice } from "@reduxjs/toolkit";
import { RoomsThunk } from "./RoomsThunk";

export const SliceRooms = createSlice ({
    name: "rooms",
    initialState: {
        status: "idle",
        error: false,
        data: [],      
    },
    reducers: {},
    extraReducers:(builder) => {
        builder
        .addCase(RoomsThunk.pending, (state) => {
            state.status = "pending";
        })
        .addCase(RoomsThunk.rejected, (state, action ) => {
            state.status = "rejected";
            state.error = "action.error.message";
        })
        .addCase(RoomsThunk.fulfilled, (state,  action) => {
            state.status = "fulfilled";
            state.data = action.payload
        })
    }
})

export const getRoomsData = (state) => state.rooms.data;
export const getRoomsStatus = (state) => state.rooms.status;
export const getRoomsError = (state) => state.rooms.error;