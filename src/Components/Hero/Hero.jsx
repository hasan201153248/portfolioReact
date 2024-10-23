import profile_img from '../../../image/hasan.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id="home" className="hero flex flex-col items-center text-center py-8">
      {/* Profile Image */}
      <img className="h-32 w-32 rounded-full object-cover mb-4" src={profile_img} alt="Profile" />

      {/* Title and Description */}
      <h1 className="text-3xl font-bold">
        <span className="bg-gradient-to-r from-blue-700 to-blue-400 text-transparent bg-clip-text">
          I'm MD: Kamrul Hasan
        </span>
        , frontend developer based in Bangladesh
      </h1>

      <p className="text-lg mt-2 mb-6">
        I am a frontend developer from Dhaka, Bangladesh looking for opportunities as a Web Developer intern or Junior Web Developer.
      </p>

      {/* Action Buttons */}
      <div className="hero-action flex space-x-4">
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
