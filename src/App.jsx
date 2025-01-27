import './App.css' 
import React from 'react'
import {Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Signup from './pages/Signup'
import ValidatePhone from './pages/ValidatePhone'
import LeadInfo from './pages/LeadInfo.jsx'
import UserProtectWrapper from './components/layout/UserProtectWrapper.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/open-account" element={<Signup />} />
      <Route path="/validate-mobile" element={
        <UserProtectWrapper>
          <ValidatePhone /> 
        </UserProtectWrapper>
      }/>
      <Route path="/lead-info" element={
        <UserProtectWrapper>
          <LeadInfo />
        </UserProtectWrapper>
      }/>
    </Routes>
  )
}

export default App
