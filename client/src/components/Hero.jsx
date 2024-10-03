import { motion } from "framer-motion";
import { styles } from "../styles";
import programmer from "../assets/programmer.png";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative flex flex-col w-full h-screen mx-auto">
      {/* Text Section */}
      <div
        className={`absolute inset-0 top-[100px] sm:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Juliano Gharzeddine</span>
          </h1>
          <p className={`${styles.heroSubText} mt-10 text-white-100`}>
            A software engineer building robust <span className="text-[#915EFF]"> Web Applications </span> /<span className="text-[#915EFF]"> Machine Learning Models</span> <br className="sm:block hidden" />
            & powering backend systems to deliver seamless user experiences.
          </p>
        </div>
      </div>

      {/* Programmer Image */}
      <div className="relative w-full h-full flex justify-center items-center">
        <ComputersCanvas />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-12 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[55px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
