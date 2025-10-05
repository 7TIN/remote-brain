// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Navbar from "./components/Navbar"
// import Home from "./pages/home"
import Login from "./pages/Login"
import Home from "./pages/home"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    // <div className="min-h-screen bg-[#F5F5F5] flex">
    // <Navbar/>
    // <Home/>
    // </div>
  )
}

export default App 
