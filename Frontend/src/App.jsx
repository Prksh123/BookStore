import { useState } from 'react'
import Home from './Home/Home'
import Course from './Course/Course'
import {Route,Routes} from 'react-router-dom'
import Signup from './Components/Signup'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Course" element={<Course />} />
    <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </>
  )
}

export default App
