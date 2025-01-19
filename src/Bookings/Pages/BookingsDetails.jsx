import { useState } from "react";
import { ImgSlide, ButtonSlideLeft, ButtonSlideRight, IconArrowLeft, IconArrowRight, CardBookings, CardSlide, PhoneIcon } from "../Components/BookingsDetails";
export const BookingsDetails = () => {


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
    <>
    <CardBookings>
      <article>
        <h1>Roberto Mansini</h1>
        <p>ID 1234124512551</p>
        <PhoneIcon/>
        <button></button>
      </article>
      <CardSlide>
        <ImgSlide src= {images[currentImage]} alt="photo room 1" />
        <ButtonSlideRight onClick={handleButtonNext}><IconArrowRight/></ButtonSlideRight>
        <ButtonSlideLeft onClick={handleButtonPrev}><IconArrowLeft/></ButtonSlideLeft>
      </CardSlide>
    </CardBookings>
    
    </>
)

}