import NavbarFB  from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'

function App() {
  return (
    <>
      <NavbarFB />
      <div className="flex h-screen justify-center">
          <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
         </Routes>
      </div>
    </>
  )
}

export default App
