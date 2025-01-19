import React, { useState } from "react"
import { ContainerSelect, SelectTitle, ContainerButtons, ContainerFake, BoxSelect } from "../../Rooms/Components/RoomsList"
import { SectionTable, TableBody, TableHead, TableGuest, TableR, TableRooms, TableAmenities, TablePrice, TableStatus, ContainerId, ButtonBookings } from "../../commons/Table"
import { UsersInput, IconSearch, ContainerInput } from "../../Users/Components/Users"
import bookings from "../Data/bookings.json"
import { ButtonGreen } from "../../commons/Buttons/ButtonGreen"
import { ButtonFake } from "../../commons/Buttons/ButtonFake"


export const BookingsList = () => {

    const  [bookingsList, setBookingsList] = useState(bookings);

    return ( 
        <>
            <section>
                <SectionTable>
                    <BoxSelect>
                        <ContainerSelect>
                            <SelectTitle>All Bookings</SelectTitle>
                            <SelectTitle>Check Out</SelectTitle>
                            <SelectTitle>Check Out</SelectTitle>
                            <SelectTitle>In Progress</SelectTitle>
                        </ContainerSelect>
                        <ContainerInput>
                            <UsersInput type="text" />
                            <label><IconSearch/></label>
                        </ContainerInput>
                        <div>
                            <ButtonGreen type="secundary" >+ New Room</ButtonGreen>
                        </div>
                    </BoxSelect>
                    <TableRooms>
                        <TableHead>
                            <TableR>
                                <TableGuest>Guest</TableGuest>
                                <th>Order Date</th>
                                <th>Check In</th>
                                <th>Check Out</th>
                                <th>Special Request</th>
                                <th>Room Type</th>
                                <TableStatus>Status</TableStatus>
                            </TableR>
                        </TableHead>
                        <TableBody>
                            {bookingsList.slice(0,10).map((bookings) => (  
                                <TableR key={bookings.id_booking}> 
                                <TableGuest>{bookings.full_name} <br /> #{bookings.id_booking}</TableGuest>
                                <ContainerId>{bookings.date_booking}</ContainerId>
                                <TableAmenities>{bookings.check_in}</TableAmenities>
                                <TableAmenities>{bookings.check_out}</TableAmenities>
                                <TableAmenities>{bookings.special_request}</TableAmenities>
                                <TablePrice>{bookings.room_type} <br /> Room {bookings.number_room}</TablePrice>
                                <td><ButtonBookings status = {bookings.status}>{bookings.status}</ButtonBookings></td>
                            </TableR>
                            ))}
                        </TableBody>
                    </TableRooms>   
                    <ContainerButtons>
                    <ButtonGreen type="primary">Prev</ButtonGreen> 
                    <ContainerFake>
                        <ButtonFake>1</ButtonFake>
                        <ButtonFake>2</ButtonFake>
                        <ButtonFake>3</ButtonFake>
                        <ButtonFake>4</ButtonFake>
                    </ContainerFake>
                    <ButtonGreen type='primary' >Next</ButtonGreen> 
                    </ContainerButtons>
                
                </SectionTable>
            </section>
        </>
    )
}