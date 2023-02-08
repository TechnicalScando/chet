import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Chatbox from './components/Chatbox/Chatbox'

const App = () => {
  return (
    <div>
      <h1>World</h1>
      <Router>
        <Routes>
          <Route path='/' exact element={<Chatbox />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
