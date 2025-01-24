
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


export const RoomsEdit = () => {
  return (
    <CardCreate>
      <ContainerSections>
        <IconClose onClick={handleClose} />
        <RoomInfo>Room Info</RoomInfo>
        <BoxTitle>
          <div>
            <TitleSection>Room Type</TitleSection>
            <InputCreate
              type="text"
              name="room_type"
              value={newRoom.room_type}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <TitleSection>Room Number</TitleSection>
            <InputCreate
              type="text"
              name="room_number"
              value={newRoom.room_number}
              onChange={handleInputChange}
            />
          </div>
        </BoxTitle>
        <BoxInfo>
          <PriceBox>
            <TitlePrice>Price/Night</TitlePrice>
            <Price
              type="text"
              name="room_price"
              value={newRoom.room_price}
              onChange={handleInputChange}
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
              value={newRoom.room_discount}
              onChange={handleInputChange}
            />
          </PriceBox>
        </BoxInfo>

        <BoxDescription>
          <div>
            <TitleDescripition>Description</TitleDescripition>
            <InputDescription
              type="text"
              name="room_description"
              value={newRoom.room_description}
              onChange={handleInputChange}
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
        <ButtonSave onClick={handleCreateRoom}>SAVE</ButtonSave>
      </ContainerSections>
    </CardCreate>
  );
};
