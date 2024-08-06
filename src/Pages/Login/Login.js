import React, {useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../Utils/Utils';

const Login=()=> {
const [user,setUser]=useState('');
console.log('from login page inside compoenent',user)
const navigate = useNavigate()
const location=useLocation()
const {login}=useAuth();
const redirectpath=location.state?.path || '/'

const handleLogin=(user)=>{
login(user);
console.log('from login page inside hadnle logn',user)
navigate(redirectpath, {replace:true});
}

  return (
    <div>
    <label>
    Username:{''}
      <input  type='text' value={user} 
      onChange={(e)=>setUser(e.target.value)} />
    </label>
    <button onClick={()=>handleLogin(user)}> Login</button> 
     </div>
  )
}

export default Login