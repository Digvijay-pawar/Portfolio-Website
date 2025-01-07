import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Picture from "./components/Picture";
import Section from "./components/Section";
import Skills from "./components/Skills";
import Projects from './components/Projects'
import Education from "./components/Education";
import Contact from "./components/Contact";

const sections = [
  {
    name: "Projects",
    imgLink: "https://img.icons8.com/?size=100&id=102880&format=png&color=000000"
  },
  {
    name: "Education",
    imgLink: "https://img.icons8.com/?size=100&id=73815&format=png&color=000000"
  },
  {
    name: "Experience",
    imgLink: "https://img.icons8.com/?size=100&id=105385&format=png&color=000000"
  },
  {
    name: "Skills",
    imgLink: "https://img.icons8.com/?size=100&id=58854&format=png&color=000000"
  },
  {
    name: "Testimonials",
    imgLink: "https://img.icons8.com/?size=100&id=vHx1vWgU6OQc&format=png&color=000000"
  },
  {
    name: "Contact me",
    imgLink: "https://img.icons8.com/?size=100&id=2817&format=png&color=000000"
  }
];

const App = () => {
  return (
    <div className="bg-gray-50 bg-gradient-to-r from-blue-500 to-purple-500">
      <Header />
      <div className="flex mx-10">
        <div className="w-full ">
          <div className="flex">
            <Picture />
            <AboutMe />
          </div>
        </div>
      </div>
      <div className="pb-3 flex m-10 mx-20 gap-28">
        {sections.map((section) => {
          return (
            <Section
              key={section.name}
              name={section.name}
              imgLink={section.imgLink}
            />
          );
        })}
      </div>
      <div className="bg-gray-50">
        <Education/>
      </div>
      <div className="p-5">
        <Projects/>
      </div>
      <div className="bg-gray-50 p-5">
        <Skills/>
      </div>
      <div className="bg-gradient-to-r from-blue-500 to-purple-500">
        <Contact/>
      </div>
    </div>
  );
};

export default App;
