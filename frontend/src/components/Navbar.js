import React from 'react'
import {Link} from 'react-router-dom'
import '../Modules/navbar.scss'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/">Home</Link> |
      <Link to="/products">Products</Link> |
      <Link to="/album">Album</Link> |
      <Link to="/register">Resigter</Link> |
    </div>
  )
}
