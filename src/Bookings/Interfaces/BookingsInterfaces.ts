import { RoomsInter } from "../../Rooms/Interfaces/RoomsInterfaces";

export interface BookingsInter {
  name: string;
  _id?: string;
  date: string;
  check_in: string;
  check_out: string;
  request: string;
  numberBooking: number;
  status: string;
  room: Partial<RoomsInter>;
  type:string;
  number:number
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

export interface BookingsEditInter {
  full_name: string;
  check_in: string;
  check_out: string;
  room_type: string;
  price: number;
  special_request: string;
  status: string;
  amenities: string[];
}
export interface BookingsDetailsInter {
  name: string;
  check_in: string;
  check_out: string;
  type: string;
  price: number;
  request: string;
  status: string;
  number: number;
  _id: string;
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
