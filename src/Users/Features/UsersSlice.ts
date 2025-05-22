import { createSlice } from "@reduxjs/toolkit";
import { CreateUserThunk, DeleteUserThunk, EditUserThunk, IdUserThunk, UsersAllThunk } from "./UsersThunk";
import { Users, UserState } from "../Interfaces/UsersInterfaces";
import { RootState } from "../../App/Store";




const initialState: UserState = {
  status: 'idle',
  statusDelete: 'idle',
  error: undefined,
  data: [],
  userId: {
    status: 'idle',
    statusDelete: 'idle',
    data: null,
    error: undefined,
  }
};


export const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //UsersThunk
    builder
      .addCase(UsersAllThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(UsersAllThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload ;
        state.error = undefined;
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
        state.userId.data = action.payload ;
        state.userId.error = undefined;
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
          (users) => users._id !== action.payload._id 
        );

        if (state.userId.data && state.userId.data._id === action.payload._id) {
          state.userId.data = null;
        }

        state.error = undefined;
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
        state.error = undefined;
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
        state.userId.data = action.payload ;

        const index = state.data.findIndex((user) => user._id === action.payload._id);
        if (index !== -1) {
          state.data[index] = action.payload ;
        }

      })
      .addCase(EditUserThunk.rejected, (state, action) => {
        state.userId.status = "rejected";
        state.userId.error = action.error.message;
      });
  },
});

export const AllDataUsers = (state: RootState): Users[] => state.users.data;
export const AllStatusUsers = (state: RootState): 'idle' | 'pending' | 'fulfilled' | 'rejected' => state.users.status;
export const IdData = (state: RootState): Users | null => state.users.userId.data;
export const StatusIdDelete = (state: RootState): 'idle' | 'pending' | 'fulfilled' | 'rejected' => state.users.userId.statusDelete;
export const StatusId = (state: RootState): 'idle' | 'pending' | 'fulfilled' | 'rejected' => state.users.userId.status;
export default UsersSlice.reducer;
