import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  BookingsEditInter,
  BookingsInter,
} from "../Interfaces/BookingsInterfaces";

//THUNKS TODOS
export const AllBookingsThunk = createAsyncThunk<BookingsInter[], string>(
  "bookings/getBookings",
  async (_, {rejectWithValue}) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/bookings", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkNoYXJsZXNfU2F3YXluMTRAZ21haWwuY29tIiwiaWF0IjoxNzQwNDU4MTEwLCJleHAiOjE3NzIwMTU3MTB9.7QDNSNaftYFVV8QNiXcKYYN9jdHUHOt13eQpSW-CorE`,
        },
      });
      if (!response.ok) {
        return rejectWithValue("Error al cargar los datos");
      }
      const bookings: BookingsInter[] = await response.json();
      return (bookings);
    } catch (error) {
      return rejectWithValue(error.message || "Error al obetener los datos de bookings");
    }
  }
);

//THUNKS ID
export const BookingsIdThunk = createAsyncThunk<BookingsInter, string>(
  "bookingsId/getIdBookings",
  async (id, { rejectWithValue }) => {
          try {
            const response = await fetch(`http://localhost:3001/api/v1/rooms/${id}`, {
              method: "GET",
              headers:{
                "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkNoYXJsZXNfU2F3YXluMTRAZ21haWwuY29tIiwiaWF0IjoxNzQwNDU4MTEwLCJleHAiOjE3NzIwMTU3MTB9.7QDNSNaftYFVV8QNiXcKYYN9jdHUHOt13eQpSW-CorE`
              }
            });

            if (!response.ok) {
              return rejectWithValue("Error al cargar los datos");
            }

            const bookingId: BookingsInter = await response.json();
            

            if (bookingId) {
              return (bookingId);
            } else {
              return rejectWithValue ("Bookings no encontrada");
            }
          } catch (error) {
            return rejectWithValue(error.message || "Error al obtener los datos de la reserva");
          }
        }
      );
      

//THUNK DELETE
export const DeleteBookingsThunk = createAsyncThunk<{ id: number }, number>(
  "bookings/deleteBookings",
  async (id) => {
    try {
      const BookingsId = await new Promise<{ id: number }>(
        (resolve, reject) => {
          setTimeout(async () => {
            try {
              const response = await fetch(`/Data/bookings.json?id=${id}`, {
                method: "DELETE",
              });
              if (!response.ok) {
                reject("Error al eliminar la reserva");
              }

              resolve({ id });
            } catch (error) {
              reject(error);
            }
          }, 200);
        }
      );
      return BookingsId;
    } catch (error) {
      throw new Error("Error al eliminar la reserva");
    }
  }
);
//THUNK CREATE
export const CreateBookingThunk = createAsyncThunk<
  BookingsInter,
  BookingsInter
>("bookings/createBookings", async (newBooking, { rejectWithValue }) => {
  try {
    const bookingId = await new Promise<BookingsInter>((resolve, reject) => {
      setTimeout(() => {
        try {
          const newBookingWithId = {
            ...newBooking,
            id: Date.now(),
          };

          resolve(newBookingWithId);
        } catch (error) {
          reject("Error al crear la reserva");
        }
      }, 200);
    });

    return bookingId;
  } catch (error) {
    return rejectWithValue(error);
  }
});
//THUNK EDIT
export const EditBookingThunk = createAsyncThunk<
  BookingsInter,
  { id: number; updatedBooking: BookingsEditInter }
>(
  "booking/editBooking",
  async ({ id, updatedBooking }, { rejectWithValue }) => {
    try {
      const bookingId = await new Promise<BookingsInter>((resolve, reject) => {
        setTimeout(async () => {
          try {
            const response = await fetch("/Data/bookings.json");
            if (!response.ok) {
              reject("Error al cargar los datos");
            }
            const jsonData: BookingsInter[] = await response.json();
            const updatedData = jsonData.map((booking) =>
              booking.id === Number(id)
                ? { ...booking, ...updatedBooking }
                : booking
            );
            const updatedBookingData = updatedData.find(
              (booking) => booking.id === Number(id)
            );
            if (updatedBookingData) {
              resolve(updatedBookingData);
            } else {
              reject("Reserva no encontrada");
            }
          } catch (error) {
            reject(error);
          }
        }, 200);
      });
      return bookingId;
    } catch (error) {
      return rejectWithValue(error.message || "Error al editar la reserva");
    }
  }
);
