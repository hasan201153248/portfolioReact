import theme_pattern from '../../../image/assets/theme_pattern.svg'
import mail_icon from '../../../image/assets/mail_icon.svg'
import location_icon from '../../../image/assets/location_icon.svg'
import call_icon from '../../../image/assets/call_icon.svg'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "91d38f29-7c9e-48ae-a733-958ee21ff135");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='contact' className="contact flex flex-col items-center justify-center gap-16 mx-8 sm:mx-16 lg:mx-20 my-20">
      <div className="contact-title relative mb-8 sm:mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-32">Get in touch</h1>
        <img
          className="absolute left-1/2 transform -translate-x-1/2 top-3 w-24 sm:w-32 md:w-40 opacity-70"
          src={theme_pattern}
          alt="Pattern"
        />
      </div>

      <div className="contact-section flex flex-col md:flex-row gap-12 sm:gap-24 md:gap-36 w-full">
        <div className="contact-left flex flex-col gap-6 sm:gap-8 md:w-1/2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#87CEEB] to-[#0000FF] bg-clip-text text-transparent mb-24">
            Let's talk
          </h1>
          <p className="max-w-full sm:max-w-[550px] text-[#000000] text-base sm:text-lg leading-[28px] sm:leading-[35px]">
            I'm currently available to take on new projects, so if you are interested in working on hospital management, E-commerce, or diagnostic systems, I am here for you.
          </p>
          <div className="contact-details flex flex-col gap-4 sm:gap-6 text-black text-sm sm:text-base">
            <div className="contact-detail flex items-center gap-4">
              <img src={mail_icon} alt="mail icon" />
              <p>hasanengr3248@gmail.com</p>
            </div>
            <div className="contact-detail flex items-center gap-4">
              <img src={call_icon} alt="call icon" />
              <p>01976106416</p>
            </div>
            <div className="contact-detail flex items-center gap-4">
              <img src={location_icon} alt="location icon" />
              <p>Mirpur1, Dhaka</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right flex flex-col gap-6 sm:gap-8 w-full max-w-full md:max-w-md">
          <div className="flex flex-col text-black text-sm sm:text-base font-bold gap-2">
            <label htmlFor="name">Your Name</label>
            <input className="border border-gray-300 p-2 rounded" type="text" placeholder="Enter your name" name="name" />
            <label htmlFor="email">Your Email</label>
            <input className="border border-gray-300 p-2 rounded" type="email" placeholder="Enter your email" name="email" />
            <label htmlFor="message">Write your message here</label>
            <textarea className="border border-gray-300 p-2 rounded" name="message" rows="6" placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" className="bg-gradient-to-r from-[#87CEEB] to-[#0000FF] text-black py-2 px-4 rounded hover:opacity-80 transition duration-300">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
