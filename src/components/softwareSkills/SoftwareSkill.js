import React from "react";
import "./SoftwareSkill.scss";
import skill from './skill.json'

export default function SoftwareSkill() {
  return (
    <section className="mt-[79px] mx-[10%]" id="experience">
    <h2 className="text-[30px] font-bold tracking-[1.75px] uppercase text-text mb-10">
      SKILLS
    </h2>
    <div className="flex flex-col justify-evenly mt-[14px] max-md:items-center max-md:gap-[34px]">
      <div className="w-full flex flex-wrap gap-[37px] justify-center md:justify-start">
        {skill.map((skill, id) => (
          <div key={id} className="flex flex-col items-center gap-[11px] cursor-pointer">
            <div className="bg-secondary rounded-full  h-[120px] w-[120px] flex items-center justify-center bg-gray-100 hover:bg-gray-200">
              <img
                src={skill.imageSrc}
                alt={skill.title}
                className="w-full object-contain"
              />
            </div>
            <p className="text-[16px] font-medium ">
              {skill.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}

// {skillsSection.softwareSkills.map((skills, i) => {
//   return (
//     <li
//       key={i}
//       className="software-skill-inline"
//       name={skills.skillName}
//     >
      
//       {/* <i className={skills.fontAwesomeClassname}></i> */}
//       {/* <p>{skills.skillName}</p> */}
//     </li>
//   );
// })}