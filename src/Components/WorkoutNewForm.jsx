import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const WorkoutNewForm = () => {

  const navigate = useNavigate();

  const API = import.meta.env.VITE_API_URL;

  const [workout, setWorkout] = useState({
    type: "", 
    durationInMinutes: 0,
    caloriesBurned: 0,
    Date: ""
  });
  
  function handleTextChange (e) {
    setWorkout({...workout, [e.target.id]: e.target.value})
  }

  function addWorkout () {
    fetch(`${API}/workouts`, {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(() => {
      navigate("/workouts")
    })
    .catch(error => console.error(error))
  }

  function handleSubtmit (e) {
    e.preventDefault();
    addWorkout();
    setWorkout({
      type: "", 
      durationInMinutes: 0,
      caloriesBurned: 0,
      Date: ""
    })

  }

  return (
    <>
      Add A New Workout
      <form className="" onSubmit={handleSubtmit}>
        <label htmlFor="type" className="">Type: </label>
        <input id="type" type="text" value={WorkoutNewForm.type} onChange={handleTextChange} required/>
        <label htmlFor="durationInMinutes" className="">Duration: </label>
        <input id="durationInMinutes" type="number" value={workout.durationInMinutes} onChange={handleTextChange} required/>
        <label htmlFor="caloriesBurned" className="">Calories Burned: </label>
        <input id="caloriesBurned" type="number" value={workout.caloriesBurned} onChange={handleTextChange} required/>
        <label htmlFor="date" className="">Date: </label>
        <input id="date" type="text" value={workout.date} onChange={handleTextChange} required/>
      </form>
    </>
  )
}

export default WorkoutNewForm