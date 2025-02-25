export interface RoomsInter {
  image_url?: string;
  number: number;
  _id?: string;
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
  discount: number;
  description: string;
  roomStatus: string;
  amenities: string[];
  _id: string,
  image_url: string,
}
