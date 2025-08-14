import React from "react";

function About() {
	const skills = {
		Frontend: ["HTML5", "CSS", "TailwindCSS", "ReactJS", "Javascript"],
		Backend: ["NodeJS", "Express.js"],
		Databases: ["SQL", "MongoDB"],
		Testing: ["Postman"],
		Others: ["JWT"],
	};

	const education = [
		{
			degree: "Bachelor of Engineering (B.E.)",
			year: "2026",
			institution: "Thakur College Of Engineering and Technology",
			details: "Current CGPI - 9.57",
		},
		{
			degree: "Higher Secondary School Certificate (H.S.C.)",
			year: "2022",
			institution:
				"Maharashtra State Board of Secondary and Higher Secondary Education",
			details: "Percentage - 69.67%",
		},
		{
			degree: "Secondary School Certificate (S.S.C.)",
			year: "2020",
			institution:
				"Maharashtra State Board of Secondary and Higher Secondary Education",
			details: "Percentage - 87.00%",
		},
	];

	return (
		<div className="h-full w-full flex flex-col items-center mt-20 p-4 sm:p-8 bg-black text-white">
			{" "}
			{/* Reduced padding on small screens */}
			<div className="w-full max-w-4xl mb-12">
				<h2 className="text-3xl sm:text-4xl text-center font-semibold mb-6 sm:mb-8">
					Academic Qualifications
				</h2>
				<div className="relative flex flex-col space-y-8 sm:space-y-10 pl-4 sm:pl-0">
					{" "}
					{/* Adjusted padding for mobile */}
					<div className="absolute left-2 sm:left-6 top-0 h-full w-0.5 bg-gray-600" />
					{education.map((edu, i) => (
						<div
							key={i}
							className="flex items-start sm:items-center"
						>
							{" "}
							{/* Aligned to top on mobile for better flow */}
							<div className="z-10 mt-1 sm:mt-0">
								<div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-700" />
							</div>
							<div className="ml-4 sm:ml-8 flex w-full flex-col bg-black border border-gray-500 p-3 sm:p-4 rounded-lg shadow">
								<span className="text-lg sm:text-xl font-bold">
									{edu.degree}
								</span>
								<span className="text-gray-400 text-xs sm:text-sm">
									{edu.year} – {edu.institution}
								</span>
								<span className="text-gray-300 font-medium mt-1 text-sm sm:text-base">
									{edu.details}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="w-full max-w-4xl">
				<h2 className="text-3xl sm:text-4xl font-semibold text-center mb-6">
					Tech Stack
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
					{" "}
					{/* Starts with 1 col, adds more at sm/lg */}
					{Object.entries(skills).map(
						([category, skillList]) => (
							<div
								key={category}
								className="bg-black p-4 sm:p-6 rounded-xl shadow-xl hover:shadow-2xl border border-gray-600 hover:scale-102 transform transition-transform duration-300 hover:border-gray-500"
							>
								<h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
									{category}
								</h3>
								<ul className="space-y-2">
									{skillList.map((item, index) => (
										<li
											key={index}
											className="text-gray-400 bg-gray-800 px-3 sm:px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200 text-xs sm:text-sm leading-relaxed"
										>
											{item}
										</li>
									))}
								</ul>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
}

export default About;
