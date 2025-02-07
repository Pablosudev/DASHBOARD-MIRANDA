export interface RoomsInter {
  room_number: number;
  id: number;
  room_price: number;
  room_offer: number;
  status: string;
  room_type: string;
  amenities: string;
  room_discount: number ,
  room_description: string,
}
export interface RoomsState {
  status: "idle" | "fulfilled" | "rejected" | "pending";
  statusDelete: "idle" | "fulfilled" | "rejected" | "pending";
  statusEdit: "idle" | "fulfilled" | "rejected" | "pending";
  statusCreate: "idle" | "fulfilled" | "rejected" | "pending";
  error: string | undefined;
  data: RoomsInter [];
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
    room_type:string,
    room_number: number,
    room_price: number,
    room_offer: number,
    room_discount: number ,
    room_description: string,
    amenities: [],
}