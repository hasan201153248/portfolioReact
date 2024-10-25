import theme_pattern from '../../../image/assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../../image/assets/arrow_icon.svg';

const Services = () => {
  return (
    <div id='services' className="services flex flex-col items-center justify-center mt-12 px-4 sm:mt-20">
      
      {/* Title Section */}
      <div className="services-title relative text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-32">My Services</h1>
        
        {/* Adjusted size of the theme pattern image */}
        <img
          className="absolute left-1/2 transform -translate-x-1/2 top-3 w-24 sm:w-32 md:w-40 opacity-70"
          src={theme_pattern}
          alt="Pattern"
        />
      </div>
      
      {/* Services List in Columns */}
      <div className="services-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 mt-8 sm:mt-10">
        {Services_Data.map((service, index) => (
          <div 
            key={index} 
            className="services-item bg-black rounded-lg p-4 sm:p-5 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r from-blue-300 via-sky-600 to-violet-300"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 hover:from-blue-600 hover:to-violet-300 transition duration-300">
              {service.s_name}
            </h2>
            <p className="text-base sm:text-lg mt-2 text-white">{service.s_desc}</p>
            <div className="mt-4">
              <button className="text-sm sm:text-base text-blue-600 hover:text-sky-300 transition duration-300">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
