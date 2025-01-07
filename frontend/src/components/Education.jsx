import { FaSchool, FaGraduationCap, FaUniversity } from "react-icons/fa";

const Education = () => {
    const educationTimeline = [
        {
            label: "Primary Schooling",
            institute: "A.B. Boys Highschool, Chalisgaon",
            date: "2013 - 2019",
            marks: "Percentage: 83%",
            description: "Participated in district-level science exhibitions and secured 1st place in an essay competition.",
            icon: <FaSchool className="text-white text-2xl" />,
        },
        {
            label: "Secondary Schooling",
            institute: "R.V. Junior College, Chalisgaon",
            date: "2019 - 2021",
            marks: "Percentage: 85%",
            description: "Excelled in academics and represented the school in state-level debates.",
            icon: <FaGraduationCap className="text-white text-2xl" />,
        },
        {
            label: "Bachelor's in Computer Engineering",
            institute: "R.C. Patel Institute of Technology, Shirpur",
            date: "2021 - 2025",
            marks: "CGPA: 6.4",
            description: (
                <>
                    Completed a capstone project on{" "}
                    <span className="text-blue-500 font-medium">"Vehicle Rental System"</span> using the MERN stack. Earned certifications in{" "}
                    <span className="text-blue-500 font-medium">"Data Structures"</span> and{" "}
                    <span className="text-blue-500 font-medium">"Full-Stack Development."</span>
                </>
            ),
            icon: <FaUniversity className="text-white text-2xl" />,
        },
    ];

    return (
        <div id="Education" className="p-8 bg-gradient-to-br from-gray-100 to-blue-50 min-h-screen">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
                My Education Journey
            </h2>
            <div className="max-w-4xl mx-auto">
                <ul className="relative">
                    {educationTimeline.map((item, index) => (
                        <li key={index} className="flex items-start mb-10 relative">
                            {/* Icon */}
                            <div className="flex items-center justify-center w-14 h-14 bg-blue-500 rounded-full shadow-md">
                                {item.icon}
                            </div>

                            {/* Line */}
                            {index !== educationTimeline.length - 1 && (
                                <div className="absolute left-7 top-14 h-full w-1 bg-blue-500"></div>
                            )}

                            {/* Box */}
                            <div className="ml-6 bg-white shadow-lg rounded-lg p-5 w-full">
                                <div className="flex justify-between">
                                    <p className="text-gray-700 font-semibold text-lg">{item.label}</p>
                                    <p className="text-gray-500 text-sm italic">{item.date}</p>
                                </div>
                                <p className="text-blue-600 font-medium">{item.institute}</p>
                                <p className="text-gray-500 text-sm mb-2">{item.marks}</p>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Education;
