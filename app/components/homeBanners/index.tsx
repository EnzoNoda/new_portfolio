import { motion } from 'motion/react';
import { Quicksand } from 'next/font/google';
import React from 'react';
import SkillsBanners from '../skillsBanners';
import ExperienceBanners from '../experienceBanners';
import ContactBanners from '../contactBanners';
import ProjectsBanners from '../projectsBanners';
const quicksand = Quicksand({
    subsets: ['latin']
});
interface HomeBannersProps {
    selectedId: number;
    isFullScreen: boolean;
    setIsFullScreen: (_: boolean) => void;
}
export default function HomeBanners({
    selectedId,
    isFullScreen,
    setIsFullScreen
}: HomeBannersProps) {
    return (
        <>
            {selectedId === 1 && (
                <div className="h-auto w-[60vw] bg-[#252525] text-[#e5e5e5]  border border-[#e5e5e5] rounded-md p-5">
                    <p
                        className={`${quicksand.className} text-2xl lg:text-4xl`}
                    >
                        Hi! My name is Enzo Noda. Nice to meet you!
                    </p>
                </div>
            )}
            {selectedId === 2 && (
                <div className="h-[70vh] w-[60vw] bg-[#252525] text-[#e5e5e5] border border-[#e5e5e5] rounded-md p-5">
                    <SkillsBanners />
                </div>
            )}
            {selectedId === 3 && (
                <motion.div
                    className="bg-[#252525] text-[#e5e5e5] border border-[#e5e5e5] rounded-md p-5"
                    initial={{
                        height: '70vh',
                        width: '100%',
                        top: 'auto',
                        left: 'auto'
                    }}
                    animate={{
                        height: isFullScreen ? '60vh' : '40vh',
                        width: isFullScreen ? '90vw' : '60vw',
                        top: isFullScreen ? 0 : 'auto',
                        left: isFullScreen ? 0 : 'auto',
                        zIndex: isFullScreen ? 999 : 'auto',
                        margin: isFullScreen ? 20 : 0
                    }}
                    transition={{
                        duration: 0.7,
                        ease: 'easeInOut'
                    }}
                    style={{ position: 'fixed' }}
                >
                    <ExperienceBanners
                        isFullScreen={isFullScreen}
                        setIsFullScreen={setIsFullScreen}
                    />
                </motion.div>
            )}
            {selectedId === 4 && (
                <motion.div
                    className="bg-[#252525] text-[#e5e5e5] border border-[#e5e5e5] rounded-md p-5 overflow-auto"
                    initial={{
                        height: 'auto',
                        width: '100%',
                        top: 'auto',
                        left: 'auto'
                    }}
                    animate={{
                        height: isFullScreen ? '80vh' : 'auto',
                        width: isFullScreen ? '90vw' : '60vw',
                        top: isFullScreen ? 0 : 'auto',
                        left: isFullScreen ? 0 : 'auto',
                        zIndex: isFullScreen ? 999 : 'auto',
                        margin: isFullScreen ? 20 : 0
                    }}
                    transition={{
                        duration: 0.5,
                        ease: 'easeInOut'
                    }}
                    style={{ position: 'fixed' }}
                >
                    <ProjectsBanners
                        isFullScreen={isFullScreen}
                        setIsFullScreen={setIsFullScreen}
                    />
                </motion.div>
            )}
            {selectedId === 5 && (
                <div className="h-[70vh] w-[60vw] bg-[#252525] text-[#e5e5e5] text-sm md:text-lg lg:text-xl border border-[#e5e5e5] rounded-md p-5 overflow-auto [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                    <p className={`${quicksand.className}`}>
                        I am a Mobile and Front-End Developer with 3 years of
                        experience, specializing in React Native, React.js,
                        Next.js, TypeScript, and SQL. My passion for technology
                        goes beyond front-end development—I also have experience
                        working with back-end maintenance using C# and ASP.NET.
                        Currently, I am expanding my knowledge in Java with
                        Spring, aiming to strengthen my full-stack development
                        skills. My academic background includes a Bachelor’s
                        degree in Product Design from the State University of
                        Maringá (UEM), which has given me a unique perspective
                        on user experience and interface design. Additionally, I
                        am in the final year of my Systems Analysis and
                        Development program at Unicesumar, solidifying my
                        expertise in software engineering and application
                        development. I am driven by challenges and the pursuit
                        of efficient, scalable, and user-friendly solutions.
                        Constantly exploring new technologies, I strive to
                        deliver high-quality products. If you&apos;re looking
                        for a dedicated developer passionate about innovation,
                        let’s connect!
                    </p>
                </div>
            )}
            {selectedId === 6 && (
                <div className="h-auto w-[60vw] bg-[#252525] text-[#e5e5e5] border border-[#e5e5e5] rounded-md p-5">
                    <ContactBanners />
                </div>
            )}
        </>
    );
}
