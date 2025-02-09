import { createAsyncThunk } from "@reduxjs/toolkit";



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
      throw new Error("Error al obtener los datos de las reservas");
    }
  }
);


//THUNKS ID
export const BookingsIdThunk = createAsyncThunk(
  "bookingsId/getIdBookings",
  async (id, {rejectWithValue}) => {
    try {
      const bookingsId = await new Promise((resolve, reject) => {
        setTimeout(async () => {
          try {
            const response = await fetch("/Data/bookings.json");

            if (!response.ok) {
              reject("Error al cargar los datos");
            }

            const jsonData = await response.json();
            const bookings = jsonData.find((bookings) => bookings.id === Number(id));

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
      return bookingsId;
    } catch (error) {
      console.log("Error al obtener los datos de BookingsID");
      return rejectWithValue(
        error.message ||"Error al obtener los datos de BookingsID"
      )
    }
  }
);

//THUNK DELETE
export const DeleteBookingsThunk = createAsyncThunk("bookings/deleteBookings",
  async (id) => {
    try {
      const BookingsId = await new Promise ((resolve,reject) => {
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
      return BookingsId
    } catch (error) {
      throw new Error ("Error al eliminar la reserva");
    }
  }
);
//THUNK CREATE
export const CreateBookingThunk = createAsyncThunk(
  "bookings/createBookings",
  async (newBooking, { rejectWithValue }) => {
    try {
      const bookingId = await new Promise((resolve, reject) => {
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
  }
);
//THUNK EDIT
export const EditBookingThunk = createAsyncThunk(
  "booking/editBooking",
  async ({ id, updatedBooking }, { rejectWithValue }) => {
    try {
      const bookingId = await new Promise((resolve, reject) => {
        setTimeout(async () => {
          try {
           
            const response = await fetch("/Data/bookings.json");
            if (!response.ok) {
              reject("Error al cargar los datos");
            }
            const jsonData = await response.json();
            const updatedData = jsonData.map((booking) =>
              booking.id === Number(id) ? { ...booking, ...updatedBooking } : booking
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

