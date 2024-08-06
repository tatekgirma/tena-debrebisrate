import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import './Navbar.css'
import { useAuth } from '../../Utils/Utils'
import LOGO from '../LOGO'

function Navbar() {

  const navLinkStyle=({isActive})=>{
    return{
        fontWeight: isActive? 'bold': 'normal',
        fontSize:isActive? '3rem':'1rem'
    } 
  }

  const Auth=useAuth()
    return (
      <div className='nav-container'>
      <Link to='/' > <LOGO/></Link>  
<nav>
        <NavLink to='/' style={navLinkStyle}> Home</NavLink>
        <NavLink to='/About' style={navLinkStyle}> About us</NavLink>
        <NavLink to='/services' style={navLinkStyle}> services</NavLink>
        <NavLink to='/profile' style={navLinkStyle}> Profile</NavLink>
      {
        !Auth.user && (
          <NavLink to='/login' style={navLinkStyle}> Login</NavLink>

        )
      }        
               
       </nav>
  </div>
);
}


export default Navbar