import React from 'react'
import UserData from './components/UsersData/UserData'
import Thankyou from './components/Thankyou/Thankyou'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      {/* <UserData/> */}
      <Routes>
        <Route path='/' element={<UserData/>}/>
        <Route path='/thankyou' element={<Thankyou/>}/>
      </Routes>
    </div>
  )
}

export default App