import { createSlice } from "@reduxjs/toolkit";
import { CreateUserThunk, DeleteUserThunk, EditUserThunk, IdUserThunk, UsersAllThunk } from "./UsersThunk";

export const UsersSlice = createSlice({
  name: "users",
  initialState: {
    status: "idle",
    statusDelete: "idle",
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

    builder;
    //UserId
    builder
      .addCase(IdUserThunk.pending, (state) => {
        state.userId.status = "pending";
      })
      .addCase(IdUserThunk.fulfilled, (state, action) => {
        state.userId.status = "fulfilled";
        state.userId.data = action.payload;
        state.userId.error = null;
        console.log("Datos de la habitación cargados:", action.payload);
      })
      .addCase(IdUserThunk.rejected, (state, action) => {
        state.userId.status = "rejected";
        state.userId.error = action.error.message;
      });

    //UserDelete
    builder
      .addCase(DeleteUserThunk.pending, (state) => {
        state.userId.statusDelete = "pending";
      })
      .addCase(DeleteUserThunk.fulfilled, (state, action) => {
        state.statusDelete = "fulfilled";

        state.data = state.data.filter(
          (users) => users.id !== action.payload.id
        );

        if (state.userId.data && state.userId.data.id === action.payload) {
          state.userId.data = null;
        }

        state.error = null;
      })
      .addCase(DeleteUserThunk.rejected, (state, action) => {
        state.userId.statusDelete = "rejected";
        state.userId.error = action.error.message;
      });
      //UserCreate
    builder
      .addCase(CreateUserThunk.pending, (state) => {
        state.userId.status = "pending";
      })
      .addCase(CreateUserThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data.push(action.payload);
        state.error = null;
      })
      .addCase(CreateUserThunk.rejected, (state, action) => {
        state.userId.status = "rejected";
        state.userId.error = action.error.message;
      });

      //UserEdit
      builder
        .addCase(EditUserThunk.pending, (state) => {
          state.userId.status = "pending";
        })
        .addCase(EditUserThunk.fulfilled, (state, action) => {
          state.userId.status = "fulfilled";
          state.userId.data = action.payload; 
          
          const index = state.data.findIndex((user) => user.id === action.payload.id);
          if (index !== -1) {
            state.data[index] = action.payload;
          }
          
        })
        .addCase(EditUserThunk.rejected, (state, action) => {
          state.userId.status = "rejected";
          state.userId.error = action.error.message;
        });
  },
});

export const AllDataUsers = (state) => state.users.data;
export const AllStatusUsers = (state) => state.users.status;
export const IdData = (state) => state.users.userId.data;
export const StatusIdDelete = (state) => state.users.userId.statusDelete;
export const StatusId = (state) => state.users.userId.satatus;
export default UsersSlice.reducer;
