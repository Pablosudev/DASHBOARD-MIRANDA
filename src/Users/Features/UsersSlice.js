import { createSlice } from "@reduxjs/toolkit";
import { DeleteUsersThunk, UsersAllThunk } from "./UsersThunk";

export const UsersSlice = createSlice({
  name: "users",
  initialState: {
    status: "idle",
    error: null,
    data: [],
    userId: {
      status: "idle",
      data: null,
      error: null,
    },
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

    builder
      .addCase(DeleteUsersThunk.pending, (state) => {
        state.roomId.statusDelete = "pending";
      })
      .addCase(DeleteUsersThunk.fulfilled, (state, action) => {
        state.statusDelete = "fulfilled";

        state.data = state.data.filter((room) => room.id !== action.payload.id);

        if (state.roomId && state.roomId.data.id === action.payload.id) {
          state.roomId.data = {};
          state.roomId.statusDelete = "idle";
        }

        state.error = null;
      })
      .addCase(DeleteUsersThunk.rejected, (state, action) => {
        state.roomId.statusDelete = "rejected";
        state.roomId.error = action.error.message;
      });
  },
});

export const AllDataUsers = (state) => state.users.data;
export const AllStatusUsers = (state) => state.users.status;
