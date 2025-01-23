import { configureStore } from "@reduxjs/toolkit";
import { SliceRooms } from "../Rooms/Features/RoomsSlice";

const Store = configureStore({
    reducer: {
        rooms: SliceRooms.reducer,
    }
})

export default Store;