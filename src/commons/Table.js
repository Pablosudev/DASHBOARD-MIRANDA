import styled from "styled-components"


export const SectionTable = styled.section`
margin-top: 8rem;
margin-left: 5rem;
`
export const TableR = styled.tr`
    border-left: transparent;
    border-right: transparent;
    border-top: transparent;
    border-bottom: 1px solid rgba(248, 248, 248, 1);
`

export const TableHead = styled.thead`
    text-align: left;
    font-family: "Poppins";
    font-weight: 600;
    font-size: 1.1rem;
    color: #393939;
    height: 4rem;
`
export const TableRooms = styled.table`
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 1);
    border-collapse: collapse;
    width: 92rem;
`
export const TableBody = styled.tbody`
    height: 7.5rem;
`
export const TableImg = styled.img`
width: 9.3rem;
height: 4.8rem;
border-radius: 8px;
`
export const TableTd = styled.td`
height:7.5rem;
`
export const ButtonTable = styled.button` 
    border-radius: 12px;
    background-color: ${(props) => props.status === 'available' ? '#5AD07A' : '#FF4D4D'};
    color:white;
    border:transparent;
    width: 7.8rem;
    height: 3rem;
    font-family: "Poppins";
`
export const TableAmenities = styled.td`
    font-family:"Poppins";
    font-size:1rem;
`
export const TablePrice = styled.td`
    display: flex;
    font-family:"Poppins";
    align-items:center;
    margin-top: 2rem;
    
`
export const Night = styled.p`
    color:#799283;
    margin-right: 4rem;
`
export const ContainerId = styled.td`
 font-family:"Poppins";
`
export const LogoUsers = styled.td`
    width: 5.5rem;
    height: 5.5rem;
`
export const StatusUsers = styled.p`
    color:${(props) => props.status === 'Active' ? '#5AD07A' : '#FF4D4D'};
    border:transparent;
    font-family: "Poppins";
`
