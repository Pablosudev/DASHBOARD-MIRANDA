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
    builder
    .addCase(DeleteUsersThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(DeleteUsersThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.users = state.users.filter(user => user.id !== action.payload.id);
    })
    .addCase(DeleteUsersThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message;
    });
  },
});

export const AllDataUsers = (state) => state.users.data;
export const AllStatusUsers = (state) => state.users.status;
