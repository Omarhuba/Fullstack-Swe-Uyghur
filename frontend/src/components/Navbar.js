import React from 'react'
import {Link} from 'react-router-dom'
import '../sass/navbar.scss'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/">Home</Link> |
      <Link to="/about">About</Link> |
      <Link to="/album">Album</Link> |
      <Link to="/register">Resigter</Link> |
    </div>
  )
}
