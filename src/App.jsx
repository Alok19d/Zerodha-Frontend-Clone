import './App.css' 
import React from 'react'
import {Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Signup from './pages/Signup'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/open-account" element={<Signup/>} />
    </Routes>
  )
}

export default App
