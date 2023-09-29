import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GoalList from './components/GoalList'

function App() {
  return <div>
    <h2>Course Goals</h2>
      <GoalList/>
  </div>
}

export default App
