import { createAsyncThunk } from "@reduxjs/toolkit";

export const AllBookingsThunk = createAsyncThunk(
  "bookings/getBookings",
  async () => {
    try {
      const bookings = await new Promise((resolve, reject) => {
        setTimeout(async () => {
          try {
            const response = await fetch("/Data/bookings.json");
            if (!response.ok) {
              reject("Error al cargar los datos");
            }
            const json = await response.json();
            resolve(json);
          } catch (error) {
            reject(error);
          }
        }, 200);
      });
      return bookings;
    } catch (error) {
      throw new Error("Error al obtener los datos de las habitaciones");
    }
  }
);

export const NameBookingsThunk = createAsyncThunk(
  "NameBookings/getNameBookings",
  async (full_name) => {
    try {
      const nameBookings = await new Promise((resolve, reject) => {
        setTimeout(async () => {
          try {
            const response = await fetch(`/Data/bookings.json/${full_name}`);

            if (!response.ok) {
              reject("Error al cargar los datos");
            }

            const json = await response.json();
            resolve(json);
          } catch (error) {
            reject(error);
          }
        }, 200);
      });
      return nameBookings;
    } catch (error) {
      throw new Error("Error al obtener los datos de las habitaciones");
    }
  }
);
