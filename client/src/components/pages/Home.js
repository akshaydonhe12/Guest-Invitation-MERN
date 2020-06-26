import React from 'react';
import GuestForm from '../guest/GuestForm';
import GuestCounter from '../guest/GuestCounter';
import GuestFilter from '../guest/GuestFilter';
import GuestSearch from '../guest/GuestSearch';





const Home = () => {
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
  </div>
  )
}

export default Home;
