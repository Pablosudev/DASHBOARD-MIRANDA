import { createSlice } from "@reduxjs/toolkit";
import { UsersAllThunk } from "./UsersThunk";

export const UsersSlice = createSlice({
  name: "users",
  initialState: {
    status: "idle",
    error: null,
    data: [],
  },
  extraReducers: (builder) => {
    //UsersThunk
    builder
      .addCase(UsersAllThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(UsersAllThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
        state.error = null;
      })
      .addCase(UsersAllThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});


export const AllDataUsers = (state) => state.users.data;
export const AllStatusUsers = (state) => state.users.status;
