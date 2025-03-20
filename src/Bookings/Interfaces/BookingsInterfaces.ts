import { RoomsInter } from "../../Rooms/Interfaces/RoomsInterfaces";

export interface BookingsInter {
  name: string;
  id?: number;
  date: Date;
  check_in: Date;
  check_out: Date;
  request: string;
  status: string;
  room_id: number; 
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
  id?: number;
  
}
export interface ButtonBookingsProps {
  status: string;
}
export interface BookingsCreateInter{
    name:string,
    date: string,
    check_in: string,
    check_out: string,
    request: string,
    type: string,
    number:number,
    status: string,
    room: {},
}
