import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import LightRays from "./utils/LightRays";

function App() {
   return (
      <div className="font-mono h-[95%] min-h-screen w-full bg-black text-white relative">
         {/* LightRays Background - lowest z-index */}
         <div
            className="pointer-events-none fixed inset-0"
            style={{
               zIndex: 1,
            }}
         >
            <LightRays
               raysOrigin="bottom-center"
               raysColor="#ffffff"
               raysSpeed={1}
               lightSpread={1.5}
               rayLength={3}
               fadeDistance={2}
               followMouse={true}
               mouseInfluence={0.1}
               noiseAmount={0.1}
               distortion={0.2}
               className="custom-rays pointer-events-none"
            />
         </div>
         
         {/* Navbar - highest z-index */}
         <Navbar className="relative z-50" />
         
         {/* Main Content - above background but below navbar */}
         <div className="relative z-10 pt-20 md:pt-32 h-[95%]">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/projects" element={<Projects />} />
            </Routes>
         </div>
         
         {/* Footer - same level as content */}
         <footer className="relative z-10 mt-5 pb-3 text-xs text-center sm:text-base">
            Made with ❤️ by omkar
         </footer>
      </div>
   );
}

export default App;
