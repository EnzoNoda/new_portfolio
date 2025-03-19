/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Quicksand } from 'next/font/google';
import { motion } from 'motion/react';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import {
    FaAppStoreIos,
    FaExternalLinkAlt,
    FaGithub,
    FaGooglePlay
} from 'react-icons/fa';

const quicksand = Quicksand({
    subsets: ['latin']
});

const projects = [
    {
        id: 1,
        projectImage: (
            <img className="w-8" src={'/alphaTrainer.webp'} alt={'alpha'} />
        ),
        name: 'Alpha Trainer App',
        serviceIcon: [
            {
                id: 1,
                icon: (
                    <FaGooglePlay className="w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8" />
                ),
                link: 'https://play.google.com/store/apps/details?id=com.alphatrainer_app&hl=pt_BR&pli=1'
            },
            {
                id: 2,
                icon: (
                    <FaAppStoreIos className="w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8" />
                ),
                link: 'https://apps.apple.com/br/app/alphatrainer/id6478867027?l=en-GB'
            }
        ],
        description:
            'I lead the development of a React Native app designed to enhance the interaction between personal trainers and their students. The app allows trainers to create and assign personalized workout plans via the main website, while students can access their routines with step-by-step exercise instructions, weight recommendations, and rest times. Additionally, students can track their attendance through an integrated calendar. I work with Context API and functional components, conduct tests to ensure quality, and handle the entire deployment process for both the Google Play Store and the Apple App Store.'
    },
    {
        id: 2,
        projectImage: (
            <img className="w-6" src={'/laborsolo.png'} alt={'laborsolo'} />
        ),
        name: 'LaborSolo App',
        serviceIcon: [
            {
                id: 1,
                icon: (
                    <FaGooglePlay className="w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8" />
                ),
                link: 'https://play.google.com/store/apps/details?id=com.laborsolo&hl=pt_BR'
            },
            {
                id: 2,
                icon: (
                    <FaAppStoreIos className="w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8" />
                ),
                link: 'https://apps.apple.com/br/app/laborsolo/id1563242706?l=en-GB'
            }
        ],
        description:
            "I developed a React Native app for a company specializing in comprehensive soil analysis for farmers. Their system generated chemical composition reports and stored them in a database, and my role was to retrieve and deliver this data to clients through the mobile app. I was responsible for rewriting the entire codebase from scratch due to its outdated structure, implementing Redux for state management, conducting tests, and handling deployment on both the Google Play Store and the Apple App Store. Additionally, I contributed to the company's website, working with C# ASP.NET MVC on both the front-end and back-end."
    },
    {
        id: 3,
        projectImage: <img className="w-8" src={'/noda.png'} alt={'noda'} />,
        name: 'Noda Tecnologia',
        serviceIcon: [
            {
                id: 1,
                icon: (
                    <FaExternalLinkAlt className="w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8" />
                ),
                link: 'https://nodatecnologia.com.br'
            }
        ],
        description:
            'I developed a landing page from scratch for my own company, Noda Tecnologia, using Next.js, TypeScript, and Tailwind CSS. The website serves as a simple yet effective showcase of the company, detailing our mission, completed projects, team members, and a brief description of our work. The goal was to create a fast, responsive, and visually appealing site that effectively communicates our expertise and services.'
    },
    {
        id: 4,
        projectImage: <img className="w-8" src={'/ice.png'} alt={'noda'} />,
        name: 'Mr. Frozen',
        serviceIcon: [
            {
                id: 1,
                icon: (
                    <FaExternalLinkAlt className="w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8" />
                ),
                link: 'https://mr-frozen.vercel.app'
            },
            {
                id: 2,
                icon: (
                    <FaGithub className="w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8" />
                ),
                link: 'https://github.com/EnzoNoda/ice-cream-site'
            }
        ],
        description:
            'I created a test website for a gourmet ice cream shop to showcase a clean and modern layout. The site includes Home, Menu, About, and Contact pages, providing a smooth user experience. The Menu page features a dynamic banner displaying different ice cream flavors, enhancing the visual appeal. Built with Next.js and Tailwind CSS, the project focuses on responsiveness, performance, and an elegant design.'
    }
];
interface ProjectsBannersProps {
    isFullScreen: boolean;
    setIsFullScreen: (_: boolean) => void;
}
export default function ProjectsBanners({
    isFullScreen,
    setIsFullScreen
}: ProjectsBannersProps) {
    const [projectSelected, setProjectSelected] = useState<number | null>(null);

    return (
        <div className="flex flex-col gap-2">
            {projects
                .filter(proj => !isFullScreen || projectSelected === proj.id)
                .map(proj => (
                    <div
                        key={proj.id}
                        onClick={() => {
                            if (!isFullScreen) {
                                setProjectSelected(proj.id);
                                setIsFullScreen(true);
                            }
                        }}
                        className={`w-full ${
                            isFullScreen
                                ? 'flex justify-center items-center'
                                : ''
                        }`}
                    >
                        <div
                            className={`bg-[#252525] p-5 border border-[#e5e5e5] rounded-md transition-all  ${
                                isFullScreen
                                    ? 'lg:w-1/2 lg:h-100 border-none bg-transparent hover:none'
                                    : 'hover:bg-[#303030] cursor-pointer'
                            }`}
                        >
                            <div className="flex justify-start lg:justify-between flex-col items-center lg:flex-row gap-4 ">
                                <div className="flex items-center justify-between gap-3 lg:gap-5">
                                    {proj.projectImage}
                                    <div className="flex flex-col lg:items-start">
                                        <h2
                                            className={`${quicksand.className} text-white font-bold text-[12px] lg:text-xl`}
                                        >
                                            {proj.name}
                                        </h2>
                                    </div>
                                    {isFullScreen && (
                                        <button
                                            onClick={e => {
                                                e.stopPropagation();
                                                setProjectSelected(null);
                                                setIsFullScreen(false);
                                            }}
                                            className="ml-5 hover:bg-[#e5e5e5] hover:text-[#252525] rounded-lg p-2 cursor-pointer"
                                        >
                                            <IoReturnDownBackOutline
                                                size={40}
                                            />
                                        </button>
                                    )}
                                </div>
                                <div className="flex flex-row justify-center self-end items-center gap-4 ">
                                    {proj.serviceIcon.map(icon => (
                                        <a
                                            key={icon.id}
                                            target="_blank"
                                            href={icon.link}
                                        >
                                            <div className="flex flex-row gap-4 p-2 md:p-3 lg:p-5 justify-center items-center border border-[#e5e5e5] rounded-lg hover:bg-[#e5e5e5] hover:text-[#252525] transition-colors duration-300 cursor-pointer">
                                                {icon.icon}
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                            {isFullScreen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -100 }}
                                    animate={{
                                        opacity: [0, 0, 1],
                                        y: [-80, -20, 0]
                                    }}
                                    transition={{ duration: 1.5 }}
                                >
                                    <p
                                        className={`${quicksand.className} text-[#e5e5e5] text-justify mt-6 text-sm/6 lg:text-base font-light`}
                                    >
                                        {proj.description}
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    </div>
                ))}
        </div>
    );
}
