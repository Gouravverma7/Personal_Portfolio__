import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col mx-auto md:items-start sm:items-center md:text-left">
      <h2 className="text-5xl md:text-6xl text-cyan mb-6">About Me</h2>

      <p className="text-white text-justify leading-relaxed">
        Hi, I’m Gourav Verma, a dedicated Full Stack Developer with strong skills
        in Java, JavaScript, HTML, CSS, Bootstrap, React.js and Springboot and SQL. I
        specialize in building efficient, scalable, and user-friendly
        applications by working seamlessly across both frontend and backend. With
        a solid foundation in databases, Rest APIs, and cloud platforms, I focus on
        delivering solutions that combine functionality with great user
        experience. I’m passionate about continuous learning, exploring new
        technologies, and improving my problem-solving abilities. My goal is to
        grow as a versatile developer and contribute to creating impactful
        digital products that make a real difference.
      </p>
      <div className="flex flex-row gap-6">
      <button className="border-4 border-orange-500 rounded-full py-2 px-6 text-xl flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">
        <a href="https://github.com/Gouravverma7/" target="_blank">My Projects </a>
      </button>
            <button className="border-4 border-orange-500 rounded-full py-2 px-6 text-xl flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">
        <a href="./pdf/Gourav_Verma_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </button>
      </div>
    </div>
  );
};

export default AboutMeText;
