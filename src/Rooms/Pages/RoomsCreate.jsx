import { useNavigate } from "react-router-dom";
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
} from "../Components/RoomsCreate";
import { CardCreate } from "../Components/RoomsCreate";

export const RoomsCreate = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/rooms");
  };
  return (
    <CardCreate>
      <ContainerSections>
        <IconClose onClick={handleClose} />
        <RoomInfo>Room Info</RoomInfo>
        <BoxTitle>
          <div>
            <TitleSection>Room Type</TitleSection>
            <InputCreate type="text" />
          </div>
          <div>
            <TitleSection>Room Number</TitleSection>
            <InputCreate type="text" />
          </div>
        </BoxTitle>
        <BoxInfo>
          <PriceBox>
            <TitlePrice>Price/Night</TitlePrice>
            <Price type="text" />
          </PriceBox>
          <PriceBox>
            <TitlePrice>Offer</TitlePrice>
            <div>
              <ButtonOffer>Yes</ButtonOffer>
              <ButtonOffer>No</ButtonOffer>
            </div>
          </PriceBox>
          <PriceBox>
            <TitlePrice>Discount</TitlePrice>
            <InputDiscount type="text" />
          </PriceBox>
        </BoxInfo>

        <BoxDescription>
          <div>
            <TitleDescripition>Description</TitleDescripition>
            <InputDescription type="text" />
          </div>
          <div>
            <TitleDescripition>Amenities</TitleDescripition>
            <div>
              <ButtonAmenities>FREE WIFI</ButtonAmenities>
              <ButtonAmenities>TV LED</ButtonAmenities>
              <ButtonAmenities>2 BATHROOM</ButtonAmenities>
              <ButtonAmenities>AC</ButtonAmenities>
              <ButtonAmenities>3 BED SPACE</ButtonAmenities>
              <ButtonAmenities>COFEE SET</ButtonAmenities>
              <ButtonAmenities>BATHUP</ButtonAmenities>
              <ButtonAmenities>TOWEL</ButtonAmenities>
              <ButtonAmenities>SHOWER</ButtonAmenities>
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
        <ButtonSave>SAVE</ButtonSave>
      </ContainerSections>
    </CardCreate>
  );
};
