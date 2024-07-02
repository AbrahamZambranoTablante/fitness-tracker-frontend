import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Index from "./Pages/Index"
import Show from "./Pages/Show"
import New from "./Pages/New"
import FourOFour from "./Pages/FourOFour"
import Edit from "./Pages/Edit"



function App() {
  

  return (
    <>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/workouts" element={ <Index/> } />
            <Route path="/workouts/:id" element={ <Show /> } />
            <Route path="/workouts/:id/edit" element={ <Edit/> } />
            <Route path="/workouts/new" element={ <New /> } />
            <Route path="*" element={ <FourOFour /> } />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
