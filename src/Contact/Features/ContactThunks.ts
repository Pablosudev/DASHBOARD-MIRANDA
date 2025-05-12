import { createAsyncThunk } from "@reduxjs/toolkit";
import { Contacts } from "../Interfaces/ContactInterfaces";
import { RootState } from "../../App/Store";
import { GetAuthHeaders } from "../../UseContext/GetAuth";
import { updateContact } from "../Features/ContacSlice";

//THUNK ALL
export const ContactAllThunks = createAsyncThunk<Contacts[]>(
  "contacts/getContacts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://yj5nkhibw8.execute-api.eu-west-3.amazonaws.com/dev/api/v1/contacts", {
        method: "GET",
        headers: GetAuthHeaders(),
      });
      if (!response.ok) {
        return rejectWithValue("Error al cargar los datos de los contactos");
      }
      const contacts: Contacts[] = await response.json();
      return contacts;
    } catch (error) {
      return rejectWithValue(
        error.message || "Error al obtener los datos de los contactos"
      );
    }
  }
);

//THUNK ID
export const ContactIdThunks = createAsyncThunk<Contacts, number>(
  "contactId/getIdContact",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://yj5nkhibw8.execute-api.eu-west-3.amazonaws.com/dev/api/v1/contacts/${id}`,
        {
          method: "GET",
          headers: GetAuthHeaders(),
        }
      );
      if (!response.ok) {
        return rejectWithValue("Error al cargar los datos de los contactos");
      }
      const contactData: Contacts = await response.json();

      if (contactData) {
        return contactData;
      } else {
        return rejectWithValue("Contacto no encontrado");
      }
    } catch (error) {
      console.error("Error en el thunk:", error);
      return rejectWithValue(
        error.message || "Error al obtener los datos del contacto"
      );
    }
  }
);

//THUNK DELETE

export const ContactDeleteThunk = createAsyncThunk<{ id: number }, number>(
  "contact/deleteContact",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://yj5nkhibw8.execute-api.eu-west-3.amazonaws.com/dev/api/v1/contacts/${id}`,
        {
          method: "DELETE",
          headers: GetAuthHeaders(),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message || "Error al eliminar el contacto");
      }

      return { id };
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Error al eliminar el contacto"
      );
    }
  }
);

//THUNK ARCHIVE

export const ContactSaveThunk = createAsyncThunk(
  "contact/archiveContact",
  async (id: number, { getState, dispatch, rejectWithValue }) => {
    try {
      const state = getState() as RootState;
      const contact = state.contact.data.find((contact) => contact.id === id);

      if (!contact) {
        return rejectWithValue("Contacto no encontrado");
      }

      const response = await fetch(
        `https://yj5nkhibw8.execute-api.eu-west-3.amazonaws.com/dev/api/v1/contacts/${id}`,
        {
          method: "PUT",
          headers: GetAuthHeaders(),
          body: JSON.stringify({
            archived: !contact.archived,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message || "Error al archivar/desarchivar el contacto");
      }

      const updatedContact = await response.json();
      dispatch(updateContact(updatedContact));

      return updatedContact;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Error al archivar/desarchivar el contacto"
      );
    }
  }
);