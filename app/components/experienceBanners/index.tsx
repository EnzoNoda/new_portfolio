/* eslint-disable @next/next/no-img-element */
import { Quicksand } from 'next/font/google';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { IoReturnDownBackOutline } from 'react-icons/io5';

const quicksand = Quicksand({
    subsets: ['latin']
});

const experiences = [
    {
        id: 1,
        company: 'Anexs Tecnologia',
        role: 'Mobile Developer',
        period: 'Apr 2022 - Present',
        description:
            'I have been working at my current company for three years, primarily focusing on mobile application development. My role involves not only building and maintaining applications but also designing and implementing new features to enhance user experience. Additionally, I collaborate closely with the back-end team to develop and integrate APIs, ensuring seamless communication between front-end and back-end systems. Through this work, I have gained valuable experience in delivering scalable and efficient mobile solutions.',
        logo: '/anexs.jpg'
    },
    {
        id: 2,
        company: 'Laborsolo',
        role: 'Fullstack Developer',
        period: 'Oct 2022 - Oct 2023',
        description:
            'I worked as a Fullstack Developer, handling both front-end and back-end development tasks. My main responsibilities included developing scalable web applications, integrating APIs, and optimizing performance. I gained experience working with various technologies and frameworks, which helped me refine my problem-solving skills and enhance my ability to develop efficient software solutions.',
        logo: '/laborsolo.png'
    }
];

interface ExperienceBannersProps {
    isFullScreen: boolean;
    toggleFullScreen: () => void;
}

export default function ExperienceBanners({
    isFullScreen,
    toggleFullScreen
}: ExperienceBannersProps) {
    const [experienceSelected, setExperienceSelected] = useState<number | null>(
        null
    );

    return (
        <div className="flex flex-col gap-2">
            {experiences
                .filter(exp => !isFullScreen || experienceSelected === exp.id)
                .map(exp => (
                    <button
                        key={exp.id}
                        onClick={() => {
                            if (!isFullScreen) {
                                setExperienceSelected(exp.id);
                                toggleFullScreen();
                            } else {
                                setExperienceSelected(null);
                                toggleFullScreen();
                            }
                        }}
                        className={`w-full ${
                            isFullScreen
                                ? 'flex justify-center items-center'
                                : ''
                        }`}
                    >
                        <div
                            className={`bg-[#252525] p-5 border border-[#e5e5e5] rounded-md transition-all cursor-pointer ${
                                isFullScreen
                                    ? 'lg:w-1/2 lg:h-100 border-none bg-transparent hover:none'
                                    : 'hover:bg-[#303030] '
                            }`}
                        >
                            <div className="flex justify-between flex-col items-start lg:flex-row ">
                                <div className="flex items-center gap-3 lg:gap-5">
                                    <img
                                        className="w-7"
                                        src={exp.logo}
                                        alt={exp.company}
                                    />
                                    <div className="flex flex-col lg:items-start">
                                        <h2
                                            className={`${quicksand.className} text-white font-bold text-[12px] lg:text-xl`}
                                        >
                                            {exp.role}
                                        </h2>
                                        <h2
                                            className={`${quicksand.className} text-white text-[13px] lg:text-xl`}
                                        >
                                            {exp.company}
                                        </h2>
                                    </div>
                                    {isFullScreen && (
                                        <div className="ml-5 hover:bg-[#e5e5e5] hover:text-[#252525] rounded-lg p-2">
                                            <IoReturnDownBackOutline
                                                size={40}
                                            />
                                        </div>
                                    )}
                                </div>
                                <span
                                    className={`${quicksand.className} text-[#e5e5e5] font-semibold text-sm mt-4 lg:mt-0 lg:text-base`}
                                >
                                    {exp.period}
                                </span>
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
                                        {exp.description}
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    </button>
                ))}
        </div>
    );
}
