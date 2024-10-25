import profile_img from '../../../image/hasan.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id="home" className="hero flex flex-col items-center text-center py-8 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Profile Image */}
      <img 
        className="h-24 w-24 sm:h-32 sm:w-32 rounded-full object-cover mb-4 transition-all duration-300" 
        src={profile_img} 
        alt="Profile" 
      />

      {/* Title and Description */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-r from-blue-700 to-blue-400 text-transparent bg-clip-text">
          I'm MD: Kamrul Hasan
        </span>
        , frontend developer based in Bangladesh
      </h1>

      <p className="text-base sm:text-lg md:text-xl mt-2 mb-6 max-w-[500px]">
        I am a frontend developer from Dhaka, Bangladesh looking for opportunities as a Web Developer intern or Junior Web Developer.
      </p>

      {/* Action Buttons */}
      <div className="hero-action flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        {/* Connect Button */}
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          <div className="hero-connect bg-gradient-to-r from-blue-700 to-blue-400 text-white px-4 py-2 rounded-md hover:from-blue-600 hover:to-blue-300 transition-all cursor-pointer">
            Connect with me
          </div>
        </AnchorLink>

        {/* Resume Button */}
        <div className="hero-resume bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-all cursor-pointer">
          My resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
