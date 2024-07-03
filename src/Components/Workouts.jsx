import React from 'react'
import { useState, useEffect } from 'react';
import Workout from "./Workout"

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
     {workouts.map(workout => <Workout  workout={workout}/> )}
     </>
  )
}

export default Workouts