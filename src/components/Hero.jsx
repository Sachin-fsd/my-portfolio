import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import TiltedCard from "../blocks/Components/TiltedCard/TiltedCard";
import RotatingText from "../blocks/TextAnimations/RotatingText/RotatingText";

const Hero = () => {


  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col lg:flex-row items-start gap-5`}
      >
        <div className='flex flex-row lg:flex-col justify-center items-center mt-8 lg:mt-28'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='h-1 w-20 lg:w-1 lg:h-80 violet-gradient' />
        </div>

        <div className="relative z-10 pt-8 lg:pt-20 w-full lg:w-auto">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Sachin</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop modern, user-friendly<br className="hidden sm:block" />
            <span className="block sm:inline"> interfaces and web applications</span>
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center text-lg sm:text-xl lg:text-2xl mt-4">
            <p className="text-white-100 mb-2 sm:mb-0">I 💖 </p>
            <RotatingText
              texts={['Coding', 'Designing', 'DSA', 'Thinking', 'Problem Solving']}
              mainClassName="-mb-1 sm:ml-2 text-lg sm:text-xl lg:text-2xl justify-center rounded-lg"
              staggerFrom={"last"}
              splitBy={"characters"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 50, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
        </div>

        {/* Computer Canvas Section - responsive positioning */}
        <div className="relative lg:absolute lg:right-0 z-20 w-full mt-8 lg:mt-0 flex justify-center lg:justify-end">
          <div 
            className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[650px] aspect-[550/340]"
            style={{
              pointerEvents: "auto",
            }}
          >
            <ComputersCanvas />
          </div>
        </div>
      </div>




      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
