import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Link} from "react-router-dom"
import './navbar.css'

function Navbar() {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate("/login")
  }
  return (
    <div className='navbar'>
        <div className='navContainer'>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
           <span className='logo'>table</span>
          </Link>
           <div className='navItems'>
              <button className='navButton'>Register</button>
              <button className='navButton' onClick={handleClick}>Login</button>
           </div>
        </div>
    </div>
  )
}

export default Navbar