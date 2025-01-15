import React, { useState } from "react"
import { SectionTable, TableBody, TableHead, TableImg, TableR, TableRooms, TableTd, ButtonTable, TableAmenities, TablePrice, Night, ContainerId } from "../../commons/Table"
import { ContainerSelect, SelectTitle, ButtonFake, ContainerButtons, ContainerFake, BoxSelect, SelectRooms } from "../Components/RoomsList"
import rooms from "../Data/rooms.json"
import { ButtonGreen } from "../../commons/ButtonGreen"

export const RoomsList = () => {

    const [roomsList, SetRoomsList] = useState(rooms)
    return (
        <SectionTable>
            <BoxSelect>
            <ContainerSelect>
                <SelectTitle>All Rooms</SelectTitle>
                <SelectTitle>Active Employee</SelectTitle>
                <SelectTitle>Inactive Employee</SelectTitle>
                <SelectTitle>Price</SelectTitle>
            </ContainerSelect>
            <div>
                <ButtonGreen type="secundary">+ New Room</ButtonGreen>
                <SelectRooms>Newest</SelectRooms> 
            </div>
            </BoxSelect>
            <TableRooms>
                <TableHead>
                    <TableR>
                        <th>Room Name</th>
                        <th></th>
                        <th>Room Type</th>
                        <th>Amenities</th>
                        <th>Price</th>
                        <th>Offer</th>
                        <th>Status</th>
                    </TableR>
                </TableHead>
                <TableBody>
                    {roomsList.slice(0,10).map((room) => (  
                        <TableR key={room.room_number}> 
                        <TableTd><TableImg src="Imagenes/room10.jpg" alt="Room photo" /></TableTd>
                        <ContainerId><Night>#{room.room_number}</Night> <p>{room.id_room}</p></ContainerId>
                        <TableAmenities>{room.room_type}</TableAmenities>
                        <TableAmenities>AC,Shower,Double Bed, Towel, Bathup, Cofee Ser, LED TV, Wifi</TableAmenities>
                        <TablePrice>${room.room_price}<Night>/night</Night></TablePrice>
                        <td>{room.room_offer}</td>
                        <td><ButtonTable status={room.status}>{room.status}</ButtonTable></td>
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
    )
}