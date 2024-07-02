import React, { useState } from 'react'

const WorkoutNewForm = () => {

  const [workout, setWorkout] = useState({})

  return (
    <>
      WorkoutNewForm
      <form className="">
        <label htmlFor="" className="">Type: </label>
        <input id="type" type="text" value={WorkoutNewForm.type} required/>
        <label htmlFor="" className="">Duration: </label>
        <input id="duration" type="number" value={workout.durationInMinutes} required/>
        <label htmlFor="" className="">Calories Burned: </label>
        <input id="caloriesBurned" type="number" value={workout.caloriesBurned} required/>
        <label htmlFor="" className="">Date: </label>
        <input id="date" type="text" value={workout.date} required/>
      </form>
    </>
  )
}

export default WorkoutNewForm