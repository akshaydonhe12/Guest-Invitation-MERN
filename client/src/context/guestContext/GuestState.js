import React, {useReducer} from 'react';
import GuestContext from './guestContext';
import guestReducer from './guestReducer';

const GuestState = (props) => {
    const initialState = {
        guests: [
            {
                id:1,
                name: "Akshay Donhe",
                phone: "98765848250",
                dietary: "non-veg",
                isconfirmed: true
            },

            {
                id:2,
                name: "Mihir Panchal",
                phone: "98765848123",
                dietary: "veg",
                isconfirmed: false
            },
        ]
    }
  const [state, dispatch] = useReducer(guestReducer, initialState);

  return (
   <GuestContext.Provider
     value = {{
         guests: state.guests
     }}
   >{props.children}</GuestContext.Provider>
  )
}

export default GuestState
