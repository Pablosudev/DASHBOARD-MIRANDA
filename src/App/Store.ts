import { configureStore } from "@reduxjs/toolkit";
import { SliceRooms } from "../Rooms/Features/RoomsSlice";
import { BookingsSlice } from "../Bookings/Features/BookingsSlice";
import { UsersSlice } from "../Users/Features/UsersSlice";
import { ContactSlice } from "../Contact/Features/ContacSlice";


const Store = configureStore({
    reducer: {
        rooms: SliceRooms.reducer,
        roomId: SliceRooms.reducer,
        bookings: BookingsSlice.reducer,
        nameBookings: BookingsSlice.reducer,
        users: UsersSlice.reducer,
        contact: ContactSlice.reducer,
    }
})


export type AppStore = typeof Store
export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch;
export default Store;