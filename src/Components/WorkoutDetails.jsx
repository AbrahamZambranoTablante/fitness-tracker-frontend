import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const WorkoutDetails = () => {
  let navigate = useNavigate(); 

  const [workout, setWorkout] = useState({
    "type": "",
"durationInMinutes": 0,
"caloriesBurned": 0,
"date": ""
  });

  const API = import.meta.env.VITE_API_URL;

  const { id } = useParams();

  useEffect(() => {
    fetch(`${API}/workouts/${id}`)
    .then(res => res.json())
    .then(resJSON => setWorkout(resJSON))
    .catch(() => {
      navigate("/not-found")
    })
  }, [id, navigate])

  return (
    <>
      <h1>WorkoutDetails</h1>
      <h2>Workout:<br/> {workout.type}</h2>
      <p>Minutes: {workout.durationInMinutes}</p>
      <p>Calories Burned: {workout.caloriesBurned}</p>
    </>
  )
}

export default WorkoutDetails