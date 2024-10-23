import theme_pattern from '../../../image/assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../../image/assets/arrow_icon.svg';

const Services = () => {
  return (
    <div id='services' className="services flex flex-col items-center justify-center mt-20 mr-38">
      
      {/* Title Section */}
      <div className="services-title relative text-center">
        <h1 className="pt-0 pb-9 text-6xl font-bold">My Services</h1>
        <img className="absolute bottom-0 right-0 z-0" src={theme_pattern} alt="Pattern" />
      </div>
      
      {/* Services List in columns */}
      <div className="services-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
        {Services_Data.map((service, index) => (
          <div 
            key={index} 
            className="services-item bg-black rounded-lg p-5 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r from-blue-300 via-sky-600 to-violet-300"
          >
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 hover:from-blue-600 hover:to-violet-300 transition duration-300">
              {service.s_name}
            </h2>
            <p className="text-lg mt-2 text-white">{service.s_desc}</p>
            <div className="mt-4">
              <button className="text-sm text-blue-600 hover:text-sky-300 transition duration-300">
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
