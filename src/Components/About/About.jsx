import theme_pattern from '../../../image/assets/theme_pattern.svg';

const About = () => {
  return (
    <div id='about' className="about flex flex-col items-center justify-center gap-8 py-12 sm:py-16 px-4 sm:px-12 md:px-20">
      
      {/* Title Section */}
      <div className="about-title relative text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">About Me</h1>
        
        {/* Theme pattern positioned under the title */}
        <img
          className="absolute left-1/2 transform -translate-x-1/2 top-3 w-24 sm:w-32 md:w-40 opacity-50 mb-8"
          src={theme_pattern}
          alt="Pattern"
        />
      </div>

      {/* About Section (Centered) */}
      <div className="about-right text-center max-w-lg mx-auto">
        <div className="about-para space-y-4">
          <p className="text-sm sm:text-base md:text-lg">I am a passionate web developer specializing in front-end development.</p>
          <p className="text-sm sm:text-base md:text-lg">My passion for frontend development is not only making websites, but also creating great ones.</p>
        </div>
      </div>

      {/* Skills Section (Left Aligned) */}
      <div className="about-skills flex flex-col items-start gap-4 w-full sm:w-2/3 md:w-1/2">
        
        {/* HTML Skill */}
        <div className="about-skill text-right w-full flex items-center">
          <p className="font-medium pr-4 text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 transition-transform duration-300 transform hover:scale-105">HTML - 95%</p>
          <hr
            className="h-1 border-none transition-all duration-300 transform hover:scale-105"
            style={{
              width: '95%',
              background: 'linear-gradient(to right, #ff7e5f, #feb47b)', // Warm gradient
            }}
          />
        </div>

        {/* CSS Skill */}
        <div className="about-skill text-right w-full flex items-center">
          <p className="font-medium pr-4 text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 transition-transform duration-300 transform hover:scale-105">CSS - 90%</p>
          <hr
            className="h-1 border-none transition-all duration-300 transform hover:scale-105"
            style={{
              width: '90%',
              background: 'linear-gradient(to right, #4facfe, #00f2fe)', // Cool gradient
            }}
          />
        </div>

        {/* JavaScript Skill */}
        <div className="about-skill text-right w-full flex items-center">
          <p className="font-medium pr-4 text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 transition-transform duration-300 transform hover:scale-105">JavaScript - 88%</p>
          <hr
            className="h-1 border-none transition-all duration-300 transform hover:scale-105"
            style={{
              width: '88%',
              background: 'linear-gradient(to right, #f7971e, #ffd200)', // Gold gradient
            }}
          />
        </div>

        {/* React Skill */}
        <div className="about-skill text-right w-full flex items-center">
          <p className="font-medium pr-4 text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 transition-transform duration-300 transform hover:scale-105">React - 92%</p>
          <hr
            className="h-1 border-none transition-all duration-300 transform hover:scale-105"
            style={{
              width: '92%',
              background: 'linear-gradient(to right, #00c6ff, #0072ff)', // Blue gradient
            }}
          />
        </div>
      </div>

      {/* Achievements Section (Below Skills Section) */}
      <div className="about-achievements grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 w-full">
        <div className="about-achievement text-center">
          <div className="bg-gradient-to-r from-blue-500 via-sky-500 to-sky-500 text-transparent bg-clip-text text-3xl sm:text-4xl font-bold transition-transform duration-300 transform hover:scale-105">
            3+
          </div>
          <p className="text-sm sm:text-base">MONTHS OF EXPERIENCE</p>
        </div>
        <div className="about-achievement text-center">
          <div className="bg-gradient-to-r from-blue-500 via-sky-500 to-sky-500 text-transparent bg-clip-text text-3xl sm:text-4xl font-bold transition-transform duration-300 transform hover:scale-105">
            7+
          </div>
          <p className="text-sm sm:text-base">PROJECTS COMPLETED</p>
        </div>
        <div className="about-achievement text-center">
          <div className="bg-gradient-to-r from-blue-500 via-violet-500 to-sky-500 text-transparent bg-clip-text text-3xl sm:text-4xl font-bold transition-transform duration-300 transform hover:scale-105">
            5+
          </div>
          <p className="text-sm sm:text-base">HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
