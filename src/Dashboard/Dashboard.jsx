import { ContainerKpis, DashboardSection, Kpis, NumberKpis, DataKpis, IconLogOut } from "./components/Dashboard"



export const Dashboard = () => {


    return ( 
        <>
            <DashboardSection>
                <ContainerKpis>
                    <Kpis>
                        <IconLogOut/>
                        <DataKpis>
                            <NumberKpis>8,461</NumberKpis>
                            <p>New Booking</p>
                        </DataKpis>
                    </Kpis>
                    <div>
                        <img src="" alt="" />
                        <div>
                            <p>963</p>
                            <p>Scheduled Room</p>
                        </div>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <div>
                            <p>753</p>
                            <p>Check In</p>
                        </div>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <div>
                            <p>516</p>
                            <p>Check Out</p>
                        </div>
                    </div>
                </ContainerKpis>

            </DashboardSection>
        </>
    )
}