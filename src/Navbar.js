import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <div className="navbar">
      <Link to='/'>
        <h1>Blog-s</h1>
      </Link>
      <div className='links'>
        <Link to='/'>
            Home
        </Link>
        <Link to='/create'>
        New Blog
        </Link> 
      </div>
    </div>
  )
}

export default Navbar
