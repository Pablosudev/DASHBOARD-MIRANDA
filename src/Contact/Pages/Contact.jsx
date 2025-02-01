import {
  SectionContact,
  BoxReviews,
  CancelIcon,
  CheckIcon,
  Review,
  TimeReview,
  BoxTime,
  BoxName,
  BoxCard,
  ImgUser,
  SliderReviews,
  NameReview,
  BoxIcon,
} from "../Components/Contact";
import {
  SectionTable,
  TableBody,
  TableHead,
  TableR,
  TableRooms,
  TableDate,
  TableAmenities,
  TableContact,
  TableButton,
  TableComment,
} from "../../commons/Table";
import {
  BoxSelect,
  ContainerSelect,
  SelectTitle,
  ContainerButtons,
  ContainerFake,
} from "../../Rooms/Components/RoomsList.js";
import { ButtonFake } from "../../commons/Buttons/ButtonFake.js";
import { ButtonGreen } from "../../commons/Buttons/ButtonGreen.js";
import { ButtonDefault } from "../../commons/Buttons/Button.js";
import { useEffect } from "react";
import { ContactAllThunks } from "../Features/ContactThunks.js";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AllDataContact, AllStatusContact } from "../Features/ContacSlice.js";
import { useParams } from "react-router-dom";
export const Contact = () => {
  const StatusContact = useSelector(AllStatusContact);
  const DataContact = useSelector(AllDataContact);
  const dispatch = useDispatch();
  const [contact, setContact] = useState(DataContact);
  const { id } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const contactPerPage = 10;
  const filteredContact = DataContact.filter((contact) =>
    contact.full_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastContact = currentPage * contactPerPage;
  const indexOfFirstContact = indexOfLastContact - contactPerPage;
  const currentContact = filteredContact.slice(
    indexOfFirstContact,
    indexOfLastContact
  );
  const sortedContact = [...contact].sort((a, b) => {
    return new Date(a.start_date) - new Date(b.start_date);
  });

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);
  useEffect(() => {
    if (StatusContact === "idle") {
      dispatch(ContactAllThunks(id));
    } else if (StatusContact === "fulfilled") {
      setContact(DataContact);
    } else if (StatusContact === "reject") {
      error("fallo datos de contact");
    }
  }, [dispatch, id, StatusContact, DataContact]);

  return (
    <>
      <section>
        <SectionContact>
          <SliderReviews>
            <BoxReviews>
              <Review>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </Review>
              <BoxCard>
                <ImgUser
                  src="/src/assets/Imagenes/user phot.jpg"
                  alt="photoUser"
                />
                <BoxName>
                  <NameReview>Kusnaidi Anderson</NameReview>
                  <BoxTime>
                    <TimeReview>4m ago</TimeReview>
                    <BoxIcon>
                      <CancelIcon />
                      <CheckIcon />
                    </BoxIcon>
                  </BoxTime>
                </BoxName>
              </BoxCard>
            </BoxReviews>
            <BoxReviews>
              <Review>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </Review>
              <BoxCard>
                <ImgUser
                  src="/src/assets/Imagenes/user phot.jpg"
                  alt="photoUser"
                />
                <BoxName>
                  <NameReview>Kusnaidi Anderson</NameReview>
                  <BoxTime>
                    <TimeReview>4m ago</TimeReview>
                    <BoxIcon>
                      <CancelIcon />
                      <CheckIcon />
                    </BoxIcon>
                  </BoxTime>
                </BoxName>
              </BoxCard>
            </BoxReviews>
            <BoxReviews>
              <Review>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </Review>
              <BoxCard>
                <ImgUser
                  src="/src/assets/Imagenes/user phot.jpg"
                  alt="photoUser"
                />
                <BoxName>
                  <NameReview>Kusnaidi Anderson</NameReview>
                  <BoxTime>
                    <TimeReview>4m ago</TimeReview>
                    <BoxIcon>
                      <CancelIcon />
                      <CheckIcon />
                    </BoxIcon>
                  </BoxTime>
                </BoxName>
              </BoxCard>
            </BoxReviews>
          </SliderReviews>
        </SectionContact>

        <SectionTable>
          <BoxSelect>
            <ContainerSelect>
              <SelectTitle>All Contacts</SelectTitle>
              <SelectTitle>Archived</SelectTitle>
            </ContainerSelect>
          </BoxSelect>
          <TableRooms>
            <TableHead>
              <TableR>
                <TableDate>Date</TableDate>
                <th></th>
                <th>Customer</th>
                <TableComment>Comment</TableComment>
              </TableR>
            </TableHead>
            <TableBody>
              {currentContact.map((contact) => (
                <TableR key={contact.id}>
                  <TableDate>
                    {contact.date} <br /> #{contact.id}
                  </TableDate>
                  <TableAmenities></TableAmenities>
                  <TableAmenities>
                    {contact.full_name} <br /> {contact.email} <br />{" "}
                    {contact.phone}
                  </TableAmenities>
                  <TableContact>{contact.comment}</TableContact>
                  <TableButton>
                    <ButtonDefault>ARCHIVE</ButtonDefault>
                  </TableButton>
                </TableR>
              ))}
            </TableBody>
          </TableRooms>
          <ContainerButtons>
            <ButtonGreen
              onClick={prevPage}
              type="primary"
              disabled={currentPage === 1}
            >
              Prev
            </ButtonGreen>
            <ContainerFake>
              {[...Array(Math.ceil(sortedContact.length / contactPerPage))].map(
                (_, index) => (
                  <ButtonFake
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    active={currentPage === index + 1}
                  >
                    {index + 1}
                  </ButtonFake>
                )
              )}
            </ContainerFake>
            <ButtonGreen
              onClick={nextPage}
              type="primary"
              disabled={currentPage * contactPerPage >= sortedContact.length}
            >
              Next
            </ButtonGreen>
          </ContainerButtons>
        </SectionTable>
      </section>
    </>
  );
};
