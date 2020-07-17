import React, {useReducer} from 'react'
import authContext from './authContext'
import authReducer from './authReducer'

const authState = (props) => {

  const initialState = {
      userAuth: null,
      errors: null
  }

  return (
    <authContext.Provider value={{}}>{props.children}</authContext.Provider>
  )
}

export default authState
