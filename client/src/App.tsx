// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar"
// import Home from "./pages/home"
import Login from "./pages/Login";
import Home from "./pages/Home";
import SharedPage from "./pages/SharedContent";
// import Navbar from "./components/Navbar";
import { Dashboard } from "./pages/Dashboard";

function App() {
  // const [count, setCount] = useState(0)

  return (
    
      // <div className="flex h-screen">
      //   <Navbar />
      //   <div className="flex-1 overflow-y-hidden>
      //     <BrowserRouter>
      //     <Routes>
      //       <Route path="/" element={<Home />} />
      //       <Route path="/:slug" element={<SharedPage />} />
      //       <Route path="/login" element={<Login />} />
      //       <Route path="/dash" element={<Dashboard />} />
      //     </Routes>
      //     </BrowserRouter>
      //   </div>
      // </div>
      
    <div className="min-h-screen"> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<SharedPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dash" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>


    // <div className="min-h-screen bg-[#F5F5F5] flex">
    // <Navbar/>
    // <Home/>
    // </div>
  );
}

export default App;
