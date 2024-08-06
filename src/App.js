import React from 'react'
import{Routes, Route} from 'react-router-dom'

import './App.css';
import AuthProvider from './Utils/Utils';

import Home from './Pages/Home/Home';
 import Aboutus from './Pages/About us/Aboutus';
 import Navbar from './components/navbar/Navbar'
import Service from './Pages/services/Service';
import Nomatch from './Pages/Nomatch/Nomatch';
import Ourhealth from './Pages/Health/Ourhealth';
import Sport from './Pages/sport/Sport';
import UserDetails from './Pages/Users/UserDetails'
import Users from './Pages/Users/Users';
import UserAdmin from './Pages/Users/UserAdmin'
import Profile from './Pages/Profile/Profile'
import Login from './Pages/Login/Login';
import {RequiredAuth} from './Utils/RequiredAuth'
 
function App() {
  return (
    <AuthProvider>
            <Navbar/>
            <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='About' element={<Aboutus />}/> 
        <Route path='Services' element={<Service />}>
            <Route index element={<Ourhealth/>} />
            <Route path='Medical' element={<Ourhealth/>} />
            <Route path='Sport' element={<Sport/>} />
        </Route>
        
        <Route path='users' element={<Users/>}>
        <Route path=':userId' element={<UserDetails/>} />     
        <Route path='userAdmin' element={<UserAdmin/>}/>     
                </Route>

       <Route path='/profile' element={<RequiredAuth> <Profile/> </RequiredAuth>}/> 
       <Route path='/login' element={<Login/>}/> 
          
                <Route path='*' element={<Nomatch />}/>
            </Routes>
    
            </AuthProvider>
  
  );
}
export default App
