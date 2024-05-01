import React from 'react'

export default function login() {
  return (
    <div className='login'>
        <div className="loginForm">
            <label >User Name </label>
            <input type="text" name="name" id="name" placeholder='enter your username...' />
            <label>Password</label>
            <input type="password" name="password" id="password" placeholder='enter your password...'/>
            <button className='loginButton'>Login</button>
            <button className='registerButton'>Register</button>            
        </div>
    </div>
  )
}
