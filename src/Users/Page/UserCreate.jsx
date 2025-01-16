import { ImgUser, ContainerNewUsers, TitleHotel, ContainerImg, AddImg, ContainerInput, BoxArticle, TypeInput, InputName, InputDesk, ContainerButton, IconClose } from "../Components/UsersCreate";
import { ButtonGreen } from "../../commons/ButtonGreen"
export const UserCreate = () => {



    return (
        <>
            <ContainerNewUsers>
            <TitleHotel>HOTEL MIRANDA</TitleHotel>
            <IconClose/>
            <ContainerImg>
                <ImgUser src="/Imagenes/149071.png" alt="img NewUser" />
                <AddImg/>
                <BoxArticle>
                    <div>
                        <TypeInput>Full Name</TypeInput>
                        <InputName type="text" placeholder="Name" /> 
                    </div>
                    <div>
                        <TypeInput>Email</TypeInput>
                        <InputName type="text"placeholder="email@email.com"/> 
                    </div> 
                    <div>
                        <TypeInput>Phone</TypeInput>
                        <InputName type="text" /> 
                    </div> 
                </BoxArticle>
            </ContainerImg> 
            <ContainerInput>
                
                <BoxArticle>
                    <div>
                        <TypeInput>Job</TypeInput>
                        <InputName type="text" /> 
                    </div> 
                    <div>
                        <TypeInput>Job Desk</TypeInput>
                        <InputDesk type="text" /> 
                    </div> 
                </BoxArticle>
                <BoxArticle>
                    <div>
                        <TypeInput>Create Password</TypeInput>
                        <InputName type="password" /> 
                    </div> <div>
                        <TypeInput>Star Date</TypeInput>
                        <InputName type="date" placeholder="0/00/0000"/> 
                    </div> 
                </BoxArticle>
            </ContainerInput>
            <ContainerButton>
                <ButtonGreen>Add User</ButtonGreen>
            </ContainerButton>
            
            </ContainerNewUsers>
        </>
    )
}