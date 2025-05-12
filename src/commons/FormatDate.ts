const FormatDate = (date: any) => {
    if (date instanceof Date) {
      return date.toISOString(); 
    }
    if (typeof date === "string") {
      
      if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(date)) {
        return date; 
      }
      
      const parsedDate = new Date(date);
      if (isNaN(parsedDate.getTime())) {
        throw new Error("Formato de fecha no válido");
      }
      return parsedDate.toISOString();
    }
    throw new Error("Formato de fecha no válido");
  };