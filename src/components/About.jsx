import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-parallax-tilt";

import { ImLinkedin2, ImFacebook, ImGithub, ImYoutube } from "react-icons/im";

import { TbMailFilled } from "react-icons/tb";

import { styles } from "../styles";
import { services, socialLinks } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  const ServiceCard = ({ index, title, icon }) => {
    return (
      <Tilt className="xs:w-[250px] w-[350px] ">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    );
  };

  return (
    <div id="about">
      <motion.div variants={textVariant()}>
        <p className={`${styles.heroSubText}`}>Introduction</p>
        <h2 className={`${styles.heroHeadText}`}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] leading-[30px]"
      >
        I am a software engineer with experience in building web applications
        and mobile apps using JavaScript frameworks such as ReactJS, NodeJS,
        Express, Django, I am a software engineer specializing in building web
        applications and mobile apps with a focus on performance optimization.
        My background is in computer science and mathematics I am a software
        engineer with experience in building web applications and mobile apps
        using JavaScript frameworks such as ReactJS and NodeJS. My expertise
        includes I am a full stack developer with experience in building web
        applications using JavaScript and TypeScript. My background is in
        computer science and mathematics, which allows
      </motion.p>
      <motion.div>
        <div className="social">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon; // Get the component reference
            return <IconComponent key={index} />;
          })}
        </div>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
