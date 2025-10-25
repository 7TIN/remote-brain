import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SharedPage from "./pages/SharedContent";
// import Navbar from "./components/Navbar";
import { Dashboard } from "./pages/Dashboard";
import { Testing } from "./pages/Testing";

function App() {
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
      
    <div className="min-h-screen w-full"> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<SharedPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/test" element={<Testing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
