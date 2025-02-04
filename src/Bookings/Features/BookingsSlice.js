import { createSlice } from "@reduxjs/toolkit";
import { AllBookingsThunk, BookingsIdThunk, DeleteBookingsThunk } from "./BookingsThunk";


export const BookingsSlice = createSlice({
  name: "bookings",
  initialState: {
    status: "idle",
    error: null,
    data: [],
    BookingsId: {
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
      //SLICE ID
      builder
        .addCase(BookingsIdThunk.pending, (state) => {
          state.status = "pending";
          console.log("Estado NameBookings en pending...");
        })
        .addCase(BookingsIdThunk.fulfilled, (state, action) => {
          state.status = "fulfilled"
          state.data = action.payload;
          state.error = null;
        })
        .addCase(BookingsIdThunk.rejected, (state, action) => {
          state.BookingsId.status = "rejected"
          state.BookingsId.error = action.error.message;
        });

        //SLICE DELETE
        builder
        .addCase(DeleteBookingsThunk.pending, (state) => {
                  state.BookingsId.statusDelete = "pending";
                })
                .addCase(DeleteBookingsThunk.fulfilled, (state, action) => {
                  state.statusDelete = "fulfilled";
                 
                  state.data = state.data.filter(
                    (bookings) => bookings.id !== action.payload.id
                  );
                  
                  if (state.BookingsId.data && state.BookingsId.data.id === action.payload) {
                    state.BookingsId.data = null;
                  }
        
                  state.error = null;
                })
                .addCase(DeleteBookingsThunk.rejected, (state, action) => {
                  state.BookingsId.statusDelete = "rejected";
                  state.BookingsId.error = action.error.message;
                });
  },
});



//Selectores
export const getAllBookingsData = (state) => state.bookings?.data || []; 
export const getAllBookingsStatus = (state) => state.bookings?.status || [];
export const getBookingsId = (state) => state.bookings.BookingsId.data

export default BookingsSlice.reducer;