import {  useSelector } from "react-redux";
import {
    IconClose,
    ButtonSave,
    CancellationBox,
    ButtonAmenities,
    BoxDescription,
    TitlePrice,
    InputDiscount,
    InputDescription,
    TitleDescripition,
    ButtonOffer,
    Price,
    PriceBox,
    InputCreate,
    BoxInfo,
    RoomInfo,
    BoxTitle,
    TitleSection,
    ContainerSections,
    CardCreate
  } from "../Components/RoomsCreate";
  
import { Link } from "react-router-dom";




export const RoomsEdit = () => {
  
  const room = useSelector((state) => state.rooms.roomId.data);
  const status = useSelector((state) => state.rooms.roomId.status);
  console.log(room.room_description)

 


  return (
    <CardCreate>
      <ContainerSections>
        <Link to={"/rooms"}><IconClose/></Link>
        <RoomInfo>Room Info</RoomInfo>
        <BoxTitle>
          <div>
            <TitleSection>Room Type</TitleSection>
            <InputCreate
              type="text"
              name="room_type"
              value={room.room_type}
              
            />
          </div>
          <div>
            <TitleSection>Room Number</TitleSection>
            <InputCreate
              type="text"
              name="room_number"
              value={room.room_number}
              
            />
          </div>
        </BoxTitle>
        <BoxInfo>
          <PriceBox>
            <TitlePrice>Price/Night</TitlePrice>
            <Price
              type="text"
              name="room_price"
              value={room.room_price}
              
            />
          </PriceBox>
          <PriceBox>
            <TitlePrice>Offer</TitlePrice>
            <div>
              <ButtonOffer
                onClick={() =>
                  setNewRoom((prevState) => ({
                    ...prevState,
                    room_offer: "Yes",
                  }))
                }
              >
                Yes
              </ButtonOffer>
              <ButtonOffer
                onClick={() =>
                  setNewRoom((prevState) => ({
                    ...prevState,
                    room_offer: "No",
                  }))
                }
              >
                No
              </ButtonOffer>
            </div>
          </PriceBox>
          <PriceBox>
            <TitlePrice>Discount</TitlePrice>
            <InputDiscount
              type="text"
              name="room_discount"
              value={room.room_discount}
              
            />
          </PriceBox>
        </BoxInfo>

        <BoxDescription>
          <div>
            <TitleDescripition>Description</TitleDescripition>
            <InputDescription
              type="text"
              name="room_description"
              value={room.room_description}
              
            />
          </div>
          <div>
            <TitleDescripition>Amenities</TitleDescripition>
            <div>
              <ButtonAmenities onClick={() => handleAmenityChange("FREE WIFI")}>
                FREE WIFI
              </ButtonAmenities>
              <ButtonAmenities onClick={() => handleAmenityChange("TV LED")}>
                TV LED
              </ButtonAmenities>
              <ButtonAmenities
                onClick={() => handleAmenityChange("2 BATHROOM")}
              >
                2 BATHROOM
              </ButtonAmenities>
              <ButtonAmenities onClick={() => handleAmenityChange("AC")}>
                AC
              </ButtonAmenities>
              <ButtonAmenities
                onClick={() => handleAmenityChange("3 BED SPACE")}
              >
                3 BED SPACE
              </ButtonAmenities>
              <ButtonAmenities onClick={() => handleAmenityChange("COFEE SET")}>
                COFEE SET
              </ButtonAmenities>
              <ButtonAmenities onClick={() => handleAmenityChange("BATHUP")}>
                BATHUP
              </ButtonAmenities>
              <ButtonAmenities onClick={() => handleAmenityChange("TOWEL")}>
                TOWEL
              </ButtonAmenities>
              <ButtonAmenities onClick={() => handleAmenityChange("SHOWER")}>
                SHOWER
              </ButtonAmenities>
            </div>
          </div>
        </BoxDescription>

        <CancellationBox>
          <TitleSection>Cancellation Policy</TitleSection>
          <p>
            Guests may cancel their reservation up to 48 hours prior to the
            scheduled check-in date without any charge. Cancellations made
            within 48 hours of the check-in date will incur a one-night charge.
            No-shows will be charged the full amount of the reservation. For any
            changes or cancellations, please contact the hotel directly.
          </p>
        </CancellationBox>
        <ButtonSave >SAVE</ButtonSave>
      </ContainerSections>
    </CardCreate>
  );
};
