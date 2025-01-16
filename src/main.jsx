import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RoomsList} from './Rooms/Pages/RoomsList.jsx'
import { Layout } from './commons/Layout.jsx'
import { Dashboard } from './Dashboard/Dashboard.jsx'
import {LogIn} from './LogIn/LogIn.jsx'
import { RoomsCreate } from './Rooms/Pages/RoomsCreate.jsx'
import { UserList } from './Users/Page/UsersList.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<LogIn/>}/>
        <Route element = {<Layout/>}>
        <Route path='/dashboard' element = {<Dashboard/>}/>
          <Route path='/rooms'>
            <Route path='' element= {<RoomsList/>}/>
            <Route path='create' element = {<RoomsCreate/>}/>
          </Route>
          <Route path='/users'>
            <Route path='' element = {<UserList/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
