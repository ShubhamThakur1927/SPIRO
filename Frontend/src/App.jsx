import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import LoginSignup from './pages/LoginSignup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginSignup/>
    </>
  )
}

export default App
