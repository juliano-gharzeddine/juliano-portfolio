import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (

    <div>
      <div className="mb-14">
        <p className={`${styles.sectionSubText} text-center`}>
          My Skills
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technology Stack.
        </h2>
      </div>
      <div className='flex flex-row flex-wrap justify-center gap-14 select-none'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <div className='flex flex-col items-center gap-1 w-full p-2'>
              <img src={technology.icon} className="w-16 h-16" />
              <p className="text-center">{technology.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <a href="./JulianoGharzeddine.pdf" className="bg-[#905fff] p-4 rounded-md cursor-pointer mt-12 hover:bg-transparent hover:border hover:border-[#905fff] hover:text-[#905fff] duration-300 ease-in-out" download>Download My Resume </a>
      </div>
    </div >
  );
};

export default SectionWrapper(Tech, "");
