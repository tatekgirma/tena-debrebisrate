import React from 'react'
// import { Fragment } from 'react'
import { NavLink, Outlet } from 'react-router-dom'


function Service() {
  return (
 <>

    <h1> Services we Provide</h1>

     {/*
//     <div>
//     <div className='wrapper-services'>
//     #Medical services
//     <h1>Available Services</h1>
// <div className='contianer-service'>

// <div className='health'> 

// <div className='container-testing'> 
// <h2>Medical Testing </h2>
// <p> Aliquam erat volutpat. Duis aliquam lorem in
//  enim vestibulum, non finibus dui pulvinar. Aenean
//   orci sem, ultricies vel quam in, cursus molestie velit. 
//   Cras porttitor orci quis tempus vehicula. Maecenas posuere 
//   lacus ornare sem dictum elementum. Integer feugiat metus id 
//   metus iaculis sodales. Vestibulum eu gravida mi. Cras 
//   fringilla felis sem, a mattis arcu imperdiet ac. Curabitur 
//   eu ligula et magna molestie rutrum in in lorem.
// rhoncus imperdiet sit amet a augue. Cras a commodo ante.</p>
// </div>

// <div className='conatiner-consultation'> 
// <h2>Medical Testing </h2>
// <p> Aliquam erat volutpat. Duis aliquam lorem in
//  enim vestibulum, non finibus dui pulvinar. Aenean
//   orci sem, ultricies vel quam in, cursus molestie velit. 
//   Cras porttitor orci quis tempus vehicula. Maecenas posuere 
//   lacus ornare sem dictum elementum. Integer feugiat metus id 
//   metus iaculis sodales. Vestibulum eu gravida mi. Cras 
//   fringilla felis sem, a mattis arcu imperdiet ac. Curabitur 
//   eu ligula et magna molestie rutrum in in lorem.
// rhoncus imperdiet sit amet a augue. Cras a commodo ante.</p>
// </div>



// </div>


// #sports
// <div className='sports'>
   
//    <h2>sporting Event</h2>
//    <img src="" alt=" img sporting event"/>
//    <p> we have sporting event entitled Emahus Mengedegnoch</p>
   
// </div>


// </div>

//     </div>
     
    
    
//     </div> */}
<nav>
<NavLink to='Medical'>Medical Services</NavLink>
<NavLink to='Sport'> Sports Activities</NavLink>
</nav>
<Outlet/>
</>
  )
}

export default Service