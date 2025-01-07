const Skills = () => {
    return (
        <div id="Skills" className="m-12 p-6 rounded-lg">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Skills</h1>
            <div className="grid grid-cols-2 gap-8">
                <SkillWithRating
                    link="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
                    text="HTML5"
                    rating={4}
                />
                <SkillWithRating
                    link="https://img.icons8.com/?size=100&id=3BTBsJs5myRy&format=png&color=000000"
                    text="CSS3"
                    rating={3}
                />
                <SkillWithRating
                    link="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
                    text="Javascript"
                    rating={5}
                />
                <SkillWithRating
                    link="https://img.icons8.com/?size=100&id=123603&format=png&color=000000"
                    text="ReactJS"
                    rating={4}
                />
                <SkillWithRating
                    link="https://img.icons8.com/?size=100&id=54087&format=png&color=000000"
                    text="Node.js"
                    rating={4}
                />
                <SkillWithRating
                    link="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                    text="Express.js"
                    rating={3}
                />
                <SkillWithRating
                    link="https://img.icons8.com/?size=100&id=13441&format=png&color=000000"
                    text="Python"
                    rating={4}
                />
                <SkillWithRating
                    link="https://img.icons8.com/?size=100&id=AqYCfGyGXlO7&format=png&color=000000"
                    text="Flask"
                    rating={3}
                />
                <SkillWithRating
                    link="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                    text="MongoDB"
                    rating={4}
                />
                <SkillWithRating
                    link="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                    text="MySQL"
                    rating={4}
                />
            </div>
        </div>
    );
};

const SkillWithRating = ({ link, text, rating }) => {
    return (
        <div className="flex items-center space-x-4 hover:bg-gray-100 p-4 rounded-md transition duration-200 ease-in-out">
            <img src={link} width={"50px"} alt={text} />
            <span className="text-lg font-medium text-gray-700">{text}</span>
            <div className="flex space-x-1 ml-4">
                {[...Array(5)].map((_, index) => (
                    <Star key={index} filled={index < rating} />
                ))}
            </div>
        </div>
    );
};

const Star = ({ filled }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 17.27 18.18 21 15.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 8.46 13.97 5.82 21 12 17.27" />
        </svg>
    );
};

export default Skills;
