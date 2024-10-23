import theme_pattern from '../../../image/assets/theme_pattern.svg'

const About = () => {
  return (
    <div id='about' className="about flex flex-col items-center justify-center gap-8 m-[80px_170px]">
      
      {/* Title Section */}
      <div className="about-title relative text-center">
        <h1 className="text-4xl font-bold">About Me</h1>
        
        {/* Theme pattern positioned under the title */}
        <img
          className="absolute left-1/2 transform -translate-x-1/2 top-3 w-40 opacity-70"
          src={theme_pattern}
          alt="Pattern"
        />
      </div>

      {/* About Section (Centered) */}
      <div className="about-right text-center">
        <div className="about-para">
          <p>I am a passionate web developer specializing in front-end development.</p>
          <p>My passion for frontend development is not only making websites, but also creating great ones.</p>
        </div>
      </div>

      {/* Skills Section (Left Aligned) */}
      <div className="about-skills flex flex-col items-start gap-4 w-1/2 ">
        {/* HTML & CSS Skill */}
        <div className="about-skill text-right w-full">
          <p className="font-medium pr-4">HTML & CSS</p>
          <hr className="w-full bg-gradient-to-r from-blue-500 via-sky-500 to-yellow-500 h-1 border-none transition-transform duration-300 transform hover:scale-105" />
        </div>

        {/* React JS Skill */}
        <div className="about-skill text-right w-full">
          <p className="font-medium pr-4">React JS</p>
          <hr className="w-full bg-gradient-to-r from-blue-500 via-sky-500 to-yellow-500 h-1 border-none transition-transform duration-300 transform hover:scale-105" />
        </div>

        {/* JavaScript Skill */}
        <div className="about-skill text-right w-full">
          <p className="font-medium pr-4">JavaScript</p>
          <hr className="w-full bg-gradient-to-r from-blue-500 via-sky-500 to-yellow-500 h-1 border-none transition-transform duration-300 transform hover:scale-105" />
        </div>

        {/* Next JS Skill */}
        <div className="about-skill text-right w-full">
          <p className="font-medium pr-4">Next JS</p>
          <hr className="w-full bg-gradient-to-r from-blue-500 via-sky-500 to-yellow-500 h-1 border-none transition-transform duration-300 transform hover:scale-105" />
        </div>
      </div>

      {/* Achievements Section (Below Skills Section) */}
      <div className="about-achievements grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 w-full">
        <div className="about-achievement text-center">
          <div className="bg-gradient-to-r from-blue-500 via-sky-500 to-sky-500 text-transparent bg-clip-text text-4xl font-bold transition-transform duration-300 transform hover:scale-105">
            3+
          </div>
          <p>MONTHS OF EXPERIENCE</p>
        </div>
        <div className="about-achievement text-center">
          <div className="bg-gradient-to-r from-blue-500 via-sky-500 to-sky-500 text-transparent bg-clip-text text-4xl font-bold transition-transform duration-300 transform hover:scale-105">
            7+
          </div>
          <p>PROJECTS COMPLETED</p>
        </div>
        <div className="about-achievement text-center">
          <div className="bg-gradient-to-r from-blue-500 via-violet-500 to-sky-500 text-transparent bg-clip-text text-4xl font-bold transition-transform duration-300 transform hover:scale-105">
            5+
          </div>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
}

export default About;
