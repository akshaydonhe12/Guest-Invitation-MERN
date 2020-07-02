import {
    TOGGLE_FILTER,
    SEARCH_GUEST,
    CLEAR_SEARCH
} from '../types';

export default (state, {type, payload}) => {
    switch(type) {
        case SEARCH_GUEST:
            const regex = new RegExp(`${payload}`, 'gi')
            return {
                ...state,
                searchGuest: state.guests.filter(guest => guest.name.match(regex))
            }
        
        case CLEAR_SEARCH: 
          return{
              ...state,
              search:null
          }
        
      case TOGGLE_FILTER:
          return {
              ...state,
              filterGuest: !state.filterGuest
          }  
    default:
        return state
    }
}