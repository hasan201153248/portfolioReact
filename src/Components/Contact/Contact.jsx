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
    <div id='contact' className="contact flex flex-col items-center justify-center gap-20 mx-20 my-20">
      <div className="contact-title relative mb-10">
        <h1 className="text-5xl font-bold">Get in touch</h1>
        <img className="absolute bottom-[-10px] right-0 z-[-1]" src={theme_pattern} alt="" />
      </div>

      <div className="contact-section flex gap-36">
        <div className="contact-left flex flex-col gap-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent">
            Let's talk
          </h1>
          <p className="max-w-[550px] text-[#D8D8D8] text-lg leading-[35px]">
            I'm currently available to take on new projects, so if you are interested in working on hospital management, E-commerce, or diagnostic systems, I am here for you.
          </p>
          <div className="contact-details flex flex-col gap-8 text-white text-sm">
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

        <form onSubmit={onSubmit} className="contact-right flex flex-col gap-8 w-full max-w-md">
          <div className="flex flex-col text-black text-sm font-bold">
            <label htmlFor="name">Your Name</label>
            <input className="border border-gray-300 p-2 rounded" type="text" placeholder="Enter your name" name="name" />
            <label htmlFor="email">Your Email</label>
            <input className="border border-gray-300 p-2 rounded" type="email" placeholder="Enter your email" name="email" />
            <label htmlFor="message">Write your message here</label>
            <textarea className="border border-gray-300 p-2 rounded" name="message" rows="8" placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" className="bg-gradient-to-r from-[#DF8908] to-[#B415FF] text-black py-2 px-4 rounded hover:opacity-80 transition duration-300">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
