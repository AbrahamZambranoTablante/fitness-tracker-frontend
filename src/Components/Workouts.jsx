import React from 'react'
import { useState, useEffect } from 'react';

const Workouts = () => {

  const [workouts, setWorkouts] = useState([]);

  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API}/workouts`)
    .then((res) => {
      return res.json()
    })
    .then(resJSON => setWorkouts(resJSON))
    .catch((error) => console.error(error))
  }, [])

  return (
    <>
     <h1>WORKOUTS:</h1> 
     {workouts.map(workout => <p key={workout.id}>{workout.type}</p>)}
     </>
  )
}

export default Workouts