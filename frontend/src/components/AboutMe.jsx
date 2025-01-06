const AboutMe = () => {
    return (
      <div className="my-12 w-25 pr-40 pl-20">
        <h1 className="text-4xl font-bold">About Me</h1>
        <h3 className="text-2xl text-gray-600 mt-2">I'm a Web Developer</h3>
        <p className="mt-5 text-lg text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, sint! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, alias! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam sit modi, animi cumque harum iusto consectetur possimus dolorem. Non tempore labore aspernatur officiis saepe maiores aliquam autem illum ullam exercitationem?
        </p>
        <div className="flex justify-start mt-6">
          <button className="p-2 px-6 text-white font-semibold bg-green-500 shadow rounded-lg transform transition-transform duration-300 hover:scale-110">
            Email Me
          </button>
        </div>
      </div>
    );
  }
  
  export default AboutMe;
  