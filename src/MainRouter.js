import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Film, Home } from './pages'

function MainRouter() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film/:id" element={<Film />} />
    </Routes>
  )
}

export default MainRouter