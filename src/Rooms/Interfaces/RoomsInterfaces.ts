


export interface RoomsInter {
    room_number: number,
    id: number,
    room_price: number,
    rooom_offer: number;
    status: string,
    room_type:string,
    amenities: string,
}
export interface RoomsStatus {
    status: "idle" | "fulfilled" | "rejected" | "pending",
    statusDelete: "idle" | "fulfilled" | "rejected" | "pending",
    statusEdit: "idle" | "fulfilled" | "rejected" | "pending",
    statusCreate: "idle" | "fulfilled" | "rejected" | "pending",
    error: undefined,
    data: [],
    roomId: {
      status: "idle",
      error: undefined,
      data: undefined,
    },
}