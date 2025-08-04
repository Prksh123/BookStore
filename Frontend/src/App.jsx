import { useState } from 'react'
import Home from './Home/Home'
import Course from './Course/Course'
import {Route,Routes,Navigate} from 'react-router-dom'
import Signup from './Components/Signup'
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";


function App() {
  const [authUser, setAuthUser] = useAuth();

  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route
      path="/course"
      element={authUser ? <Course /> : <Navigate to="/signup" />}
    />
    <Route path="/signup" element={<Signup/>}/>
    </Routes>
    <Toaster />
    </>
  )
}

export default App
