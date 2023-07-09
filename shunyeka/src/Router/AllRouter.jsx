

import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AddUser from '../Components/AddUser'
import UserList from '../Components/UserList'

const AllRouter = () => {
  return (
    <div>

      <Routes>
            <Route path="/" element={<AddUser />} />


            <Route path="/userdetails" element={<UserList/>}/>

            </Routes>
    </div>
  )
}

export default AllRouter