


export interface BookingsInter {
    full_name: string,
    id: number,
    date_booking: string,
    check_in: string,
    check_out: string,
    special_request: string,
    room_type: string,ç
    number_room: number,
    status: string,
    price: number;
    
}

export interface BookingsState{
    status: "idle" | "pending" | "fulfilled" | "rejected"
    statusDelete: "idle" | "pending" | "fulfilled" | "rejected"
    error: string | undefined,
    data: BookingsInter [],
    bookingsId: {
      status: "idle" | "pending" | "fulfilled" | "rejected",
      statusDelete: "idle" | "pending" | "fulfilled" | "rejected"
      error: string | undefined,
      data: BookingsInter | null,
    },
}

export interface BookingsEditInter{
    full_name: string,
    check_in: string,
    check_out: string,
    room_type: string,
    price: number,
    special_request: string,
    status: string,
    amenities: string[],
}
export interface BookingsDetailsInter{
    full_name: string,
        check_in: string,
        check_out: string,
        room_type: string,
        price: number,
        special_request: string,
        status: string,
        number_room: number,
        id: number,
}
export interface ButtonBookingsProps{
    status: string,
}