import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Notes from './Pages/Notes'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Notes" element={<Notes />} />
    </Routes>
  )
}

export default App