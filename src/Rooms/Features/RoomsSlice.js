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
    error: null,
    data: [],
    roomId: {
      status: "idle",
      error: null,
      data: {},
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
        state.roomId.status = "pending";
      })
      .addCase(IdRoomThunk.fulfilled, (state, action) => {
        state.roomId.status = "fulfilled";
        state.roomId.data = action.payload;
        state.roomId.error = null;
      })
      .addCase(IdRoomThunk.rejected, (state, action) => {
        state.roomId.status = "rejected";
        state.roomId.error = action.error.message;
      });

    // EditRoomThunk Reducers
    builder
      .addCase(EditRoomThunk.pending, (state) => {
        state.roomId.status = "pending";
      })
      .addCase(EditRoomThunk.fulfilled, (state, action) => {
        state.roomId.status = "fulfilled";
        state.roomId.data = action.payload;

        const index = state.data.findIndex(
          (room) => room.id === action.payload.id
        );
        if (index !== -1) {
          state.data[index] = action.payload;
        }
        state.roomId.error = null;
      })
      .addCase(EditRoomThunk.rejected, (state, action) => {
        state.roomId.status = "rejected";
        state.roomId.error = action.error.message;
      });

    // DeleteRoomThunk Reducers
    builder
      .addCase(DeleteRoomThunk.pending, (state) => {
        state.roomId.status = "pending";
      })
      .addCase(DeleteRoomThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";

        state.data = state.data.filter((room) => room.id !== action.payload.id);

        if (state.roomId.data.id === action.payload.id) {
          state.roomId.data = {};
          state.roomId.status = "idle";
        }

        state.error = null;
      })
      .addCase(DeleteRoomThunk.rejected, (state, action) => {
        state.roomId.status = "rejected";
        state.roomId.error = action.error.message;
      });

    //CreateRoomThunk Reducers  
    builder
      .addCase(CreateRoomThunk.pending, (state) => {
        state.roomId.status = "pending";
      })
      .addCase(CreateRoomThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data.push(action.payload)
        state.error = null;
      })
      .addCase(CreateRoomThunk.rejected, (state, action) => {
        state.roomId.status = "rejected";
        state.roomId.error = action.error.message;
      });
  },
});

// Selectores
export const getAllRoomsData = (state) => state.rooms.data;
export const getAllRoomsStatus = (state) => state.rooms.status;
export const getAllRoomsError = (state) => state.rooms.error;

export const getIdRoomsData = (state) => state.roomId.data;
export const getIdRoomsStatuse = (state) => state.roomId.status;

export default SliceRooms.reducer;
