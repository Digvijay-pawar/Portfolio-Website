const Skills = () => {
    return (
        <div className="m-12">
            <h1 className="text-2xl font-semibold">Skills</h1>
            <ul className="mt-5">
                <List link="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" text="HTML5"/>
                <List link="https://img.icons8.com/?size=100&id=3BTBsJs5myRy&format=png&color=000000" text="CSS3"/>
                <List link="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" text="Javascript"/> 
                <List link="https://img.icons8.com/?size=100&id=123603&format=png&color=000000" text="ReactJS"/>
                <List link="https://img.icons8.com/?size=100&id=54087&format=png&color=000000" text="Node.js"/>
                <List link="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" text="Express.js"/>
                <List link="https://img.icons8.com/?size=100&id=13441&format=png&color=000000" text="Python"/>
                <List link="https://img.icons8.com/?size=100&id=AqYCfGyGXlO7&format=png&color=000000" text="Flask"/>
                <List link="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" text="MongoDB"/>
                <List link="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" text="MySQL"/>
            </ul>
        </div>
    );
}

export default Skills;

const List = ({ link, text }) => {
    return (
        <li className="flex space-x-4 items-center">
            <img src={link} width={"50px"} alt="" />
            <span className="text-xl font-medium">{text}</span>
        </li>
    )
}