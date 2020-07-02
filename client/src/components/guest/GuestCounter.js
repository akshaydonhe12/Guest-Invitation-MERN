import React, {useContext} from 'react';
import GuestContext from '../../context/guestContext/guestContext';

const GuestCounter = () => {
  const {guests} = useContext (GuestContext);
  const totalInvited = guests.length
  const attending = guests.filter(guests => guests.isconfirmed)
  const totalAttending = attending.length
  const invitedByDiet = (type) => guests.filter(guest => guest.dietary === type).length
  const attendingdByDiet = (type) => attending.filter(guest => guest.dietary === type).length



  return (
    <div>
    <table>
      <tbody>
        <tr>
          <th>Guest</th>
          <th>Invited</th>
          <th>Attending</th>
        </tr>
        <tr>
          <th>Non-Veg</th>
          <td>{invitedByDiet ('Non-Veg')}</td>
          <td>{attendingdByDiet ('Non-Veg')}</td>
        </tr>
        <tr>
          <th>Vegan</th>
          <td>{invitedByDiet ('Vegan')}</td>
          <td>{attendingdByDiet ('Vegan')}</td>
        </tr><tr>
          <th>Pescetarians</th>
          <td>{invitedByDiet ('Pescetarians')}</td>
          <td>{attendingdByDiet ('Pescetarians')}</td>
        </tr>
        <tr>
          <th>Total</th>
          <td>{totalInvited}</td>
          <td>{totalAttending}</td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default GuestCounter
