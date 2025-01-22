export const RoomsThunk = createAsyncThunk("rooms/getRooms", async () => {
    try {
      
      const rooms = await new Promise((resolve, reject) => {
        setTimeout(async () => {
          try {
            const response = await fetch("../Data/Components/rooms.json");
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
  
      return rooms;
    } catch (error) {
      console.log(error);
      throw new Error("Error al obtener los datos de las habitaciones");
    }
  });