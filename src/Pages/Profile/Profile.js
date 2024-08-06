
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Utils/Utils'


const Profile=()=> {
const auth= useAuth();

 console.log('auth from profile page',auth)
 const navigate=useNavigate();

const handleLogOut=()=>{
  auth.logOut()
  navigate('/')
}
  return (
   
    <div>
   welcome {auth.user}
   <br/>  <br/>
         <button onClick={handleLogOut}> logOut</button>
    </div>
     )
}

export default Profile