import { createAsyncThunk } from "@reduxjs/toolkit";
import { PiBookBookmarkThin } from "react-icons/pi";


//THUNKS TODOS
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


//THUNKS ID
export const BookingsIdThunk = createAsyncThunk(
  "BookingsId/getNameBookings",
  async (id, {rejectWithValue}) => {
    try {
      const BookingsId = await new Promise((resolve, reject) => {
        setTimeout(async () => {
          try {
            const response = await fetch(`/Data/bookings.json/`);

            if (!response.ok) {
              reject("Error al cargar los datos");
            }

            const jsonData = await response.json();
            const bookings = jsonData.find((bookings) => bookings.id);

            if (bookings) {
              resolve(bookings);
            } else {
              reject("Bookings no encontrada");
            }
          } catch (error) {
            reject(error);
          }
        }, 200);
      });
      return BookingsId;
    } catch (error) {
      console.log("Error al obtener los datos de Bookings");
      return rejectWithValue(
        error.message ||"Error al obtener los datos de Bookings"
      )
    }
  }
);

//THUNK DELETE
export const DeleteBookingsThunk = createAsyncThunk("bookings/deleteBookings",
  async (id) => {
    try {
      const bookingsId = await new Promise ((resolve,reject) => {
        setTimeout(async() => {
          try{
            const response = await fetch(`/Data/bookings.json?id=${id}`,
            {method: "DELETE"})
            if (!response.ok){
              reject("Error al eliminar la reserva");
            }
            
            resolve({id});
          } catch (error) {
            reject(error);
          }
        }, 200)
      })
      return bookingsId
    } catch (error) {
      throw new Error ("Error al eliminar la habitación");
    }
  }
);

