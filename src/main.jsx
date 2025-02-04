import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RoomsList } from './Rooms/Pages/RoomsList.jsx'
import { Layout } from './commons/Layout/Layout.jsx'
import { Dashboard } from './Dashboard/Dashboard.jsx'
import { LogIn } from './LogIn/Pages/LogIn.jsx'
import { RoomsCreate } from './Rooms/Pages/RoomsCreate.jsx'
import { UserList } from './Users/Page/UsersList.jsx'
import { UserCreate } from './Users/Page/UserCreate.jsx'
import {PrivateRoute} from './LogIn/Components/PrivateRoute.jsx'
import { BookingsDetails } from './Bookings/Pages/BookingsDetails.jsx'
import { BookingsList } from './Bookings/Pages/BookingsList.jsx'
import { Contact } from './Contact/Pages/Contact.jsx'
import { AuthProvider } from './UseContext/AuthContext.jsx'
import { RoomsEdit } from './Rooms/Pages/RoomsEdit.jsx'
import { Provider } from 'react-redux'
import Store from './App/Store.js'
import { UserEdit } from './Users/Page/UserEdit.jsx'
import { BookingsEdit } from './Bookings/Pages/BookingsEdit.jsx'




createRoot(document.getElementById('root')).render(
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
                <Route path='/bookings/details/:id' element = {<BookingsDetails/>}/>
                
              </Route>
              <Route path='/rooms'>
                <Route path='' element={<RoomsList />} />
                <Route path='create' element={<RoomsCreate />} />
                <Route path="/rooms/edit/:id" element={<RoomsEdit />} />
              </Route>
              <Route path='/contact' element ={<Contact/>}/>
              <Route path='/users'>
                <Route path='' element={<UserList />} />
                <Route path='new' element={<UserCreate />} />
                <Route path='/users/edit/:id' element={<UserEdit/>}/>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  </StrictMode>,
)
