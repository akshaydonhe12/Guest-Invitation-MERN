import React from 'react'

const Navbar = () => {
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
        <li>Hello, Akshay</li>
        <span className="sm-hide">|</span>
        <li>
          <a href="#!">
            <span className="sm-hide">Logout</span>
          </a>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default Navbar
