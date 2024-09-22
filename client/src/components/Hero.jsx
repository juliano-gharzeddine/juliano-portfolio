import { motion } from "framer-motion";
import { styles } from "../styles";
import programmer from "../assets/programmer.png";

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
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A software engineer building robust web applications <br className="sm:block hidden" />
            & powering backend systems to deliver seamless user experiences.
          </p>
        </div>
      </div>

      {/* Programmer Image */}
      <div className="relative w-full h-full flex justify-center items-center">
        <img
          src={programmer}
          alt="programmer"
          className="absolute sm:w-[500px] w-[250px] bottom-0 sm:bottom-[-40px]  object-contain"
        />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
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
