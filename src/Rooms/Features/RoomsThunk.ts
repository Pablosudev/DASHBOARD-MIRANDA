import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { RoomsInter } from "../Interfaces/RoomsInterfaces";
import { GetAuthHeaders } from "../../UseContext/GetAuth";
//FETCH TODOS
export const RoomsThunk = createAsyncThunk<RoomsInter[]>(
  "rooms/getRooms",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://yj5nkhibw8.execute-api.eu-west-3.amazonaws.com/dev/api/v1/rooms", {
        method: "GET",
        headers: GetAuthHeaders(),
      });

      if (!response.ok) {
        return rejectWithValue("Error al cargar los datos");
      }
      const rooms: RoomsInter[] = await response.json();
      return rooms;
    } catch (error) {
      return rejectWithValue(
        error.message || "Error al obtener los datos de las habitaciones"
      );
    }
  }
);

//FETCH UNO
export const IdRoomThunk = createAsyncThunk<RoomsInter, string>(
  "roomId/getIdRoom",
  async (_id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://yj5nkhibw8.execute-api.eu-west-3.amazonaws.com/dev/api/v1/rooms/${_id}`, {
        method: "GET",
        headers: GetAuthHeaders(),
      });
      if (!response.ok) {
        return rejectWithValue("Error al cargar los datos");
      }
      const roomId: RoomsInter = await response.json();

      if (roomId) {
        return roomId;
      } else {
        return rejectWithValue("Habitación no encontrada");
      }
    } catch (error) {
      return rejectWithValue(
        error.message || "Error al obtener los datos de la habitación"
      );
    }
  }
);

//FETCH EDIT
export const EditRoomThunk = createAsyncThunk<
  RoomsInter,
  { _id: string; updatedRoom: RoomsInter }
>("room/editRoom", async ({ _id, updatedRoom }, { rejectWithValue }) => {
        try {
          const response = await fetch(`https://yj5nkhibw8.execute-api.eu-west-3.amazonaws.com/dev/api/v1/rooms/${_id}`,{
            method: "PUT",
      headers: GetAuthHeaders(),
      body: JSON.stringify(updatedRoom),
          });
          if (!response.ok) {
            return rejectWithValue("Error al cargar los datos de la habitación");
          }
          const updatedRoomData = await response.json();
          
          return updatedRoomData;
        } catch (error){
          return rejectWithValue(error.message || "Error al editar la habitación")
        }
      });
//FETCH DELETE
export const DeleteRoomThunk = createAsyncThunk<{ _id: string }, string>(
  "room/deleteRoom",
  async (_id: string, {rejectWithValue}) => {

          try {
            const response = await fetch(`https://yj5nkhibw8.execute-api.eu-west-3.amazonaws.com/dev/api/v1/rooms/${_id}`, {
              method: "DELETE",
              headers: GetAuthHeaders(),
            });

            if (!response.ok) {
              return rejectWithValue("Error al eliminar la habitación");
            }

            return { _id };
          } catch (error) {
            return rejectWithValue(error.message ||error.message || "Error desconocido al eliminar la habitación");
          }
        }
      );
      
//FETCH CREATE
export const CreateRoomThunk = createAsyncThunk<RoomsInter, RoomsInter>(
  "room/createRoom",
  async (newRoom, { rejectWithValue }) => {
          try {
            const response = await fetch("https://yj5nkhibw8.execute-api.eu-west-3.amazonaws.com/dev/api/v1/rooms" , {
              method: "POST",
        headers: GetAuthHeaders(),
        body: JSON.stringify(newRoom),
      });
      if (!response.ok) {
        throw new Error("Error al crear la habitación");
      }
      const createdRoom = await response.json();
      return createdRoom;
          } catch (error) {
            return rejectWithValue("Error al crear la habitación");
          }
        }
      );

  