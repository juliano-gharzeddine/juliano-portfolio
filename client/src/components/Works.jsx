import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  redirectsTo,
}) => {
  const handleRedirect = () => {
    if (redirectsTo) {
      window.open(redirectsTo, "_blank"); // Opens the link in a new tab
    }
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      onClick={handleRedirect} // Redirect on click
      className="cursor-pointer" // Makes the whole card clickable
    >
      <div
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        {redirectsTo &&
          <Link to={"/" + redirectsTo} >
            <div className="mt-4 flex justify-center items-center p-2 w-full bg-[#915EFF] hover:bg-transparent hover:border-1 hover:border-[#915EFF] hover:border hover:text-[#915EFF] duration-300 ease rounded-md">
              Try it Yourself
            </div>
          </Link>
        }
      </div>
    </motion.div>
  );
};


const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described.
          Please note that most of projects are internal systems and <span className="text-[#905fff]">due to  NDA agreements</span> ,
          I am not at liberty to provide Github repository links. However  feel free to reach out in the contact section
          below and I will be happy to schedule a one-on-one demo session to showcase a sanitized version of my work.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
