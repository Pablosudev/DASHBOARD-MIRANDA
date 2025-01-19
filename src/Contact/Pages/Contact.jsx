import { SectionContact, BoxReviews, CancelIcon, CheckIcon, Review, TimeReview, BoxTime, BoxName, BoxCard, ImgUser, SliderReviews, NameReview, BoxIcon} from "../Components/Contact"
import { SectionTable, TableBody, TableHead, TableR, TableRooms, TableDate, TableAmenities, TableContact, TableButton, TableComment} from "../../commons/Table"
import { BoxSelect, ContainerSelect, SelectTitle, ContainerButtons, ContainerFake} from "../../Rooms/Components/RoomsList.js"
import { ButtonFake } from "../../commons/Buttons/ButtonFake.js"
import { ButtonGreen } from "../../commons/Buttons/ButtonGreen.js"
import { ButtonDefault } from "../../commons/Buttons/Button.js"
import { useState } from "react"
import contact from "../Data/contact.json"
import { useNavigate } from "react-router-dom"
export const Contact = () => {

    const [contactList, SetContactList] = useState(contact)
    const navigate = useNavigate();

    const handleNewRoom = () => {
        navigate('/rooms/create')
    }

    return(
        <>
        <section>
        <SectionContact>
            <SliderReviews>
                <BoxReviews>
                    <Review>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Review>
                    <BoxCard>
                        <ImgUser src="/src/assets/Imagenes/user phot.jpg" alt="photoUser" />
                        <BoxName>
                            <NameReview>Kusnaidi Anderson</NameReview>
                            <BoxTime>
                                <TimeReview>4m ago</TimeReview>
                                <BoxIcon>
                                    <CancelIcon/>
                                    <CheckIcon/>
                                </BoxIcon>
                            </BoxTime>
                            
                        </BoxName>
                    </BoxCard>
                </BoxReviews>
                <BoxReviews>
                    <Review>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Review>
                    <BoxCard>
                        <ImgUser src="/src/assets/Imagenes/user phot.jpg" alt="photoUser" />
                        <BoxName>
                            <NameReview>Kusnaidi Anderson</NameReview>
                            <BoxTime>
                                <TimeReview>4m ago</TimeReview>
                                <BoxIcon>
                                    <CancelIcon/>
                                    <CheckIcon/>
                                </BoxIcon>
                            </BoxTime>
                            
                        </BoxName>
                    </BoxCard>
                </BoxReviews>
                <BoxReviews>
                    <Review>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Review>
                    <BoxCard>
                        <ImgUser src="/src/assets/Imagenes/user phot.jpg" alt="photoUser" />
                        <BoxName>
                            <NameReview>Kusnaidi Anderson</NameReview>
                            <BoxTime>
                                <TimeReview>4m ago</TimeReview>
                                <BoxIcon>
                                    <CancelIcon/>
                                    <CheckIcon/>
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
                    {contactList.slice(0,10).map((contact) => (  
                        <TableR key={contact.id}> 
                        <TableDate>{contact.date} <br /> #{contact.id}</TableDate>
                        <TableAmenities></TableAmenities>
                        <TableAmenities>{contact.customer_full_name} <br /> {contact.email} <br /> {contact.phone}</TableAmenities>
                        <TableContact>{contact.comment}</TableContact>
                        <TableButton><ButtonDefault>ARCHIVE</ButtonDefault></TableButton>
                    </TableR>
                    ))}
                </TableBody>
            </TableRooms>   
            <ContainerButtons>
            <ButtonGreen type="primary">Prev</ButtonGreen> 
            <ContainerFake>
                <ButtonFake>1</ButtonFake>
                <ButtonFake>2</ButtonFake>
                <ButtonFake>3</ButtonFake>
                <ButtonFake>4</ButtonFake>
            </ContainerFake>
            <ButtonGreen type='primary' >Next</ButtonGreen> 
            </ContainerButtons>
            
        </SectionTable>
        </section>
        </>
    )
}