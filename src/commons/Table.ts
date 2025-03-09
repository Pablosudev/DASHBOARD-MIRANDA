import styled from "styled-components";
import {
  ButtonBookingsProps,
  StatusUsersProps,
  ButtonTableProps,
  TableRowProps,
} from "./InterfacesCommon/CommonInterface";

export const SectionTable = styled.section`
  margin-top: 6%;
  margin-left: 2%;
  width: 100%;
`;
export const TableR = styled.tr`
  border-left: transparent;
  border-right: transparent;
  border-top: transparent;
  border-bottom: 1px solid rgba(248, 248, 248, 1);
`;
export const TableHeadName = styled.th`
  padding-left: 1.5%;
`;
export const TableRow = styled.tr<TableRowProps>`
  border-left: transparent;
  border-right: transparent;
  border-top: transparent;
  border-bottom: 1px solid rgba(248, 248, 248, 1);
`;

export const TableHead = styled.thead`
  text-align: left;
  font-family: "Poppins";
  font-weight: 600;
  font-size: 1.1rem;
  color: #393939;
  height: 4rem;
`;
export const TableRooms = styled.table`
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 1);
  border-collapse: collapse;
  width: 100%;
`;
export const TableBookings = styled.table`
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 1);
  border-collapse: collapse;
  width: 100%;
`;
export const TableContacts = styled.table`
   border-radius: 20px;
  background-color: rgba(255, 255, 255, 1);
  border-collapse: collapse;
  width: 100%;
`;
export const TableUsers = styled.table`
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 1);
  border-collapse: collapse;
  width: 100%;
`;
export const TableBody = styled.tbody`
  height: 7.5rem;
`;
export const TableImg = styled.img`
  width: 9.3rem;
  height: 4.8rem;
  margin-left: 2%;
  margin-right: 2%;
  border-radius: 8%
`;
export const TableImgUsers = styled.img`
  width: 6.3rem;
  height: 4.8rem;
  margin-left: 2%;
  margin-right: 2%;
`;

export const TableTd = styled.td`
  height: 7.5rem;
`;
export const ButtonTable = styled.button<ButtonTableProps>`
  border-radius: 12px;
  background-color: ${(props) =>
    props.status === "Available" ? "#5AD07A" : "#FF4D4D"};
  color: white;
  border: transparent;
  width: 7.8rem;
  height: 3rem;
  font-family: "Poppins";
`;
export const TableAmenities = styled.td`
  font-family: "Poppins";
  font-size: 1rem;
  padding-right: 2%;
  padding-left: 3rem;
`;
export const TableEmail = styled.td`
  font-family: "Poppins";
  font-size: 1rem;
  padding-left: 1%;
  text-align: center;
`;
export const TablePrice = styled.td`
  display: flex;
  align-items: center;
  font-family: "Poppins";
  align-items: center;
  margin-top: 32%;
  padding-right: 2rem;
  
`;
export const Night = styled.p`
  color: #799283;
`;
export const ContainerId = styled.td`
  font-family: "Poppins";
  padding-left: 1%;
  margin-right: 105%;
`;
export const LogoUsers = styled.td`
  width: 5.5rem;
  height: 5.5rem;
`;
export const StatusUsers = styled.p<StatusUsersProps>`
  color: ${(props) => (props.status === "Active" ? "#5AD07A" : "#FF4D4D")};
  font-family: "Poppins";
`;

export const TableContact = styled.td`
  font-family: "Poppins";
  padding-right: 2rem;
  padding-left: 2rem;
  max-width: 38rem;
`;
export const TableDate = styled.td`
  font-family: "Poppins";
  text-align:center;
`;
export const TableCustomer = styled.td`
font-family: "Poppins";
text-align:center;
`
export const TableButton = styled.td`
  padding-right: 2rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
`;
export const TableComment = styled.th`
  padding-left: 5rem;
`;
export const TableGuest = styled.td`
  padding-left: 1.5rem;
  font-family: "Poppins";
  padding-top: 2%;
  padding-bottom: 2%;
`;
export const TableStatus = styled.th`
  text-align: left;
`;
export const ButtonBookings = styled.button<ButtonBookingsProps>`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 0.8rem;
  font-family: "Poppins";
  border: transparent;
  background-color: ${(props) =>
    props.status === "In Progress"
      ? "yellow"
      : props.status === "Check-In"
      ? "#5AD07A"
      : props.status === "Check-Out"
      ? "#E23428"
      : "yellow"};
`;
export const TableName = styled.th`
  padding-left: 1rem;
`;
export const TableStatusRooms = styled.td`
  padding-left: 1rem;
  padding-right: 3rem;
`;
export const TableIcons = styled.td`
  display: flex;
  flex-direction: column;
  padding-right: 2rem;
`;
export const PopUpContacts = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
  padding-left: 8rem;
  padding-right: 8rem;
  display: none;
`;
export const HeadType = styled.th`
  padding-left: 26%;
`;
export const HeadPrice = styled.th`
padding-left: 31%;
`;
export const HeadOffer = styled.th`
padding-left: 9%;

`;

export const HeadRoomType = styled.th`
  padding-left: 19%;
  
`;
export const HeadRoomStatus = styled.th`
  padding-left: 10%;
`;
export const HeadRoomAmenities= styled.th`
padding-left: 20%;
width:10rem;
`
export const HeadContact = styled.th`
padding-left: 16%;
`
export const HeadEmail = styled.th`
padding-left:  5%;
`
export const HeadDepartment = styled.th`
padding-left: 20%;
`
export const HeadAmenities = styled.th`
  padding-left: 3%;
`;
export const HeadStatus = styled.th`
  padding-left: 1%;
`;
export const TabledIcons = styled.td`
display: flex;
flex-direction:column;
align-items: center;
padding: 1rem;
margin-top: 20%;
`
export const TabledStatus = styled.td`
padding-right: 2rem;
`
export const TableDepartment = styled.td`
text-align:center;
font-family: "Poppins";
`

