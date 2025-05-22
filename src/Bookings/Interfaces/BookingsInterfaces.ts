import { RoomsInter } from "../../Rooms/Interfaces/RoomsInterfaces";

export interface BookingsInter {
  name: string;
  _id: string;
  date: Date;
  check_in: Date;
  check_out: Date;
  request: string;
  status: string;
  room_id: string; 
  room?: Partial<RoomsInter>;
  type?:string;
  number?:number;
  price?: number;
  
}

export interface BookingsState {
  status: "idle" | "pending" | "fulfilled" | "rejected";
  statusDelete: "idle" | "pending" | "fulfilled" | "rejected";
  error: string | undefined;
  data: BookingsInter[];
  bookingsId: {
    status: "idle" | "pending" | "fulfilled" | "rejected";
    statusDelete: "idle" | "pending" | "fulfilled" | "rejected";
    error: string | undefined;
    data: BookingsInter | null;
  };
}

export interface BookingsDetailsInter {
  name: string;
  date: Date,
  check_in: Date;
  check_out: Date;
  request: string;
  status: string;
  _id?: string;
  type?:string;
  number?:number;
  price?: number;
  
}
export interface ButtonBookingsProps {
  status: string;
}
export interface BookingsCreateInter{
    _id: string,
    room_id?: string,
    name:string,
    date: Date,
    check_in: Date,
    check_out: Date,
    request: string,
    type: string,
    number:number,
    status: string,
    room: {},
}
