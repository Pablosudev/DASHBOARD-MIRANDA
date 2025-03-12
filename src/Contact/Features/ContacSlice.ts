import { createSlice } from "@reduxjs/toolkit";
import {
  ContactAllThunks,
  ContactDeleteThunk,
  ContactIdThunks,
  ContactSaveThunk,
} from "./ContactThunks";
import { Contacts, ContactState } from "../Interfaces/ContactInterfaces";
import { RootState } from "../../App/Store";



const initialState: ContactState =  {
  status: 'idle',
  statusDelete: 'idle',
  error: undefined,
  data: [],
  contactId: {
    status: 'idle',
    statusDelete: 'idle',
    data: null,
    error: undefined,
  }
}

export const ContactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    updateContact: (state, action) => {
      const updatedContact = action.payload;
      const contactIndex = state.data.findIndex(
        (contact) => contact.id === updatedContact._id
      );
      if (contactIndex !== -1) {
        state.data[contactIndex] = updatedContact;
      }
    },
  },
  extraReducers: (builder) => {
    //SLICE THUNK
    builder
      .addCase(ContactAllThunks.pending, (state) => {
        state.status = "pending";
      })
      .addCase(ContactAllThunks.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
        state.error = undefined;
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
        state.contactId.error = undefined;
       
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
          state.contactId.data.id === action.payload.id
        ) {
          state.contactId.data = null;
        }

        state.error = undefined;
      });

    //SLICE ARCHIVE
    builder
      .addCase(ContactSaveThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(ContactSaveThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
       
        const updatedContact = action.payload;
        const contactIndex = state.data.findIndex(
          (contact) => contact.id === updatedContact._id
        );
        if (contactIndex !== -1) {
          state.data[contactIndex] = updatedContact;
        }
      })
      .addCase(ContactSaveThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
    }
});


export const AllDataContact = (state: RootState): Contacts[] => state.contact.data;
export const AllStatusContact = (state: RootState): 'idle' | 'pending' | 'fulfilled' | 'rejected' => state.contact.status;
export const ContactId = (state: RootState): Contacts | null => state.contact.contactId.data;

export const { updateContact } = ContactSlice.actions;
export default ContactSlice.reducer;
