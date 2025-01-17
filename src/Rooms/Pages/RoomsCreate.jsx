import { useState } from 'react';
import {BoxInfo , RoomInfo, ButtonSlideLeft ,ButtonSlideRight ,BoxTitle ,IconArrowLeft, IconArrowRight, ImgSlide, TitleSection, ContainerSections } from '../Components/RoomsCreate';
import { CardCreate } from '../Components/RoomsCreate';


export const RoomsCreate = () => {

  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/src/assets/Imagenes/room1.jpg",
    "/src/assets/Imagenes/room2.jpg",
    "/src/assets/Imagenes/room5.jpg",
    "/src/assets/Imagenes/room4.jpg"
  ];

  const handleButtonNext = () => {
    setCurrentImage ((prevIndex) => (prevIndex +1) % images.length);
  };
  const handleButtonPrev = () => {
    setCurrentImage ((prevIndex) => (prevIndex -1 + images.length ) % images.length)
  };

  return (
  
    <CardCreate>
        <ContainerSections>
            <BoxTitle>
              <div>
                <TitleSection>Room Type</TitleSection>
                <input type="text" />
              </div>
              <div>
                <TitleSection>Room Number</TitleSection>
                <input type="text" />
              </div>
            </BoxTitle>
            <BoxInfo>
              <div>
                <RoomInfo>Room Info</RoomInfo>
                <p>p</p>
              </div>
              <div>
                <RoomInfo>Price</RoomInfo>
                <p>p</p>
              </div>
              <div>
                <RoomInfo>Offer</RoomInfo>
                <p>p</p>
              </div>
            </BoxInfo>
            
            <TitleSection>Description</TitleSection>
            <p>jsgijfs</p>
            <TitleSection>Offer</TitleSection>
            <TitleSection>Price</TitleSection>
            <p>dffddffd</p>
            <TitleSection>Discount</TitleSection>
            <p>fjdhnf</p>
            <TitleSection>Cancellation</TitleSection>
            <p>Campor de texto</p>
            <TitleSection>Amenities</TitleSection>
            <p>fdaidbk</p>
        </ContainerSections>
        <div>
          <ImgSlide src= {images[currentImage]} alt="photo room 1" />
          <ButtonSlideRight onClick={handleButtonNext}><IconArrowRight/></ButtonSlideRight>
          <ButtonSlideLeft onClick={handleButtonPrev}><IconArrowLeft/></ButtonSlideLeft>
        </div>
    </CardCreate>
    
  );
};
