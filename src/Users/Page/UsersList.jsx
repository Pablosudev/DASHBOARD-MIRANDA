import { SectionTable, TableBody, TableHead, TableImg, TableR, TableRooms, TableTd, TableAmenities,  ContainerId, StatusUsers } from "../../commons/Table"
import { ContainerSelect, SelectTitle, ButtonFake, ContainerButtons, ContainerFake, BoxSelect } from "../../Rooms/Components/RoomsList"
import { ButtonGreen } from "../../commons/ButtonGreen"
import { useState } from "react"
import users from "../Data/users.json"




export const UserList = () => {

    const [usersList, setUsersList] = useState(users);


    return (
        <>
        <SectionTable>
                    <BoxSelect>
                    <ContainerSelect>
                        <SelectTitle>All Employee</SelectTitle>
                        <SelectTitle>Active Employee</SelectTitle>
                        <SelectTitle>Incative Employee</SelectTitle>
                    </ContainerSelect>
                    <div>
                        <ButtonGreen type="secundary" >+ New Employee</ButtonGreen>
                    </div>
                    </BoxSelect>
                    <TableRooms>
                        <TableHead>
                            <TableR>
                                <th>Name</th>
                                <th></th>
                                <th></th>
                                <th>Job Desk</th>
                                <th>Contact</th>
                                <th>Email</th>
                                <th>Status</th>
                            </TableR>
                        </TableHead>
                        <TableBody>
                        {usersList.slice(0,10).map((users) => ( 
                            <TableR key={users.employee_id} > 
                                <TableTd><TableImg src="Imagenes/users logo.jpg" alt="User photo" /></TableTd>
                                <ContainerId>{users.full_name} <br/>{users.employee_id}</ContainerId>
                                <TableAmenities></TableAmenities>
                                <TableAmenities>{users.job_description}</TableAmenities>
                                <TableAmenities>{users.phone_number}</TableAmenities>
                                <TableAmenities>{users.email}</TableAmenities>
                                <td><StatusUsers status={users.status}>{users.status}</StatusUsers></td>
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
        </>
    )
}