import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {

  return (
    <section className="w-full">
      <div className="tech-icons-wrapper flex flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4">
        {technologies.map((technology) => (
          <div className="blocks w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex-shrink-0" key={technology.name}>
            <img
              src={technology.icon}
              alt={technology.name}
              title={technology.name}
              className="tech-icon w-full h-full object-contain hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
