import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RoomsList } from './Rooms/Pages/RoomsList.jsx'
import { Layout } from './commons/Layout/Layout.jsx'
import { Dashboard } from './Dashboard/Dashboard.jsx'
import { LogIn } from './LogIn/LogIn.jsx'
import { RoomsCreate } from './Rooms/Pages/RoomsCreate.jsx'
import { UserList } from './Users/Page/UsersList.jsx'
import { UserCreate } from './Users/Page/UserCreate.jsx'
import {PrivateRoute} from './LogIn/PrivateRoute.jsx'
import { BookingsDetails } from './Bookings/Pages/BookingsDetails.jsx'
import { BookingsList } from './Bookings/Pages/BookingsList.jsx'
import { Contact } from './Contact/Pages/Contact.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<LogIn />} />
        <Route element={<PrivateRoute element = {<Layout/>}/>}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/bookings'>
            <Route path='' element = {<BookingsList/>}/>
            <Route path='details' element = {<BookingsDetails/>}/>
          </Route>
          <Route path='/rooms'>
            <Route path='' element={<RoomsList />} />
            <Route path='create' element={<RoomsCreate />} />
          </Route>
          <Route path='/contact' element ={<Contact/>}/>
          <Route path='/users'>
            <Route path='' element={<UserList />} />
            <Route path='new' element={<UserCreate />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
