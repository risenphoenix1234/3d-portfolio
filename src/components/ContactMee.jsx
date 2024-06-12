import React from 'react';
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const ContactMee = () => {
  return (
    <div className="-mt-20">
      <h2 className="text-2xl font-bold mb-4 text-white">CONTACT ME</h2>
      <p className="mb-4 mt-0 text-white">
        If you have any questions or would like to get in touch, please feel free to contact me through any of the following platforms:
      </p>
      <div className="flex space-x-7">
        <a href="https://wa.me/2347062503012?text=Hi%20Haruna%2C%20I%20am%20from%20your%20website
" target="_blank" rel="noopener noreferrer">
          <img src="/whatsapp.png" alt="WhatsApp" className="w-10 h-10" />
        </a>
        <a href="https://www.instagram.com/hr_atk_/" target="_blank" rel="noopener noreferrer">
          <img src="/instagram.png" alt="Instagram" className="w-10 h-10" />
        </a>
        <a href="https://github.com/risenphoenix1234?tab=repositories" target="_blank" rel="noopener noreferrer">
          <img src="/githubb.png" alt="GitHub" className="w-10 h-10" />
        </a>
        <a href="https://www.linkedin.com/in/suleiman-haruna-13a22a217/" target="_blank" rel="noopener noreferrer">
          <img src="/twitter.png" alt="Twitter" className="w-10 h-10" />
        </a>
      </div>
    </div>
  );
}

export default SectionWrapper(ContactMee, "ContactMee");
