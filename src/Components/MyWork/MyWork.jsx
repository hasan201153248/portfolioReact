import theme_pattern from '../../../image/assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../../image/assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div className="mywork flex flex-col items-center gap-6 mt-10 cursor-pointer">
      <div id='work' className="mywork-title flex items-center gap-1">
        <h1 className="text-5xl font-bold">My latest work</h1>
        <img src={theme_pattern} alt="" className="w-8 h-8" />
      </div>

      <div className="mywork-container flex flex-wrap justify-center gap-4">
        {mywork_data.slice(0, 6).map((work, index) => {  // Display only the first 6 images
          return (
            <div
              key={index}
              className="relative w-40 h-40 overflow-hidden border-2 border-transparent rounded-lg transform transition-transform duration-300 hover:scale-110 hover:border-blue-500"
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

      <div className="mywork-showmore flex items-center gap-2 cursor-pointer">
        <button className="flex items-center gap-2 px-6 py-2 bg-blue-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
          Show More
          <img src={arrow_icon} alt="" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default MyWork;
