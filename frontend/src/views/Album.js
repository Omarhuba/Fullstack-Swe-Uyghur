import React from 'react'
import {Link} from 'react-router-dom'


export const Album = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/album">Album</Link>
      <Link to="/register">Resigter</Link>
      <h1>Album</h1>
    </div>
  )
}
