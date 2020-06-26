import React from 'react';
import GuestForm from '../guest/GuestForm';
import GuestCounter from '../guest/GuestCounter';


const Home = () => {
  return (
    <div className="app-container">
      <div className="main">
      <GuestForm />
      <GuestCounter />
      </div>
    </div>
  )
}

export default Home;
