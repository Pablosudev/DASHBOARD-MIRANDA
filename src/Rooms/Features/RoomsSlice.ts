import { createSlice } from "@reduxjs/toolkit";
import {
  RoomsThunk,
  IdRoomThunk,
  EditRoomThunk,
  DeleteRoomThunk,
  CreateRoomThunk,
} from "./RoomsThunk";
import { RoomsInter, RoomsState } from "../Interfaces/RoomsInterfaces";
import { RootState } from "../../App/Store";



const initialState: RoomsState = {
  status: "idle", 
  statusDelete: "idle",
  statusEdit: "idle",
  statusCreate: "idle",
  error: undefined,
  data: [],
  roomId: {
    status: "idle",
    statusDelete: "idle",
    statusEdit: "idle",
    statusCreate: "idle",
    error: undefined,
    data: undefined,
}
}


export const SliceRooms = createSlice({
  name: "rooms",
  initialState,
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
        state.error = undefined;
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
        state.roomId.error = undefined;
        
      })
      .addCase(IdRoomThunk.rejected, (state, action) => {
        state.roomId.status = "rejected";
        state.roomId.error = action.error.message;
      });

    // SLICE EDIT
      builder
        .addCase(EditRoomThunk.pending, (state) => {
          state.roomId.status = "pending";
          console.log("Editando la habitación...");
        })
        .addCase(EditRoomThunk.fulfilled, (state, action) => {
          state.roomId.status = "fulfilled";
          state.roomId.data = action.payload; 
    
          
          const index = state.data.findIndex((room) => room._id === action.payload._id);
          if (index !== -1) {
            state.data[index] = action.payload;
          }
          console.log(index)
          console.log("Habitación actualizada en el estado:", action.payload);
        })
        .addCase(EditRoomThunk.rejected, (state, action) => {
          state.roomId.status = "rejected";
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
            (room) => room._id !== action.payload.id
          );
          
          if (state.roomId.data && state.roomId.data._id === action.payload.id) {
            state.roomId.data = undefined;
          }

          state.error = undefined;
        })
        .addCase(DeleteRoomThunk.rejected, (state, action) => {
          state.roomId.statusDelete = "rejected";
          state.roomId.error = action.error.message;
        });
        

    //CreateRoomThunk Reducers
    builder
      .addCase(CreateRoomThunk.pending, (state) => {
        state.roomId.status = "pending";
      })
      .addCase(CreateRoomThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data.push(action.payload);
        state.error = undefined;
      })
      .addCase(CreateRoomThunk.rejected, (state, action) => {
        state.roomId.status = "rejected";
        state.roomId.error = action.error.message;
      });
  },
});

// Selectores
export const getAllRoomsData = (state: RootState): RoomsInter [] => state.rooms.data;
export const getAllRoomsStatus = (state: RootState): 'idle' | 'pending' | 'fulfilled' | 'rejected' => state.rooms.status;
export const getDeleteStatus = (state: RootState): 'idle' | 'pending' | 'fulfilled' | 'rejected'=> state.rooms.roomId.statusDelete
export const getIdRoomsData = (state: RootState): RoomsInter | undefined  => state.rooms.roomId.data;
export const getIdRoomsStatus = (state: RootState): 'idle' | 'pending' | 'fulfilled' | 'rejected' => state.rooms.roomId.status;
export default SliceRooms.reducer;
