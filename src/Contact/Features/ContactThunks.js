import { createAsyncThunk } from "@reduxjs/toolkit";

export const ContactThunks = createAsyncThunk(
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

export const ContactDeleteThunks = () => {};

export const ContactEditThunks = () => {};

export const ContactCreateThunks = () => {};
