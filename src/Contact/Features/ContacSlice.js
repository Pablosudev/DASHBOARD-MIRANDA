import { createSlice } from "@reduxjs/toolkit";
import {
  ContactAllThunks,
  ContactDeleteThunk,
  ContactIdThunks,
  ContactSaveThunk,
} from "./ContactThunks";

export const ContactSlice = createSlice({
  name: "contact",
  initialState: {
    status: "idle",
    error: null,
    data: [],
    contactId: {
      status: "idle",
      data: null,
      error: null,
    },
  },
  extraReducers: (builder) => {
    //contactsThunk
    builder
      .addCase(ContactAllThunks.pending, (state) => {
        state.status = "pending";
      })
      .addCase(ContactAllThunks.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
        state.error = null;
      })
      .addCase(ContactAllThunks.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
    //SLICE ID
    builder
      .addCase(ContactIdThunks.pending, (state) => {
        state.contactId.status = "pending";
      })
      .addCase(ContactIdThunks.fulfilled, (state, action) => {
        state.contactId.status = "fulfilled";
        state.contactId.data = action.payload;
        state.contactId.error = null;
        console.log("Datos de la habitación cargados:", action.payload);
      })
      .addCase(ContactIdThunks.rejected, (state, action) => {
        state.contactId.status = "rejected";
        state.contactId.error = action.error.message;
      });
    //SLICE DELETE
    builder
      .addCase(ContactDeleteThunk.pending, (state) => {
        state.contactId.statusDelete = "pending";
      })
      .addCase(ContactDeleteThunk.fulfilled, (state, action) => {
        state.statusDelete = "fulfilled";

        state.data = state.data.filter(
          (contacts) => contacts.id !== action.payload.id
        );

        if (
          state.contactId.data &&
          state.contactId.data.id === action.payload
        ) {
          state.contactId.data = null;
        }

        state.error = null;
      });

    //SLICE ARCHIVE
    builder
      .addCase(ContactSaveThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(ContactSaveThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Aquí actualizamos el contacto archivado en el estado
        const updatedContact = action.payload;
        const contactIndex = state.data.findIndex(
          (contact) => contact.id === updatedContact.id
        );
        if (contactIndex !== -1) {
          state.data[contactIndex] = updatedContact;
        }
      })
      .addCase(ContactSaveThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const AllDataContact = (state) => state.contact.data;
export const AllStatusContact = (state) => state.contact.status;
export const ContactId = (state) => state.contact.contactId.data;

export default ContactSlice.reducer;
