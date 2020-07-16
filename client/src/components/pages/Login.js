import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className="login">
        <h1>Login</h1>
         <form>
             <input type="email" name="email" placeholder="email"/>
             <input type="password" name="password" placeholder="password"/>
             <input type="submit" value="Sign In"/>
         </form>
         <div className="question">
             <p>Already have an account? {" "}<Link to='/login'>Sign Up</Link></p>
         </div>
    </div>
  )
}

export default Login
