import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

  
    <NavLink>
        <li>Home</li>
    </NavLink>
        <NavLink>
        <li>All Doctors</li>
    </NavLink>
        <NavLink>
        <li>About</li>
    </NavLink>
        <NavLink>
        <li>Contact</li>
    </NavLink>
  
  <div>
    <button>Create account</button>
  </div>
    </div>
  )
}

export default Navbar