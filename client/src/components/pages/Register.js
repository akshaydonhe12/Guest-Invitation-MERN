import React from 'react'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <div className="register">
        <h1>Sign Up</h1>
         <form>
             <input type="text" name="name" placeholder="name"/>
             <input type="email" name="email" placeholder="email"/>
             <input type="password" name="password" placeholder="password"/>
             <input type="password2" name="password" placeholder="confirm password"/>
             <input type="submit" value="Sign Up"/>
         </form>
         <div className="question">
             <p>Already have an account? {" "}<Link to='/login'>Login</Link></p>
         </div>
    </div>
  )
}

export default Register
