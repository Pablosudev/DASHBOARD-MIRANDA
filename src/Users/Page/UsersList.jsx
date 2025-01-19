import { SectionTable, TableBody, TableHead, TableImg, TableR, TableRooms, TableTd, TableAmenities,  ContainerId, StatusUsers } from "../../commons/Table"
import { ContainerSelect, SelectTitle, ContainerButtons, ContainerFake, BoxSelect } from "../../Rooms/Components/RoomsList"
import { ButtonGreen } from "../../commons/Buttons/ButtonGreen"
import { useState } from "react"
import users from "../Data/users.json"
import { ButtonFake } from "../../commons/Buttons/ButtonFake"
import { ContainerInput, IconSearch, UsersInput } from "../Components/Users"
import { useNavigate } from "react-router-dom"




export const UserList = () => {
    const [usersList, setUsersList] = useState(users);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;
    const navigate = useNavigate();

    const handleUserCreate = () => {
        navigate('/users/new')
    }
    
    const sortedUsers = [...usersList].sort((a, b) => {
        return new Date(a.start_date) - new Date(b.start_date);
    });

    
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);

    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);

    return (
        <>
            <SectionTable>
                <BoxSelect>
                    <ContainerSelect>
                        <SelectTitle>All Employee</SelectTitle>
                        <SelectTitle>Active Employee</SelectTitle>
                        <SelectTitle>Inactive Employee</SelectTitle>
                    </ContainerSelect>
                    <ContainerInput>
                        <UsersInput type="text" />
                        <label><IconSearch/></label>
                    </ContainerInput>
                    <div>
                        <ButtonGreen type="secondary" onClick={handleUserCreate}>+ New Employee</ButtonGreen>
                    </div>
                </BoxSelect>

                <TableRooms>
                    <TableHead>
                        <TableR>
                            <th>Name</th>
                            <th></th>
                            <th>Start Date</th>
                            <th>Job Desk</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Status</th>
                        </TableR>
                    </TableHead>
                    <TableBody>
                        {currentUsers.map((user) => (
                            <TableR key={user.employee_id}>
                                <TableTd>
                                    <TableImg src="Imagenes/users logo.jpg" alt="User photo" />
                                </TableTd>
                                <ContainerId>{user.full_name} <br />{user.employee_id}</ContainerId>
                                <TableAmenities>{user.start_date}</TableAmenities>
                                <TableAmenities>{user.job_description}</TableAmenities>
                                <TableAmenities>{user.phone_number}</TableAmenities>
                                <TableAmenities>{user.email}</TableAmenities>
                                <td>
                                    <StatusUsers status={user.status}>{user.status}</StatusUsers>
                                </td>
                            </TableR>
                        ))}
                    </TableBody>
                </TableRooms>

                <ContainerButtons>
                    <ButtonGreen onClick={prevPage} type="primary" disabled={currentPage === 1}>Prev</ButtonGreen>
                    <ContainerFake>
                        {[...Array(Math.ceil(sortedUsers.length / usersPerPage))].map((_, index) => (
                            <ButtonFake key={index + 1} onClick={() => setCurrentPage(index + 1)} active={currentPage === index + 1}>{index + 1}</ButtonFake>
                        ))}
                    </ContainerFake>
                    <ButtonGreen onClick={nextPage} type="primary" disabled={currentPage * usersPerPage >= sortedUsers.length}>Next</ButtonGreen>
                </ContainerButtons>
            </SectionTable>
        </>
    );
};