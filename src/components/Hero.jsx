import React, { useState } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  return (
    <section className="relative hero w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff] " />
          <div className="w-1 sm:h-80 h-40 violet violet-gradient " />
        </div>
        <div className="flex flex-col">
          <h1 className={`lg:${styles.heroHeadText} font-bold text-white flex flex-wrap`}>
            Hii, I'm
            <div className=" ml-4">
              <span className="humaira tracking-wider">
                Humaira 
              </span>
              <span className="hu gradient__text tracking-wider">
                Humaira 
              </span>
            </div>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develope 3D visuals,
            <br className="sm:block hidden" /> 
            user interfaces and web applications
          </p>
        </div>
      </div>
      {!isMobile && <ComputersCanvas />}
    </section>
  );
};

export default Hero;
