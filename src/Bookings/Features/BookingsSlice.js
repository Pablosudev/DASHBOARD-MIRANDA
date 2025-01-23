import { createSlice } from "@reduxjs/toolkit";
import { AllBookingsThunk, NameBookingsThunk } from "./BookingsThunk";
import { NameBooking } from "../Components/BookingsDetails";

export const BookingsSlice = createSlice({
  name: "bookings",
  initialState: {
    status: "idle",
    error: null,
    data: [],
    nameBookings: {
      status: "idle",
      error: null,
      data: {},
    },
  },
  extraReducers: (builder) => {
    //AllBookingsThunk
    builder
      .addCase(AllBookingsThunk.pending, (state) => {
        state.status = "pending";
        console.log("Estado Bookings en pending...");
      })
      .addCase(AllBookingsThunk.rejected, (state,action) => {
        console.log("Estado Rooms en rejected...");
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(AllBookingsThunk.fulfilled, (state, action) => {
        console.log("Estado Bookings en fulfilled...");
        state.status = "fulfilled";
        state.data = action.payload;
        state.error = null;
      });

      builder
        .addCase(NameBookingsThunk.pending, (state) => {
          state.status = "pending";
          console.log("Estado NameBookings en pending...");
        })
        .addCase(NameBookingsThunk.fulfilled, (state, action) => {
          state.status = "fulfilled"
          state.data = action.payload;
          state.error = null;
        })
        .addCase(NameBookingsThunk.rejected, (state, action) => {
          
        })
  },
});



//Selectores
export const getAllBookingsData = (state) => state.bookings?.data || []; 
export const getAllBookingsStatus = (state) => state.bookings?.status || [];
export const getAllBookingsError = (state) => state.bookings.error;

export default BookingsSlice.reducer;