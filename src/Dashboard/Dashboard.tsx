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
  ButtonSlider,
  IconArrowRight,
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
} from "../Contact/Components/Contact";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
export const Dashboard = () => {
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
          <ButtonSlider>
            <IconArrowRight />
          </ButtonSlider>
        </ContainerReviews>
      </DashboardSection>
    </>
  );
};
