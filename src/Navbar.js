import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className="navbar">
      <h1>Blog-s</h1>
      <div className='links'>
        <a href='/'>Home</a>
        <a href="/create">New Blog</a>
      </div>
    </div>
  )
}

export default Navbar
