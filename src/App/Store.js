import { configureStore } from "@reduxjs/toolkit";
import { SliceRooms } from "../Rooms/Features/RoomsSlice";
import { BookingsSlice } from "../Bookings/Features/BookingsSlice";

const Store = configureStore({
    reducer: {
        rooms: SliceRooms.reducer,
        roomId: SliceRooms.reducer,
        bookings: BookingsSlice.reducer,
        nameBookings: BookingsSlice.reducer,
    }
})

export default Store;