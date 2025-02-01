import { createAsyncThunk } from "@reduxjs/toolkit";


//THUNK ALL
export const ContactAllThunks = createAsyncThunk(
  "contact/getContact",
  async () => {
    try {
      const contact = await new Promise((resolve, reject) => {
        setTimeout(async () => {
          try {
            const response = await fetch("/Data/contact.json");
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
      return contact;
    } catch (error) {
      throw new Error("Error al obtener los datos de los contactos");
    }
  }
);

//THUNK ID
export const ContactIdThunks = createAsyncThunk(
  "contactId/getIdContact",
  async (id, { rejecWhitValue }) => {
    try{
        const contactId = await new Promise (( resolve, reject ) => {
            setTimeout(async () => {
                try{
                    const response = await fetch("/Data/contact.json");
                    if(!response.ok) {
                        reject("Error al cargar los datos de Contacto")
                    }
                    const jsonData = await response.json();
                    const contact = jsonData.find((contact) => contact.id === Number(id));

                    if(contact){
                        resolve(contact);
                    }else {
                        reject("Contacto no encontrado")
                    }
                } catch (error) {
                reject(error);
                }
            }, 200);
        });
        return contactId
    }   catch (error){
        console.error("Error en el thunk:" , error);
        return rejecWhitValue(
            error.message ||"Error al obtener los datos del contacto"
        );
    }
  }
);

//THUNK DELETE

export const ContactDeleteThunk = createAsyncThunk(
  "contact/deletecontact",
  async (id) => {
    try {
      const contactId = await new Promise((resolve, reject) => {
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

export const ContactEditThunks = createAsyncThunk(
  "contact/editContact",
  async ({ id, updatedcontact }, { rejectWithValue }) => {
    try {
      const contactId = await new Promise((resolve, reject) => {
        setTimeout(async () => {
          try {
           
            const response = await fetch("/Data/contact.json");
            if (!response.ok) {
              reject("Error al cargar los datos");
            }
            const jsonData = await response.json();
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
  async (id, { getState, rejectWithValue }) => {
    try {
      
      const state = getState();
      const contact = state.contact.data.find((contact) => contact.id === id);
      if (!contact) {
        return rejectWithValue("Contacto no encontrado");
      }

      
      const archivedContact = {
        ...contact,
        archived: true,  
      };

      
      const updatedContact = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(archivedContact);
        }, 200);
      });

      return updatedContact; 
    } catch (error) {
      return rejectWithValue("Error al archivar el contacto");
    }
  }
);



