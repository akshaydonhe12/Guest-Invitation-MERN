import React, {useReducer} from 'react';
import GuestContext from './guestContext';
import guestReducer from './guestReducer';
import {
    TOGGLE_FILTER,
    SEARCH_GUEST,
    CLEAR_SEARCH,
    ADD_GUEST
} from '../types';

const GuestState = (props) => {
    const initialState = {
        filterGuest: false,
        search:null,
        guests: [
            {
                id:1,
                name: "Akshay Donhe",
                phone: "98765848250",
                dietary: "Non-Veg",
                isconfirmed: true
            },

            {
                id:2,
                name: "Prashant Paddune",
                phone: "98765848123",
                dietary: "Pescetarians",
                isconfirmed: true
            },

            {
                id:3,
                name: "Mihir Panchal",
                phone: "98765848214",
                dietary: "Vegan",
                isconfirmed: false
            },

            {
                id:4,
                name: "Aryak Bodke",
                phone: "98765848549",
                dietary: "Non-Veg",
                isconfirmed: false
            },
        ]
    }
  const [state, dispatch] = useReducer(guestReducer, initialState);

  const addGuest = (guest) => {
    guest.id = Date.now()
    guest.isconfirmed = false
    dispatch({
        type:ADD_GUEST,
        payload:guest

    })
  }

  const toggleFilter = () => {
      dispatch({
          type: TOGGLE_FILTER
      })
  }

  const searchGuest = (guest) => {
    dispatch({
        type: SEARCH_GUEST,
        payload: guest
    })
}

const clearSearch = () => {
    dispatch({
        type: CLEAR_SEARCH
    })
}


  return (
   <GuestContext.Provider
     value = {{
         guests: state.guests,
         filterGuest:state.filterGuest,
         search:state.search,
         toggleFilter,
         addGuest,
         searchGuest,
         clearSearch
     }}
   >{props.children}</GuestContext.Provider>
  )
}

export default GuestState
