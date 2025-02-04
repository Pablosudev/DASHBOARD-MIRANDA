import { createSlice } from "@reduxjs/toolkit";
import {
  AllBookingsThunk,
  BookingsIdThunk,
  DeleteBookingsThunk,
  EditBookingThunk,
} from "./BookingsThunk";

export const BookingsSlice = createSlice({
  name: "bookings",
  initialState: {
    status: "idle",
    statusDelete: "idle",
    error: null,
    data: [],
    bookingsId: {
      status: "idle",
      error: null,
      data: null,
    },
  },
  extraReducers: (builder) => {
    //AllBookingsThunk
    builder
      .addCase(AllBookingsThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(AllBookingsThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
        state.error = null;
      })
      .addCase(AllBookingsThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
    //SLICE ID
    builder
      .addCase(BookingsIdThunk.pending, (state) => {
        state.bookingsId.status = "pending";
      })
      .addCase(BookingsIdThunk.fulfilled, (state, action) => {
        state.bookingsId.status = "fulfilled";
        state.bookingsId.data = action.payload;
        state.bookingsId.error = null;
      })
      .addCase(BookingsIdThunk.rejected, (state, action) => {
        state.bookingsId.status = "rejected";
        state.bookingsId.error = action.error.message;
      });

    //SLICE DELETE
    builder
      .addCase(DeleteBookingsThunk.pending, (state) => {
        state.bookingsId.statusDelete = "pending";
      })
      .addCase(DeleteBookingsThunk.fulfilled, (state, action) => {
        state.statusDelete = "fulfilled";

        state.data = state.data.filter(
          (bookings) => bookings.id !== action.payload.id
        );

        if (
          state.bookingsId.data &&
          state.bookingsId.data.id === action.payload
        ) {
          state.bookingsId.data = null;
        }

        state.error = null;
      })
      .addCase(DeleteBookingsThunk.rejected, (state, action) => {
        state.bookingsId.statusDelete = "rejected";
        state.bookingsId.error = action.error.message;
      });

    //SLICE EDIT
    builder
      .addCase(EditBookingThunk.pending, (state) => {
        state.bookingsId.status = "pending";
        console.log("Editando la habitación...");
      })
      .addCase(EditBookingThunk.fulfilled, (state, action) => {
        state.bookingsId.status = "fulfilled";
        state.bookingsId.data = action.payload; 

      
        const index = state.data.findIndex(
          (booking) => booking.id === action.payload.id
        );
        if (index !== -1) {
          state.data[index] = action.payload;
        }
        console.log(index);
        console.log("Reserva actualizada en el estado:", action.payload);
      })
      .addCase(EditBookingThunk.rejected, (state, action) => {
        state.bookingsId.status = "rejected";
        state.bookingsId.error = action.error.message;
        console.error("Error al editar la habitación:", action.error);
      });
  },
});

//Selectores
export const getAllBookingsData = (state) => state.bookings.data;
export const getAllBookingsStatus = (state) => state.bookings.status;
export const getBookingsId = (state) => state.bookings.bookingsId.data;
export const getStatusId = (state) => state.bookings.bookingsId.status;
export default BookingsSlice.reducer;
