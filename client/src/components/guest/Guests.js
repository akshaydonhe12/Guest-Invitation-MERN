import React, {useContext} from 'react';
import GuestContext from '../../context/guestContext/guestContext';
import Guest from './Guest';

const Guests = () => {
  const {guests, filterGuest} = useContext(GuestContext);
  return (
    <div className="guests">
      {guests.filter(guest => !filterGuest || guest.isconfirmed).map(guest => <Guest key={guests.id} guest={guest} />)}
    </div>
  )
}

export default Guests
