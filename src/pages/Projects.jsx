import React from "react";
import DevDetectiveImage from "../assets/DevDetectiveImage.png";
import ForeverImage from "../assets/ForeverImage.png";
import MovieDBImage from "../assets/MovieDBImage.png";
import TuitionHubImage from "../assets/TuitionHubImage.png";
import WeatherAppImage from "../assets/WeatherAppImage.png";

function Projects() {
	const projectList = [
		{
			id: 1,
			image: TuitionHubImage,
			title: "TuitionHub",
			description: `Developed a full-stack tuition management system using the MERN stack.\nImplemented features like student registration, lecture scheduling, and attendance tracking.\nAdded secure login functionality and homework management for both students and teachers.`,
			githubSource: "https://github.com/OmkarAwhad/TutionHub",
			liveLink: "https://tution-hub-ikxz.vercel.app/",
		},
		{
			id: 2,
			image: ForeverImage,
			title: "Forever",
			description: `Built a full-stack e-commerce clothing website using the MERN stack.\nImplemented core features like product listings, user login/signup, and cart functionality.\nIntegrated secure online payments using Stripe and Razorpay.`,
			githubSource: "https://github.com/OmkarAwhad/Ecomm---Forever",
			liveLink: "https://ecomm-forever-frontend.vercel.app/",
		},
		{
			id: 3,
			image: MovieDBImage,
			title: "Movie DB",
			description: `Developed a responsive movie discovery website using React.js.\nImplemented features like trending movie listings, detailed info pages, and YouTube trailer integration.\nFocused on clean UI, dynamic routing, and mobile-friendly designionr better user engagement.`,
			githubSource: "https://github.com/OmkarAwhad/Movie_DB_App",
			liveLink: "https://movie-db-webapp.vercel.app/",
		},
		{
			id: 4,
			image: WeatherAppImage,
			title: "Weather App",
			description: `A simple weather application to check current conditions and forecasts.`,
			githubSource: "https://github.com/OmkarAwhad/WeatherApp",
			liveLink: "https://omkarawhad.github.io/WeatherApp/",
		},
		{
			id: 5,
			image: DevDetectiveImage,
			title: "Dev Detective",
			description: `A website to search GitHub profiles.`,
			githubSource: "https://github.com/OmkarAwhad/DevDetective",
			liveLink: "https://omkarawhad.github.io/DevDetective/",
		},
	];

	return (
		<div className="h-full w-full flex flex-col mt-20 items-center p-4 sm:p-8 bg-black text-white">
			{" "}
			{/* Reduced padding on mobile */}
			<h1 className="text-4xl sm:text-5xl font-bold mb-6 sm:mb-8 tracking-wide">
				My Projects
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
				{projectList.map((project) => (
					<div
						key={project.id}
						className="bg-black p-4 sm:p-6 rounded-xl shadow-xl hover:shadow-2xl border border-gray-700 hover:scale-102 transform transition-transform duration-300 hover:border-gray-500"
					>
						<img
							src={project.image}
							alt={project.title}
							className="w-full h-32 sm:h-48 object-cover rounded-lg mb-4"
						/>
						<h2 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
							{project.title}
						</h2>
						<p className="text-gray-400 mb-4 whitespace-pre-line text-xs sm:text-sm leading-relaxed">
							{project.description}
						</p>
						<div className="flex flex-col sm:flex-row justify-between mt-4 gap-2 sm:gap-0">
							<a
								href={project.githubSource}
								target="_blank"
								rel="noopener noreferrer"
								className="px-3 sm:px-4 py-2 bg-gray-800 text-blue-300 rounded-md hover:bg-blue-700 hover:text-white transition-colors duration-200 font-medium text-center"
							>
								GitHub
							</a>
							<a
								href={project.liveLink}
								target="_blank"
								rel="noopener noreferrer"
								className="px-3 sm:px-4 py-2 bg-gray-800 text-blue-300 rounded-md hover:bg-blue-700 hover:text-white transition-colors duration-200 font-medium text-center"
							>
								Live Demo
							</a>
						</div>
					</div>
				))}
				<div className="bg-black p-4 sm:p-6 rounded-xl shadow-xl hover:shadow-2xl border border-gray-700 hover:scale-102 transform transition-transform duration-300 flex flex-col items-center justify-center hover:border-gray-500">
					<h2 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
						Explore More projects
					</h2>
					<p className="text-gray-400 text-center mb-4 whitespace-pre-line text-xs sm:text-sm leading-relaxed">
						Discover more exciting projects and ideas I’ve
						worked on. Click below to dive deeper into my
						GitHub repository!
					</p>
					<a
						className="text-blue-400"
						href="https://github.com/OmkarAwhad"
					>
						Visit my github
					</a>
				</div>
			</div>
		</div>
	);
}

export default Projects;
