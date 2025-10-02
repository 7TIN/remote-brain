// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import Navbar from "./components/Navbar"
import Navbar from "./components/Navbar"
import Home from "./pages/home"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex">
    <Navbar/>
    <Home/>
    </div>
  )
}

export default App 
