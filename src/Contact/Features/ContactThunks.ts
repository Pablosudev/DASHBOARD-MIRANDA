import { createAsyncThunk } from "@reduxjs/toolkit";
import { Contacts } from "../Interfaces/ContactInterfaces";
import { RootState } from "../../App/Store";


//THUNK ALL
export const ContactAllThunks = createAsyncThunk<Contacts [], string | undefined>(
  "contact/getContact",
  async () => {
    try {
      const contact = await new Promise<Contacts []>((resolve, reject) => {
        setTimeout(async () => {
          try {
            const response = await fetch("/Data/contact.json");
            if (!response.ok) {
              reject("Error al cargar los datos");
            }
            const json: Contacts [] = await response.json();
            resolve(json);
          } catch (error) {
            reject(error);
          }
        }, 200);
      });
      return contact;
    } catch (error) {
      throw new Error("Error al obtener los datos de los contactos");
    }
  }
);

//THUNK ID
export const ContactIdThunks = createAsyncThunk<Contacts , number>(
  "contactId/getIdContact",
  async (id: number , { rejectWithValue }) => {
    try {
      const contactId = await new Promise<Contacts>((resolve, reject) => {
        setTimeout(async () => {
          try {
            
            

            const response = await fetch("/Data/contact.json");
            if (!response.ok) {
              reject("Error al cargar los datos de Contacto");
            }

            
            const jsonData: Contacts [] = await response.json();
            
            
            
            const contact = jsonData.find((contact) => contact.id === (1) );
            

            if (contact) {
              resolve(contact); 
            } else {
              reject("Contacto no encontrado"); 
            }
          } catch (error) {
            reject(error.message || "Error en la consulta");
          }
        }, 200); 
      });

      return contactId; 

    } catch (error) {
      return rejectWithValue(error.message || "Error al obtener los datos del contacto");
    }
  }
);

//THUNK DELETE

export const ContactDeleteThunk = createAsyncThunk<{id: number}, number >(
  "contact/deletecontact",
  async (id: number ) => {
    try {
      const contactId = await new Promise<{id : number}>((resolve, reject) => {
        setTimeout(async () => {
          try {
            const response = await fetch(`/Data/contact.json?id=${id}`, {method: 'DELETE'});
              
            if (!response.ok) {
              reject("Error al eliminar la habitación");
            }

            resolve({id});
          } catch (error) {
            reject(error);
          }
        }, 200);
      });
      return contactId;
    } catch (error) {
      throw new Error("Error al eliminar la habitación");
    }
  }
);

// THUNK EDIT

export const ContactEditThunks = createAsyncThunk<Contacts, {id: number, updatedcontact: Contacts}>(
  "contact/editContact",
  async ({ id, updatedcontact }, { rejectWithValue }) => {
    try {
      const contactId = await new Promise<Contacts>((resolve, reject) => {
        setTimeout(async () => {
          try {
           
            const response = await fetch("/Data/contact.json");
            if (!response.ok) {
              reject("Error al cargar los datos");
            }
            const jsonData: Contacts [] = await response.json();
            const updatedData = jsonData.map((contact) =>
              contact.id === Number(id) ? { ...contact, ...updatedcontact } : contact
            );
            const updatedcontactData = updatedData.find(
              (contact) => contact.id === Number(id)
            );
            if (updatedcontactData) {
              
              resolve(updatedcontactData);
            } else {
    
              reject("Usuario no encontrada");
            }
          } catch (error) {
            
            reject(error);
          }
        }, 200);
      });
      return contactId;
    } catch (error) {
      
      return rejectWithValue(error.message || "Error al editar el usuario");
    }
  }
);
//THUNK ARCHIVE

export const ContactSaveThunk = createAsyncThunk(
  "contact/archiveContact",
  async (id: number, { getState, rejectWithValue }) => {
    try {
      
      const state = getState() as RootState;
      const contact = state.contact.data.find((contact) => contact.id === id );
      if (!contact) {
        return rejectWithValue("Contacto no encontrado");
      }

      
      const updatedContact = {
        ...contact,
        archived: !contact.archived,  
      };
      await new Promise((resolve => {
        setTimeout(() => {
          resolve(updatedContact)
        }, 200)
      }))

      return updatedContact; 
    } catch (error) {
      return rejectWithValue("Error al archivar el contacto");
    }
  }
);




