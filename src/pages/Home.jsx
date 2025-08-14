import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaUser } from "react-icons/fa";
import codePic from "../assets/omkar photo.jpg";

function Home() {
	return (
		<div className="h-[100%] mx-auto w-[90%] flex flex-col justify-between">
			<div className="flex-1 gap-6 sm:gap-10 flex flex-col sm:flex-row justify-center items-center">
				<div className="w-full sm:w-auto">
					<img
						src={codePic}
						alt="My Image"
						className="h-[300px]	w-[300px] mx-auto sm:min-h-[450px] sm:min-w-[450px] object-contain rounded-full bg-[#000000]"
					/>
				</div>
				<div className="text-center sm:text-left">
					<p className="text-[80px] sm:text-[130px] font-extrabold">
						OMKAR AWHAD
					</p>
					<div className="w-full text-base sm:text-lg pl-0 sm:pl-18 pr-0 sm:pr-38 text-justify">
						<p>
							I'm Omkar Awhad, an engineering student
							currently in my fourth year, with a strong
							focus on full-stack development.
						</p>
						<p>
							My passion lies in creating innovative web
							solutions that solve real-world problems and
							enhance user experiences.
						</p>
						<p>
							I love building projects from scratch,
							turning ideas into functional applications
							that make a difference.
						</p>
						<p>
							Whether it's experimenting with new features
							or refining code for efficiency, I'm driven
							by the thrill of development and continuous
							learning.
						</p>
						<p>
							Besides coding, I'm a Kabaddi player. I've
							played in district-level tournaments.
						</p>
					</div>
				</div>
			</div>
			<footer className="w-full sm:w-[50%] mx-auto py-4 flex flex-wrap justify-center items-center mt-10 sm:mt-12 gap-6 sm:gap-8 text-2xl sm:text-3xl bg-black text-white">
				<a
					href="https://github.com/OmkarAwhad"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-gray-400 transition-colors"
					aria-label="GitHub"
				>
					<FaGithub />
				</a>
				<a
					href="mailto:omkarawhad3007@gmail.com"
					className="hover:text-gray-400 transition-colors"
					aria-label="Email"
				>
					<FaEnvelope />
				</a>
				<a
					href="https://www.linkedin.com/in/omkarawhad/"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-gray-400 transition-colors"
					aria-label="LinkedIn"
				>
					<FaLinkedin />
				</a>
				<a
					href="https://takeuforward.org/plus/profile/omkarawhad"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-gray-400 transition-colors"
					aria-label="TUF+"
				>
					<FaUser />
				</a>
			</footer>
		</div>
	);
}

export default Home;
