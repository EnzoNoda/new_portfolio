import React from 'react';
import { FaReact, FaJava, FaGithub, FaNodeJs } from 'react-icons/fa';
import {
    BiLogoPostgresql,
    BiLogoTypescript,
    BiLogoJavascript,
    BiLogoSpringBoot
} from 'react-icons/bi';
import { RiNextjsFill } from 'react-icons/ri';
import { TbBrandReactNative } from 'react-icons/tb';
import { Quicksand } from 'next/font/google';
const quicksand = Quicksand({
    subsets: ['latin']
});
const skills = [
    { id: 1, name: 'Javascript', icon: <BiLogoJavascript size={50} /> },
    { id: 2, name: 'Typescript', icon: <BiLogoTypescript size={50} /> },
    { id: 3, name: 'React.Native', icon: <TbBrandReactNative size={50} /> },
    { id: 4, name: 'React', icon: <FaReact size={50} /> },
    { id: 5, name: 'Next.JS', icon: <RiNextjsFill size={50} /> },
    { id: 6, name: 'Node.js', icon: <FaNodeJs size={50} /> },
    { id: 7, name: 'PostgreSQL', icon: <BiLogoPostgresql size={50} /> },
    { id: 8, name: 'Java', icon: <FaJava size={50} /> },
    { id: 9, name: 'Spring', icon: <BiLogoSpringBoot size={50} /> },
    { id: 10, name: 'Github', icon: <FaGithub size={50} /> }
];
export default function SkillsBanners() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 text-lg font-bold mt-7 lg:mt-12 w-full place-items-center gap-y-6 lg:gap-y-12">
            {skills.map(skill => (
                <div
                    key={skill.id}
                    className="bg-[#252525] border border-[#e5e5e5] hover:bg-[#e5e5e5] hover:text-[#252525] transition-all cursor-pointer text-xs md:text-lg lg:text-xl  rounded p-3 h-22 w-22 md:h-30 md:w-30 lg:h-36 lg:w-36 flex flex-col items-center justify-center gap-2 lg:gap-5"
                >
                    {skill.icon}
                    <p className={`${quicksand.className}`}>{skill.name}</p>
                </div>
            ))}
        </div>
    );
}
