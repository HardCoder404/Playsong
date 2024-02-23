import React from 'react'
import { loginEndpoint } from '../../spotify';
import './login.css';

export default function Login() {
  return (
    <div className='login-page'>
      <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="logo-spotify" className='logo' />
      <a href={loginEndpoint}><div className="login-btn">Log-in</div></a>
    </div>
  )
}
