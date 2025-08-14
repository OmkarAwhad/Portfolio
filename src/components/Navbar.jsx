import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
	IoDocumentsOutline,
	IoMenuOutline,
	IoCloseOutline,
} from "react-icons/io5";

function Navbar() {
	const [show, setShow] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			if (currentScrollY > lastScrollY && currentScrollY > 50) {
				setShow(false);
			} else {
				setShow(true);
			}
			setLastScrollY(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY]);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<>
			{/* Desktop/Tablet Navbar - unchanged */}
			<div
				className={`w-full fixed hidden md:flex flex-row justify-evenly py-10 text-2xl font-extrabold transition-all duration-300 items-center z-50 ${
					show
						? "opacity-100 translate-y-0"
						: "opacity-0 -translate-y-full pointer-events-none"
				}`}
			>


				<NavLink
					to={"/"}
					className={({ isActive }) =>
						isActive ? "border-b" : ""
					}
				>
					Home
				</NavLink>
				<NavLink
					to={"/projects"}
					className={({ isActive }) =>
						isActive ? "border-b" : ""
					}
				>
					Projects
				</NavLink>
				<NavLink
					to={"/about"}
					className={({ isActive }) =>
						isActive ? "border-b" : ""
					}
				>
					About Me
				</NavLink>
				<a
					href="https://drive.google.com/file/d/13L8uPzVXh4VgIa33FS3jCYJLJR8KTYtV/view?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center px-3 font-semibold gap-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
				>
					<IoDocumentsOutline /> Resume
				</a>
			</div>

			{/* Mobile Navbar */}
			<div className="md:hidden">
				<div
					className={`w-full fixed top-0 left-0 flex justify-between items-center p-4 bg-black bg-opacity-90 backdrop-blur-sm z-50 transition-all duration-300 ${
						show
							? "opacity-100 translate-y-0"
							: "opacity-0 -translate-y-full pointer-events-none"
					}`}
				>
					<div className="flex items-center gap-3">
						<span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
							Portfolio
						</span>
					</div>

					<button
						onClick={toggleMobileMenu}
						className="text-2xl p-2 hover:bg-gray-700 rounded-md transition-colors duration-200"
					>
						{isMobileMenuOpen ? (
							<IoCloseOutline />
						) : (
							<IoMenuOutline />
						)}
					</button>
				</div>

				<div
					className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
						isMobileMenuOpen
							? "opacity-100"
							: "opacity-0 pointer-events-none"
					}`}
					onClick={closeMobileMenu}
				/>

				<div
					className={`fixed top-0 left-0 h-full w-80 bg-black bg-opacity-95 backdrop-blur-lg z-50 transform transition-transform duration-300 ease-in-out ${
						isMobileMenuOpen
							? "translate-x-0"
							: "-translate-x-full"
					}`}
				>
					<div className="flex flex-col p-6 pt-8 space-y-6">
						<div className="flex flex-col items-center pb-6 border-b border-gray-700">
							<h3 className="text-xl font-bold text-white">
								Omkar Awhad
							</h3>
							<p className="text-sm text-gray-400">
								Full Stack Developer
							</p>
						</div>

						<NavLink
							to={"/"}
							onClick={closeMobileMenu}
							className={({ isActive }) =>
								`text-xl font-extrabold py-3 px-2 border-l-4 border-transparent transition-all duration-200 hover:border-blue-400 hover:bg-gray-800/50 rounded-r-md ${
									isActive
										? "text-blue-400 border-blue-400 bg-gray-800/30"
										: "text-gray-300 hover:text-white"
								}`
							}
						>
							Home
						</NavLink>
						<NavLink
							to={"/projects"}
							onClick={closeMobileMenu}
							className={({ isActive }) =>
								`text-xl font-extrabold py-3 px-2 border-l-4 border-transparent transition-all duration-200 hover:border-blue-400 hover:bg-gray-800/50 rounded-r-md ${
									isActive
										? "text-blue-400 border-blue-400 bg-gray-800/30"
										: "text-gray-300 hover:text-white"
								}`
							}
						>
							Projects
						</NavLink>
						<NavLink
							to={"/about"}
							onClick={closeMobileMenu}
							className={({ isActive }) =>
								`text-xl font-extrabold py-3 px-2 border-l-4 border-transparent transition-all duration-200 hover:border-blue-400 hover:bg-gray-800/50 rounded-r-md ${
									isActive
										? "text-blue-400 border-blue-400 bg-gray-800/30"
										: "text-gray-300 hover:text-white"
								}`
							}
						>
							About Me
						</NavLink>
						<a
							href="https://drive.google.com/file/d/13L8uPzVXh4VgIa33FS3jCYJLJR8KTYtV/view?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
							onClick={closeMobileMenu}
							className="flex items-center justify-center px-4 py-4 font-bold gap-3 rounded-lg bg-gray-700 transition-all duration-200 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] mt-4"
						>
							<IoDocumentsOutline className="text-xl" />
							Download Resume
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Navbar;
