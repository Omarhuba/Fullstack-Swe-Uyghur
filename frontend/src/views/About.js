import React from 'react'
import {Link} from 'react-router-dom'
import '../sass/About.scss'




export const About = () => {
  return (
    <div className='about'>
      <div className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/album">Album</Link>
        <Link to="/register">Resigter</Link>
      </div>
      <h1>About</h1>
    </div>
  )
}
