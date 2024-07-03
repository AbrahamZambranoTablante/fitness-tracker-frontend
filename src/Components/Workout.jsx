import React from 'react'
import { Link } from 'react-router-dom'

const Workout = ({workout}) => {
  return (
    <Link to={`/workouts/${workout.id}`}><p key={workout.id}>{workout.type}</p></Link>
  )
}

export default Workout