import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
  const {userId}=useParams();
  console.log(useParams())
    return (
    <div>UserDetails {userId}</div>
  )
}

export default UserDetails 