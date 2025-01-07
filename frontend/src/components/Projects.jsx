const Projects = () => {
    const projectDetails = [
        {
            name: "Vehicle Rental System",
            description: "Developed a MERN stack application for renting vehicles with real-time availability tracking.",
            isNew: true
        },
        {
            name: "Movie Recommendation System",
            description: "Built a content-based filtering system using Python to recommend top movies based on user preferences.",
            isNew: false
        },
        {
            name: "Customer Subscription Management System",
            description: "Designed a full-stack solution to manage product subscriptions and generate revenue reports for XYZ Enterprises.",
            isNew: true
        }
    ];

    return (
        <div id="Projects" className="mx-16">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
                My Projects
            </h2>
            <div className="flex space-x-28">
                {projectDetails.map(project => {
                    return (<div className="card bg-base-100 w-96 shadow-xl">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {project.name}
                                <div className={` ${project.isNew ? "" : "hidden"} badge badge-secondary`}>New</div>
                            </h2>
                            <p>{project.description}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline p-4 hover:bg-black hover:text-white">Preview</div>
                                <div className="badge badge-outline p-4 hover:bg-black hover:text-white">Code</div>
                            </div>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    );
}

export default Projects;