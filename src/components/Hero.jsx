import React, { useState, useEffect } from "react";
import { styles } from "../styles";
import { blackhole, hero } from "../assets";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="relative flex flex-col h-full w-full">
        <video
          autoPlay
          muted
          loop
          className="rotate-180 absolute top-[-180px] md:top-[-280px]  left-0 z[1] w-full md:h-full h-[70%] object-cover"
        >
          <source src={blackhole} />
        </video>
      </div>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-5 min-h-full`}
      >
        <div className="sm:px-16 px-6 h-screen max-w-7xl w-full mx-auto flex md:flex-row flex-col-reverse items-center justify-center gap-2">
          <div className="flex items-center">
            <div className="flex flex-col justify-center items-center mt-5 mr-2">
              <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>

            <div className="flex flex-col">
              <h1
                className={`lg:${styles.heroHeadText} font-bold text-white flex flex-wrap`}
              >
                Hii, I'm
                <div className="ml-4">
                  <span className="humaira tracking-wider">Humaira</span>
                  <span className="hu gradient__text tracking-wider">
                    Humaira
                  </span>
                </div>
              </h1>

              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I develop 3D visuals ,
                <br className="sm:block hidden" />
                 user interfaces, and web applications
              </p>
            </div>
          </div>

          <img
            className="blobe max-w-full h-[250px] md:h-[350px] md:flex mx-auto"
            src={hero}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
