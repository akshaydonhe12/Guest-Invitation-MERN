import React, {useReducer} from 'react';
import GuestContext from './guestContext';
import guestReducer from './guestReducer';
import axios from 'axios'
import {
    TOGGLE_FILTER,
    SEARCH_GUEST,
    CLEAR_SEARCH,
    ADD_GUEST,
    REMOVE_GUEST,
    UPDATE_GUEST,
    EDIT_GUEST,
    CLEAR_EDIT,
    GET_GUEST,
    GUEST_ERROR
} from '../types';

const GuestState = (props) => {
    const initialState = {
        filterGuest: false,
        search:null,
        edit:null,
        guests: [],
        errors:null
    }
  const [state, dispatch] = useReducer(guestReducer, initialState);


   //get Guest

    const getGuests = async() => {
        try {
            const res = await axios.get('/guests')
            dispatch({
                type:GET_GUEST,
                payload:res.data
            })
        } catch (error) {
            dispatch({
             type:GUEST_ERROR,
             payload:error.response.msg
            })
        }
    }

  //ADD_GUEST
  const addGuest = async(guest) => {
    
    const config = {
        'Content-Type': 'application/json'
    }
    try {
        const res = await axios.post('/guests', guest, config)
     dispatch({
        type:ADD_GUEST,
        payload:res.data

    })
    } catch (error) {
        dispatch({
            type:GUEST_ERROR,
            payload:error.response.msg
           })
    }
    
  }

  //REMOVE_GUEST
  const removeGuest = (id) => {
      dispatch({
          type: REMOVE_GUEST,
          payload:id
      })
  }

  //UPDATE_GUEST
  const updateGuest = (guest) => {
    dispatch({
        type: UPDATE_GUEST,
        payload: guest
    })
  }

  //EDIT_GUEST
  const editGuest = (guest) => {
    dispatch({
        type: EDIT_GUEST,
        payload: guest
    })
  }

  //CLEAR_GUEST
  const clearEdit = () => {
    dispatch({
        type: CLEAR_EDIT,
    })
  }

  //TOOGGLE
  const toggleFilter = () => {
      dispatch({
          type: TOGGLE_FILTER
      })
  }

  //SEARCH_GUEST
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
         edit:state.edit,
         getGuests,
         addGuest,
         removeGuest,
         updateGuest,
         editGuest,
         clearEdit,
         toggleFilter,
         searchGuest,
         clearSearch
     }}
   >{props.children}</GuestContext.Provider>
  )
}

export default GuestState
