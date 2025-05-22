import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RoomsList } from './Rooms/Pages/RoomsList.tsx'
import { Layout } from './commons/Layout/Layout.tsx'
import { Dashboard } from './Dashboard/Dashboard.tsx'
import { LogIn } from './LogIn/Pages/LogIn.tsx'
import { RoomsCreate } from './Rooms/Pages/RoomsCreate.tsx'
import { UserList } from './Users/Page/UsersList.tsx'
import { UserCreate } from './Users/Page/UserCreate.tsx'
import {PrivateRoute} from './LogIn/Components/PrivateRoute.tsx'
import { BookingsDetails } from './Bookings/Pages/BookingsDetails.tsx'
import { BookingsList } from './Bookings/Pages/BookingsList.tsx'
import { Contact } from './Contact/Pages/Contact.tsx'
import { AuthProvider } from './UseContext/AuthContext.tsx'
import { RoomsEdit } from './Rooms/Pages/RoomsEdit.tsx'
import { Provider } from 'react-redux'
import Store from './App/Store.ts'
import { UserEdit } from './Users/Page/UserEdit.tsx'
import { BookingsEdit } from './Bookings/Pages/BookingsEdit.tsx'
import React from 'react'
import { BookingsCreate } from './Bookings/Pages/BookingsCreate.tsx'




createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={Store}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='' element={<LogIn />} />
            <Route element={<PrivateRoute element = {<Layout/>}/>}>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/bookings'>
                <Route path='' element = {<BookingsList/>}/>
                <Route path='/bookings/details/:_id' element = {<BookingsDetails/>}/>
                <Route path='/bookings/edit/:_id' element = {<BookingsEdit/>}/>
                <Route path='/bookings/create' element = {<BookingsCreate/>}/>
              </Route>
              <Route path='/rooms'>
                <Route path='' element={<RoomsList />} />
                <Route path='create' element={<RoomsCreate />} />
                <Route path="/rooms/edit/:_id" element={<RoomsEdit />} />
              </Route>
              <Route path='/contact' element ={<Contact/>}/>
              <Route path='/users'>
                <Route path='' element={<UserList />} />
                <Route path='new' element={<UserCreate />} />
                <Route path='/users/edit/:_id' element={<UserEdit/>}/>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  </StrictMode>,
)
