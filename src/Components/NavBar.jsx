import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      NavBar
      <button className=""><Link to="/workouts/new">New Workout</Link></button>
    </>
  )
}

export default NavBar