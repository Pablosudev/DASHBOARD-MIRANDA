import { createAsyncThunk } from "@reduxjs/toolkit";
import { Contacts } from "../Interfaces/ContactInterfaces";
import { RootState } from "../../App/Store";

//THUNK ALL
export const ContactAllThunks = createAsyncThunk<Contacts[], string | undefined>(
  "contacts/getContacts",
  async (_, {rejectWithValue}) => {
    
          try {
            const response = await fetch("http://localhost:3001/api/v1/contacts", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkNoYXJsZXNfU2F3YXluMTRAZ21haWwuY29tIiwiaWF0IjoxNzQwNDU4MTEwLCJleHAiOjE3NzIwMTU3MTB9.7QDNSNaftYFVV8QNiXcKYYN9jdHUHOt13eQpSW-CorE`,
              },
            });
            if (!response.ok) {
              return rejectWithValue("Error al cargar los datos de los contactos");
            }
            const contacts: Contacts[] = await response.json();
            return contacts;
          } catch (error) {
            return rejectWithValue(error.message || "Error al obtener los datos de los contactos");
          }
        }
      );

//THUNK ID
export const ContactIdThunks = createAsyncThunk<Contacts, string>(
  "contactId/getIdContact",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:3001/api/v1/contacts/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkNoYXJsZXNfU2F3YXluMTRAZ21haWwuY29tIiwiaWF0IjoxNzQwNDU4MTEwLCJleHAiOjE3NzIwMTU3MTB9.7QDNSNaftYFVV8QNiXcKYYN9jdHUHOt13eQpSW-CorE`,
        },
      });
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

export const ContactDeleteThunk = createAsyncThunk<{ id: string }, string>(
  "contact/deleteContact",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/v1/contacts/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkNoYXJsZXNfU2F3YXluMTRAZ21haWwuY29tIiwiaWF0IjoxNzQwNDU4MTEwLCJleHAiOjE3NzIwMTU3MTB9.7QDNSNaftYFVV8QNiXcKYYN9jdHUHOt13eQpSW-CorE`, 
          },
        }
      );

      if (!response.ok) {
        return rejectWithValue("Error al eliminar el contacto");
      }

      return { id };
    } catch (error) {
      return rejectWithValue(error.message || "Error  al eliminar el contacto");
    }
  }
);

// THUNK EDIT

// export const ContactEditThunks = createAsyncThunk<
//   Contacts,
//   { id: number; updatedcontact: Contacts }
// >(
//   "contact/editContact",
//   async ({ id, updatedcontact }, { rejectWithValue }) => {
//     try {
//       const contactId = await new Promise<Contacts>((resolve, reject) => {
//         setTimeout(async () => {
//           try {
//             const response = await fetch("/Data/contact.json");
//             if (!response.ok) {
//               reject("Error al cargar los datos");
//             }
//             const jsonData: Contacts[] = await response.json();
//             const updatedData = jsonData.map((contact) =>
//               contact.id === Number(id)
//                 ? { ...contact, ...updatedcontact }
//                 : contact
//             );
//             const updatedcontactData = updatedData.find(
//               (contact) => contact.id === Number(id)
//             );
//             if (updatedcontactData) {
//               resolve(updatedcontactData);
//             } else {
//               reject("Usuario no encontrada");
//             }
//           } catch (error) {
//             reject(error);
//           }
//         }, 200);
//       });
//       return contactId;
//     } catch (error) {
//       return rejectWithValue(error.message || "Error al editar el usuario");
//     }
//   }
// );
//THUNK ARCHIVE

export const ContactSaveThunk = createAsyncThunk(
  "contact/archiveContact",
  async (id: string, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootState;
      const contact = state.contact.data.find((contact) => contact._id === id);
      if (!contact) {
        return rejectWithValue("Contacto no encontrado");
      }

      const updatedContact = {
        ...contact,
        archived: !contact.archived,
      };
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(updatedContact);
        }, 200);
      });

      return updatedContact;
    } catch (error) {
      return rejectWithValue("Error al archivar el contacto");
    }
  }
);
