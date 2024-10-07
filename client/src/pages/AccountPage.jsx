import React, { useContext, useState } from 'react'
import { UserContext } from '../UserContext'
import {Link, Navigate, useParams} from 'react-router-dom';
import axios from 'axios';

const AccountPage = () => {
  const [redirect,setRedirect] = useState(null);//this state is made for after logout where to redirect
  const {ready,user,setUser} = useContext(UserContext);//we use all these from usercontext component
  
  let {subpage} =  useParams();
  if(subpage === undefined){
   subpage = 'profile';
  }
   async function logout(){
   await  axios.post('/logout'); //function to handle logout
   setRedirect('/');
   setUser(null);
   
  }

  if(!ready){ // if the user is not ready it will show loading 
    return 'Loading ....'
  }


  if(ready && !user && !redirect){
    return <Navigate to={'/login'}/>//here this is checked that we are ready or not 
  }


 function linkClasses(type=null ){
 let classes ='py-2 px-6';
 if(type === subpage ){ //this function is created for makeing the css pink for three of them and passing them to link tag
  classes += '  bg-primary text-white rounded-full';
 }
 return classes;
 }
 
 if(redirect){
  return <Navigate to = {redirect}/>
 }
  return(
    <div>
      <nav className='w-full flex  justify-center mt-8 gap-2 mb-8'>
      <Link  className={linkClasses('profile')} to={'/account'}> My Profile</Link>
        <Link  className={linkClasses('bookings')} to={'/account/bookings'}> My Bookings</Link>
        <Link  className={linkClasses('places')} to={'/account/places'}>My Accomodations</Link>
      </nav>
      
      {/*and here we are giving the condition that if we are ready or not taking this context from the usercontext and it is related to usercontext */}
    {subpage === 'profile' && (
      <div className="text-center max-w-lg mx-auto">
        Logged in as {user.name}({user.email})<br/>
        <button  onClick={logout} className='primary max-w-sm mt-2'>Logout</button>
      </div>
    )}
    </div>
  )
}

export default AccountPage
