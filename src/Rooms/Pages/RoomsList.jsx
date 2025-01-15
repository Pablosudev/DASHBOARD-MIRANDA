import React from "react"
import { SectionTable, TableBody, TableHead, TableR, TableRooms } from "../../commons/Table"
import { ContainerSelect, SelectTitle } from "../Components/RoomsList"


export const RoomsList = () => {


    return (
        <SectionTable>
            <ContainerSelect>
                <SelectTitle>All Rooms</SelectTitle>
                <SelectTitle>Active Employee</SelectTitle>
                <SelectTitle>Inactive Employee</SelectTitle>
                <SelectTitle>Price</SelectTitle>
            </ContainerSelect>
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
                    <TableR>
                        <td></td>
                        <td>101</td>
                        <td>Individual</td>
                        <td>Wi-Fi, Aire Acondicionado</td>
                        <td>$100</td>
                        <td>$80</td>
                        <td>Disponible</td>
                    </TableR>
                </TableBody>
            </TableRooms>    
        </SectionTable>
    )
}