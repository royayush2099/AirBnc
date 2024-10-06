import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import {Link, Navigate, useParams} from 'react-router-dom';

const AccountPage = () => {
  const {ready,user} = useContext(UserContext);

  if(!ready){ // if the user is not ready it will show loading 
    return 'Loading ....'
  }


  if(ready && !user){
    return <Navigate to={'/login'}/>//here this is checked that we are ready or not 
  }

 const {subpage} =  useParams();
 console.log(subpage);
  return(
    <div>
      <nav className='w-full flex  justify-center mt-8 gap-2'>
      <Link  className='py-2 px-6 bg-primary text-white rounded-full' to={'/account'}> My Profile</Link>
        <Link  className='py-2 px-6 ' to={'/account/bookings'}> My Bookings</Link>
        <Link  className='py-2 px-6' to={'/account/places'}>My Accomodations</Link>
      </nav>
      
      {/*and here we are giving the condition that if we are ready or not taking this context from the usercontext and it is related to usercontext */}
    </div>
  )
}

export default AccountPage
