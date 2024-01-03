import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-parallax-tilt";

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
        I am a seasoned software engineer specializing in the development of
        high-performance web applications and mobile apps. With a strong
        foundation in computer science and mathematics, I bring a unique blend
        of analytical skills and technical proficiency to my work. <br /> My expertise
        lies in building robust applications using prominent JavaScript
        frameworks, including ReactJS and NodeJS. As a full-stack developer, I
        am adept at crafting seamless user experiences and implementing
        innovative solutions to enhance performance optimization. <br /> Throughout my
        career, I have successfully contributed to various projects, leveraging
        my comprehensive knowledge of JavaScript and TypeScript. My commitment
        to staying at the forefront of technological advancements allows me to
        deliver cutting-edge solutions in the ever-evolving landscape of
        software development.
      </motion.p>
      <motion.div>
        <ul className="social relative flex gap-5 pt-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <li
                className="h-10 w-10 rounded-3xl flex flex-wrap justify-center items-center cursor-pointer trasition duration-500 hover:translate-x-0 text-center	hover:-translate-y-2 shadow-[#fff] bg-white
                box-border "
                key={social.id}
              >
                <a
                  className="text-[1.7em] transition duration-500 "
                  href={social.link}
                >
                  <Icon color={social.color} />
                </a>
              </li>
            );
          })}
        </ul>
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
