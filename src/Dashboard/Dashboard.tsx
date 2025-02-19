import {
  BoxReviews,
  ContainerReviews,
  Reviews,
  ContainerKpis,
  DashboardSection,
  Kpis,
  NumberKpis,
  DataKpis,
  IconLogOut,
  TypeKpis,
  IconLogIn,
  IconBed,
  IconCalendary,
} from "./components/Dashboard";
import {
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
  SectionContact,
  StyledSwiperSlide,
  StyledSwiper,
} from "../Contact/Components/Contact";
import 'swiper/css';
import 'swiper/css/pagination';
import React, { useEffect, useState } from "react";
import { Contacts } from "../Contact/Interfaces/ContactInterfaces";
import { useSelector } from "react-redux";
import { AllDataContact, AllStatusContact } from "../Contact/Features/ContacSlice";
import { useDispatch } from "react-redux";
import { ContactAllThunks } from "../Contact/Features/ContactThunks";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../App/Store";
export const Dashboard = () => {

  const DataContact: Contacts[] = useSelector(AllDataContact);
  const StatusContact = useSelector(AllStatusContact)
  const dispatch = useDispatch<AppDispatch>();
  const [ contact, setContact ] = useState<Contacts[]>(DataContact)
  const {id} = useParams<{id: string}>();


  useEffect(() => {
    if(StatusContact === 'idle'){
      dispatch(ContactAllThunks(id))
    } else if (StatusContact === 'fulfilled'){
      setContact(DataContact);
    } else if (StatusContact === 'rejected'){
      Error('Error contact')
    }
  },[StatusContact, id , DataContact])
  return (
    <>
      <DashboardSection>
        <ContainerKpis>
          <Kpis>
            <IconBed />
            <DataKpis>
              <NumberKpis>8,461</NumberKpis>
              <TypeKpis>New Booking</TypeKpis>
            </DataKpis>
          </Kpis>
          <Kpis>
            <IconCalendary />
            <DataKpis>
              <NumberKpis>963</NumberKpis>
              <TypeKpis>Scheduled Room</TypeKpis>
            </DataKpis>
          </Kpis>
          <Kpis>
            <IconLogIn />
            <DataKpis>
              <NumberKpis>753</NumberKpis>
              <TypeKpis>Check In</TypeKpis>
            </DataKpis>
          </Kpis>
          <Kpis>
            <IconLogOut />
            <DataKpis>
              <NumberKpis>516</NumberKpis>
              <TypeKpis>Check Out</TypeKpis>
            </DataKpis>
          </Kpis>
        </ContainerKpis>
        <ContainerReviews>
          <Reviews>Latest Review By Customers</Reviews>
          <SectionContact>
            <SliderReviews>
              <StyledSwiper
                direction="horizontal"
                slidesPerView={3}
                spaceBetween={20}
                loop={true}
              >
                {DataContact.map((contact) => (
                  <StyledSwiperSlide key={contact.id}>
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
                  </StyledSwiperSlide>
                ))}
              </StyledSwiper>
            </SliderReviews>
          </SectionContact>
        </ContainerReviews>
      </DashboardSection>
    </>
  );
};
