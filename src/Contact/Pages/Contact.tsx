import {
  CancelArchive,
  ButtonDelete,
} from "../Components/Contact.js";
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
  TableComment
} from "../../commons/Table.ts";
import {
  BoxSelect,
  ContainerSelect,
  ContainerButtons,
  ContainerFake,
} from "../../Rooms/Components/RoomsList.ts";
import { Swiper, SwiperSlide } from "swiper/react";
import { ButtonFake } from "../../commons/Buttons/ButtonFake.js";
import { ButtonGreen } from "../../commons/Buttons/ButtonGreen.js";
import { ButtonDefault } from "../../commons/Buttons/Button.js";
import { useEffect } from "react";
import {
  ContactAllThunks,
  ContactDeleteThunk,
  ContactIdThunks,
  ContactSaveThunk,
} from "../Features/ContactThunks.js";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  AllDataContact,
  AllStatusContact,
  ContactId,
} from "../Features/ContacSlice.js";
import { useParams } from "react-router-dom";
import { SectionContact } from "../Components/Contact.js";
import { SliderReviews } from "../Components/Contact.js";
import { BoxReviews, Review, BoxCard, ImgUser, BoxName, NameReview, BoxTime, TimeReview,BoxIcon, CancelIcon, CheckIcon, SelecTitleContact } from "../Components/Contact.js";
import React from "react";
import { AppDispatch } from "../../App/Store.js";
import { Contacts } from "../Interfaces/ContactInterfaces.js";
export const Contact = () => {
  const StatusContact = useSelector(AllStatusContact);
  const DataContact: Contacts [] = useSelector(AllDataContact);
  const dispatch = useDispatch<AppDispatch>();
  const [contact, setContact] = useState<Contacts []>(DataContact);
  const { id } = useParams<{id: string}>();
  const [searchTerm, setSearchTerm] = useState<string>(""); //Solucionar
  const [currentPage, setCurrentPage] = useState<number>(1);
  const contactPerPage = 10;
  const [archive, setArchive] = useState<boolean>(false);
  const [showAllContact, setShowAllcontact] = useState(true);

  //FILTRADO SEGÚN ARCHIVO
  const filteredContact = Array.isArray(DataContact)
    ? DataContact.filter((contact) =>
        contact.full_name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];
  const filteredContactArchive = archive
    ? filteredContact.filter((contact) => contact.archived === true)
    : filteredContact;
  showAllContact
    ? [...contact, ...DataContact]
    : archive
    ? archive
    : contact;

  //FILTRADO PÁGINAS
  const sortedContact = [...filteredContactArchive].sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
  const indexOfLastContact = currentPage * contactPerPage;
  const indexOfFirstContact = indexOfLastContact - contactPerPage;
  const currentContact = sortedContact.slice(
    indexOfFirstContact,
    indexOfLastContact
  );
 
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  //CONTROL DE CONTACTS
  
  const handleArchive = (id:number) => {
    
    dispatch(ContactSaveThunk(id));
  };
  const hanldeAllContacts = () => {
    setShowAllcontact(true);
    setArchive(false);
  };
  // MANEJAR DELETE
  const handleDeleteContact = (id) => {
    dispatch(ContactDeleteThunk(id));
  };

  useEffect(() => {
    if (StatusContact === "idle") {
      dispatch(ContactAllThunks(id));
      dispatch(ContactIdThunks( Number(id)));
    } else if (StatusContact === "fulfilled") {
      setContact(DataContact);
    } else if (StatusContact === "rejected") {
      Error("fallo datos de contact");
    }
  }, [dispatch, id, StatusContact, DataContact]);

  return (
    <>
      <section>
        <SectionContact>
          <SliderReviews>
            <Swiper
              direction="horizontal"
              spaceBetween={0}
              slidesPerView={3}
              navigation={false}
              pagination={{ clickable: true }}
              loop={true}
            >
              {DataContact.slice(0, 1).map((contact) => (
                <SwiperSlide>
                  <BoxReviews>
                    <Review>{contact.comment}</Review>
                    <BoxCard>
                      <ImgUser
                        src="/src/assets/Imagenes/user phot.jpg"
                        alt="photoUser"
                      />
                      <BoxName>
                        <NameReview>{contact.full_name}</NameReview>
                        <BoxTime>
                          <TimeReview>{contact.date}</TimeReview>
                          <BoxIcon>
                            <CancelIcon />
                            <CheckIcon />
                          </BoxIcon>
                        </BoxTime>
                      </BoxName>
                    </BoxCard>
                  </BoxReviews>
                  <BoxReviews></BoxReviews>
                </SwiperSlide>
              ))}
            
            </Swiper>
          </SliderReviews>
        </SectionContact>
        <SectionTable>
          <BoxSelect>
            <ContainerSelect>
              <SelecTitleContact onClick={hanldeAllContacts} type ={showAllContact ? "primaryActive" : "secundary"}>
                All Contacts
              </SelecTitleContact>
              <SelecTitleContact onClick={() => setArchive(!archive)} type ={archive ? "primaryActive" : "primary"}>
                Archived
              </SelecTitleContact>
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
                  <TableContact>
                    {contact.comment}
                  </TableContact>
                  <TableButton>
                    {contact.archived ? (
                      <CancelArchive
                        onClick={() => handleArchive(contact.id)}
                      />
                    ) : (
                      <ButtonDefault onClick={() => handleArchive(contact.id)}>
                        ARCHIVE
                      </ButtonDefault>
                    )}
                    <ButtonDelete
                      onClick={() => handleDeleteContact(contact.id)}
                    >
                      DELETE
                    </ButtonDelete>
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
