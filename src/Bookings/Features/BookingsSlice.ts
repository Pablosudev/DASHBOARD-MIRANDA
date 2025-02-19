import { createSlice } from "@reduxjs/toolkit";
import {
  AllBookingsThunk,
  BookingsIdThunk,
  CreateBookingThunk,
  DeleteBookingsThunk,
  EditBookingThunk,
} from "./BookingsThunk";
import { BookingsInter, BookingsState } from "../Interfaces/BookingsInterfaces";
import { RootState } from "../../App/Store";

const initialState: BookingsState = {
  status: "idle",
  statusDelete: "idle",
  error: undefined,
  data: [],
  bookingsId: {
    status: "idle",
    statusDelete: "idle",
    error: undefined,
    data: null,
  },
};

export const BookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //AllBookingsThunk
    builder
      .addCase(AllBookingsThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(AllBookingsThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
        state.error = undefined;
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
        state.bookingsId.error = undefined;
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
          state.bookingsId.data.id === action.payload.id
        ) {
          state.bookingsId.data = null;
        }

        state.error = undefined;
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

    //SLICE CREATE
    builder
      .addCase(CreateBookingThunk.pending, (state) => {
        state.bookingsId.status = "pending";
      })
      .addCase(CreateBookingThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data.push(action.payload);
        state.error = undefined;
      })
      .addCase(CreateBookingThunk.rejected, (state, action) => {
        state.bookingsId.status = "rejected";
        state.bookingsId.error = action.error.message;
      });
  },
});

//Selectores
export const getAllBookingsData = (state: RootState): BookingsInter[] =>
  state.bookings.data;
export const getAllBookingsStatus = (
  state: RootState
): "idle" | "pending" | "fulfilled" | "rejected" => state.bookings.status;
export const getBookingsId = (state: RootState): BookingsInter | null =>
  state.bookings.bookingsId.data;
export const getStatusId = (
  state: RootState
): "idle" | "pending" | "fulfilled" | "rejected" =>
  state.bookings.bookingsId.status;
export default BookingsSlice.reducer;
