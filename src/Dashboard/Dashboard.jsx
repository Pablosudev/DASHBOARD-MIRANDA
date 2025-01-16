import { ContainerKpis, DashboardSection, Kpis, NumberKpis, DataKpis, IconLogOut, TypeKpis, IconLogIn, IconBed, IconCalendary} from "./components/Dashboard"



export const Dashboard = () => {


    return ( 
        <>
            <DashboardSection>
                <ContainerKpis>
                    <Kpis>
                        <IconBed/>
                        <DataKpis>
                            <NumberKpis>8,461</NumberKpis>
                            <TypeKpis>New Booking</TypeKpis>
                        </DataKpis>
                    </Kpis>
                    <Kpis>
                        <IconCalendary/>
                        <DataKpis>
                            <NumberKpis>963</NumberKpis>
                            <TypeKpis>Scheduled Room</TypeKpis>
                        </DataKpis>
                    </Kpis>
                    <Kpis>
                        <IconLogIn/>
                        <DataKpis>
                            <NumberKpis>753</NumberKpis>
                            <TypeKpis>Check In</TypeKpis>
                        </DataKpis>
                    </Kpis>
                    <Kpis>
                        <IconLogOut/>
                        <DataKpis>
                            <NumberKpis>516</NumberKpis>
                            <TypeKpis>Check Out</TypeKpis>
                        </DataKpis>
                    </Kpis>
                </ContainerKpis>
            </DashboardSection>
        </>
    )
}