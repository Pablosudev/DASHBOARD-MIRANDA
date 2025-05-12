export interface RoomsInter {
  number: number;
  id: number;
  price: number;
  offer: number;
  roomStatus: string;
  type: string;
  amenities: string[];
}
export interface RoomsState {
  status: "idle" | "fulfilled" | "rejected" | "pending";
  statusDelete: "idle" | "fulfilled" | "rejected" | "pending";
  statusEdit: "idle" | "fulfilled" | "rejected" | "pending";
  statusCreate: "idle" | "fulfilled" | "rejected" | "pending";
  error: string | undefined;
  data: RoomsInter[];
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
  type: string;
  number: number;
  price: number;
  offer: number;
  discount: number;
  description: string;
}
export interface RoomCreate {
  type: string;
  number: number;
  price: number;
  offer: number;
  roomStatus: string;
  amenities: string[];
  id:number
 
}
