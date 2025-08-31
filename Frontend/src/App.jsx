import { useEffect } from "react";
import Home from './Home/Home'
import Course from './Course/Course'
import {Route,Routes,Navigate} from 'react-router-dom'
import Signup from './Components/Signup'
import { Toaster } from 'react-hot-toast';
import { useUserStore } from './store/useUserStore';


function App() {
  const user = useUserStore((state) => state.user);
  const fetchUser = useUserStore((state) => state.fetchUser);

  useEffect(() => {
    fetchUser(); 
  }, []);

  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route
      path="/course"
      element={user ? <Course /> : <Navigate to="/signup" />}
    />
    <Route path="/signup" element={<Signup/>}/>
    </Routes>
    <Toaster />
    </>
  )
}

export default App
