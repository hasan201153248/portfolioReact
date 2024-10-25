import footer_logo from '../../../image/assets/footer_logo.svg';
import user_icon from '../../../image/assets/user_icon.svg';

const Footer = () => {
  return (
    <div className="footer m-6 sm:m-8 md:m-12 flex flex-col gap-7">
      <div className="footer-top flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="footer-top-left mb-4 md:mb-0">
          <img src={footer_logo} alt="Footer Logo" className="w-24 sm:w-32 md:w-auto" />
          <p className="text-base sm:text-lg md:text-[20px] max-w-[300px] sm:max-w-[350px] md:max-w-[400px] mt-2">
            I am a frontend developer from Bangladesh with 3 months of experience.
          </p>
        </div>
        <div className="footer-top-right flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-9 mt-4 md:mt-0">
          <div className="footer-email-input flex gap-3 px-4 py-3 rounded-full bg-[#32323B] pr-14 sm:pr-20 font-Outfit text-sm hover:border hover:border-lime-100 w-full sm:w-auto">
            <img src={user_icon} alt="User Icon" className="w-5 sm:w-6" />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none text-white w-full"
            />
          </div>
          <div className="footer-subscribe text-sm sm:text-base px-5 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-full">
            Subscribe
          </div>
        </div>
      </div>
      <hr className="border-gray-400" />
      <div className="footer-bottom flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="footer-bottom-left mb-4 md:mb-0">&copy; 2023 Kamrul Hasan, All rights reserved</p>
        <div className="footer-bottom-right flex gap-4 md:gap-6 mb-6 md:mb-12">
          <p className="hover:text-blue-500 cursor-pointer">Terms of Service</p>
          <p className="hover:text-blue-500 cursor-pointer">Privacy Policy</p>
          <p className="hover:text-blue-500 cursor-pointer">Connect With Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
