import React, { useState } from "react"
import { SectionTable, TableBody, TableHead, TableImg, TableR, TableRooms, TableTd, ButtonTable, TableAmenities, TablePrice, Night, ContainerId, TableName } from "../../commons/Table"
import { ContainerSelect, SelectTitle, ContainerButtons, ContainerFake, BoxSelect} from "../Components/RoomsList"
import rooms from "../Data/rooms.json"
import { ButtonGreen } from "../../commons/Buttons/ButtonGreen"
import { ButtonFake } from "../../commons/Buttons/ButtonFake"
import { useNavigate } from "react-router-dom"

export const RoomsList = () => {

    const [roomsList, SetRoomsList] = useState(rooms)
    const navigate = useNavigate();

    const handleNewRoom = () => {
        navigate('/rooms/create')
    }

    return (
        <SectionTable>
            <BoxSelect>
            <ContainerSelect>
                <SelectTitle>All Rooms</SelectTitle>
            </ContainerSelect>
            <div>
                <ButtonGreen type="secundary" onClick={handleNewRoom}>+ New Room</ButtonGreen>
            </div>
            </BoxSelect>
            <TableRooms>
                <TableHead>
                    <TableR>
                        <TableName>Room Name</TableName>
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
                        <TableTd><TableImg src="/src/assets/Imagenes/room10.jpg" alt="Room photo" /></TableTd>
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