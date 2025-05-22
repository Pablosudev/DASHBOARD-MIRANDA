import { createAsyncThunk } from "@reduxjs/toolkit";
import {BookingsInter} from "../Interfaces/BookingsInterfaces";
import { GetAuthHeaders } from "../../UseContext/GetAuth";
//THUNKS TODOS
export const AllBookingsThunk = createAsyncThunk<BookingsInter[]>(
  "bookings/getBookings",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://yj5nkhibw8.execute-api.eu-west-3.amazonaws.com/dev/api/v1/bookings", {
        method: "GET",
        headers: GetAuthHeaders(),
      });
      if (!response.ok) {
        return rejectWithValue("Error al cargar los datos");
      }
      const bookings: BookingsInter[] = await response.json();
      return bookings;
    } catch (error) {
      return rejectWithValue(
        error.message || "Error al obetener los datos de bookings"
      );
    }
  }
);

//THUNKS ID
export const BookingsIdThunk = createAsyncThunk<BookingsInter, string>(
  "bookingsId/getIdBookings",
  async (_id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://yj5nkhibw8.execute-api.eu-west-3.amazonaws.com/dev/api/v1/bookings/${_id}`,
        {
          method: "GET",
          headers: GetAuthHeaders(),
        }
      );

      if (!response.ok) {
        return rejectWithValue("Error al cargar los datos");
      }

      const bookingId: BookingsInter = await response.json();

      if (bookingId) {
        return bookingId;
      } else {
        return rejectWithValue("Bookings no encontrada");
      }
    } catch (error) {
      return rejectWithValue(
        error.message || "Error al obtener los datos de la reserva"
      );
    }
  }
);

//THUNK DELETE
export const DeleteBookingsThunk = createAsyncThunk<{ id: string }, number>(
  "bookings/deleteBookings",
  async (_id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://yj5nkhibw8.execute-api.eu-west-3.amazonaws.com/dev/api/v1/bookings/${_id}`,
        {
          method: "DELETE",
          headers: GetAuthHeaders(),
        }
      );
      if (!response.ok) {
        return rejectWithValue("Error al eliminar la reserva");
      }

      return { _id };
    } catch (error) {
      return rejectWithValue(error.message || "Error al eliminar la reserva");
    }
  }
);

//THUNK CREATE
export const CreateBookingThunk = createAsyncThunk<
  BookingsInter,
  BookingsInter
>("bookings/createBookings", async (newBooking, { rejectWithValue }) => {
  try {
    const response = await fetch("https://yj5nkhibw8.execute-api.eu-west-3.amazonaws.com/dev/api/v1/bookings", {
      method: "POST",
      headers: GetAuthHeaders(),
      body: JSON.stringify(newBooking),
    });
    if (!response.ok) {
      throw new Error("Error al crear la reserva");
    }
    const createdBooking = await response.json();
    return createdBooking;
  } catch (error) {
    return rejectWithValue("Error al crear la reserva");
  }
});
//THUNK EDIT
export const EditBookingThunk = createAsyncThunk<
  BookingsInter,
  { _id; updatedBooking: BookingsInter }
>(
  "booking/editBooking",
  async ({ _id, updatedBooking }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://yj5nkhibw8.execute-api.eu-west-3.amazonaws.com/dev/api/v1/bookings/${_id}`,
        {
          method: "PUT",
          headers: GetAuthHeaders(),
          body: JSON.stringify(updatedBooking),
        }
      );
      if (!response.ok) {
        return rejectWithValue("Error al cargar los datos");
      }
      const jsonData: BookingsInter[] = await response.json();
      const updatedData = jsonData.map((booking) =>
        booking._id === _id ? { ...booking, ...updatedBooking } : booking
      );
      const updatedBookingData = updatedData.find(
        (booking) => booking._id === _id
      );
      if (updatedBookingData) {
        return updatedBookingData;
      } else {
        return rejectWithValue("Error al editar la reserva");
      }
    } catch (error) {
      return rejectWithValue(error.message || "Error al editar la reserva");
    }
  }
);
