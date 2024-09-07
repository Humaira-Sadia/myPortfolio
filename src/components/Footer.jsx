import React from "react";
import { socialLinks } from "../constants";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div className="flex flex-col justify-center items-center h-32 bg-[#151030]">
      <ul className="social relative flex gap-5 pt-4">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <li
              className="h-5 w-5 pb-10 rounded-3xl flex flex-wrap justify-center items-center cursor-pointer trasition duration-500 hover:translate-x-0 text-center	hover:-translate-y-2 shadow-[#fff] box-border "
              key={social.id}
            >
              <a
                className="text-[1.2em] transition duration-500 "
                href={social.link}
              >
                <Icon color={social.color}/>
              </a>
            </li>
          );
        })}
      </ul>
      <p>
        {" "}
        © {currentYear}
        <span className="px-2 text-[#ab69e9] font-bold">Humaira Sadia</span>|
        All Rights Reserved .
      </p>
    </div>
  );
};

export default Footer;
