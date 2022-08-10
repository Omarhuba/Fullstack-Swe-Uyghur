import React from 'react'
import {Link} from 'react-router-dom'
export const Register = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link> |
      <Link to="/album">Album</Link> |
      <Link to="/register">Resigter</Link> |
        <h1>Register</h1>
    </div>
  )
}
