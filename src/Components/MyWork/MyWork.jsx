import theme_pattern from '../../../image/assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../../image/assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div className="mywork flex flex-col items-center gap-6 mt-8 sm:mt-10 px-4 sm:px-8 cursor-pointer">
      
      {/* Title Section */}
      <div id='work' className="mywork-title flex items-center gap-2 text-center relative">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-32">My Latest Work</h1>
        <img
          className="absolute left-1/2 transform -translate-x-1/2 top-3 w-32 sm:w-40 md:w-48 opacity-70"
          src={theme_pattern}
          alt="Pattern"
        />
      </div>

      {/* Responsive Work Image Grid */}
      <div className="mywork-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-4">
        {mywork_data.slice(0, 6).map((work, index) => {  // Display only the first 6 images
          return (
            <div
              key={index}
              className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 overflow-hidden border-2 border-transparent rounded-lg transform transition-transform duration-300 hover:scale-110 hover:border-blue-500"
            >
              <img
                src={work.w_img}
                alt={work.w_name}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>

      {/* Show More Button */}
      <div className="mywork-showmore mt-6">
        <button className="flex items-center gap-2 px-5 sm:px-6 py-2 bg-blue-500 text-white text-sm sm:text-lg font-semibold rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
          Show More
          <img src={arrow_icon} alt="Arrow Icon" className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
};

export default MyWork;
