import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/authContext/authContext'
import GuestForm from '../guest/GuestForm';
import GuestCounter from '../guest/GuestCounter';
import GuestFilter from '../guest/GuestFilter';
import GuestSearch from '../guest/GuestSearch';
import Guests from '../guest/Guests';


const Home = () => {
  const {getUser}= useContext(AuthContext)
  useEffect(()=>{
    getUser()
    
  },[])
  return (
  <div className="app-container">
    <div className="main">
       <div className="filter">
          <GuestFilter />
          <GuestSearch />
        </div> 
          <GuestForm />
          <GuestCounter />
    </div>
          <Guests />
  </div>
  )
}

export default Home;
