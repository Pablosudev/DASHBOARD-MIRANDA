export interface RoomsInter {
<<<<<<< HEAD
  image_url: string;
=======
>>>>>>> 20e8c94a76ff30b63110851212c9fe8cc4b6849c
  room_number: number;
  id: number;
  room_price: number;
  room_offer: number;
  status: string;
  room_type: string;
<<<<<<< HEAD
  amenities: string[];
  room_discount: number;
  room_description: string;
=======
  amenities: string;
  room_discount: number ,
  room_description: string,
>>>>>>> 20e8c94a76ff30b63110851212c9fe8cc4b6849c
}
export interface RoomsState {
  status: "idle" | "fulfilled" | "rejected" | "pending";
  statusDelete: "idle" | "fulfilled" | "rejected" | "pending";
  statusEdit: "idle" | "fulfilled" | "rejected" | "pending";
  statusCreate: "idle" | "fulfilled" | "rejected" | "pending";
  error: string | undefined;
<<<<<<< HEAD
  data: RoomsInter[];
=======
  data: RoomsInter [];
>>>>>>> 20e8c94a76ff30b63110851212c9fe8cc4b6849c
  roomId: {
    status: "idle" | "fulfilled" | "rejected" | "pending";
    statusDelete: "idle" | "fulfilled" | "rejected" | "pending";
    statusEdit: "idle" | "fulfilled" | "rejected" | "pending";
    statusCreate: "idle" | "fulfilled" | "rejected" | "pending";
    error: string | undefined;
    data: RoomsInter | undefined;
  };
}
export interface RoomsEdits {
<<<<<<< HEAD
  room_type: string;
  room_number: number;
  room_price: number;
  room_offer: number;
  room_discount: number;
  room_description: string;
}
export interface RoomCreate {
  room_type: string;
  room_number: number;
  room_price: number;
  room_offer: number;
  room_discount: number;
  room_description: string;
  status: string;
  amenities: string[];
  id: number,
  image_url: string,
}
=======
    room_type:string,
    room_number: number,
    room_price: number,
    room_offer: number,
    room_discount: number ,
    room_description: string,
    amenities: [],
}
>>>>>>> 20e8c94a76ff30b63110851212c9fe8cc4b6849c
