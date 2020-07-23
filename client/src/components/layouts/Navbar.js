import React, {useContext, Fragment} from 'react'
import AuthContext from '../../context/authContext/authContext'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { logOut, clearError, userAuth, user} = useContext(AuthContext)

  const onLogout = () => {
    logOut()
    clearError()
  }

const userLinks = (
  <Fragment>
    <li>Hello,{user && user.name}</li>
        <span className="sm-hide">|</span>
        <li>
          <a href="#!" onClick = {onLogout}>
            <span className="sm-hide">Logout</span>
          </a>
        </li>
  </Fragment>
)

const authLinks = (
  <Fragment>
    <li>
      <Link to='/register'>Register</Link>
    </li>
    <span className="sm-hide">|</span>
    <li>
      <Link to='/login'>Login</Link>
    </li>
  </Fragment>
)

  return (
    <div>
     <div className="navbar">
      <div className="logo">
        <h1><i className='fa fa-user-circle-o' />
          Guest Invitation
        </h1>
        <p>Made with MERN STACK</p>
      </div>
      <ul>
        {userAuth ? userLinks : authLinks}
      </ul>
    </div>
    </div>
  )
}

export default Navbar
