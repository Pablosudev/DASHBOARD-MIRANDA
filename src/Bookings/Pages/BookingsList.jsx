import React, { useState } from "react"
import { ContainerSelect, SelectTitle, ContainerButtons, ContainerFake, BoxSelect } from "../../Rooms/Components/RoomsList"
import { SectionTable, TableBody, TableHead, TableGuest, TableR, TableRooms, TableAmenities, TablePrice, TableStatus, ContainerId, ButtonBookings } from "../../commons/Table"
import { UsersInput, IconSearch, ContainerInput } from "../../Users/Components/Users"
import bookings from "../Data/bookings.json"
import { ButtonGreen } from "../../commons/Buttons/ButtonGreen"
import { ButtonFake } from "../../commons/Buttons/ButtonFake"
import { Link } from "react-router-dom"
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrView } from "react-icons/gr";


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
                            {bookingsList.slice(0,10).map((booking) => (  
                            <TableR key={booking.id_booking}> 
                                <TableGuest>{booking.full_name} <br /> #{booking.id_booking}</TableGuest>
                                <ContainerId>{booking.date_booking}</ContainerId>
                                <TableAmenities>{booking.check_in}</TableAmenities>
                                <TableAmenities>{booking.check_out}</TableAmenities>
                                <TableAmenities>{booking.special_request}</TableAmenities>
                                <TablePrice>{booking.room_type} <br /> Room {booking.number_room}</TablePrice>
                                <td><ButtonBookings status = {booking.status}>{booking.status}</ButtonBookings></td>
                                <td><Link to={`/bookings/details/${booking.id_booking}`}><button><GrView /></button></Link><button><RiDeleteBin6Line /></button></td>
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