import footer_logo from '../../../image/assets/footer_logo.svg';
import user_icon from '../../../image/assets/user_icon.svg';

const Footer = () => {
  return (
    <div className="footer m-12 flex flex-col gap-7">
      <div className="footer-top flex justify-between">
        <div className="footer-top-left">
          <img src={footer_logo} alt="Footer Logo" />
          <p className="text-[20px] max-w-[400px]">
            I am a frontend developer from Bangladesh with 3 months experience.
          </p>
        </div>
        <div className="footer-top-right flex items-center gap-9">
          <div className="footer-email-input flex gap-3 px-5 py-3 rounded-full bg-[#32323B] pr-20 font-Outfit text-sm hover:border hover:border-lime-100">
            <img src={user_icon} alt="User Icon" />
            <input type="email" placeholder="Enter your email" className="bg-transparent outline-none text-white" />
          </div>
          <div className="footer-subscribe text-sm px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-full">
            Subscribe
          </div>
        </div>
      </div>
      <hr className="border-gray-400" />
      <div className="footer-bottom flex justify-between items-center text-sm">
        <p className="footer-bottom-left">&copy; 2023 Kamrul Hasan, All rights reserved</p>
        <div className="footer-bottom-right flex gap-6 mb-12">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect With Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
