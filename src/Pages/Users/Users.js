import React from 'react'
import { Outlet } from 'react-router-dom'
 const Users = () => {
  return (
   
    <div>
    
        <div>Users 1</div>
        <div>Users 2</div>
        <div>Users 3</div>
        <Outlet/>
    </div>
    

  )
}    

export default Users
