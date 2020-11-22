import React from 'react'
import './Navbar.css'
import Logo from '../../assets/img/navbar-logo.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <img src={Logo} alt="disk" className="navbar-logo"/>
        <div className="navbar__header">CLOUD</div>
        <div className="navbar__login"><NavLink to="/login">Login</NavLink></div>
        <div className="navbar__registration"><NavLink to="/registration">Sign Up</NavLink></div>
      </div>
    </div>
  )
}

export default Navbar
