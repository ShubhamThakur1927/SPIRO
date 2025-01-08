import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import Pagenotfound from './Pages/Pagenotfound'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Pages/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='*' element={<Pagenotfound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
