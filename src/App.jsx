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
			<div
				className="pointer-events-none"
				style={{
					width: "100%",
					height: "100%",
					position: "fixed",
					top: 0,
					left: 0,
					zIndex: 0,
				}}
			>
				<LightRays
					raysOrigin="center"
					raysColor="#ffffff"
					raysSpeed={1.5}
					lightSpread={1.5}
					rayLength={1.2}
					fadeDistance={0.8}
					followMouse={true}
					mouseInfluence={0.1}
					noiseAmount={0.1}
					distortion={0.05}
					className="custom-rays pointer-events-none"
				/>
			</div>
			<Navbar className="relative z-20" />
			<div className="pt-30 h-[95%] z-10">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
				</Routes>
			</div>
      <footer className="mt-5 pb-3 text-xs text-center sm:text-base">Made with ❤️ by omkar</footer>
		</div>
	);
}

export default App;
