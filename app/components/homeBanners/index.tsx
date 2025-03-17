import { motion } from 'motion/react';
import { Quicksand } from 'next/font/google';
import React from 'react';
import SkillsBanners from '../skillsBanners';
import ExperienceBanners from '../experienceBanners';
const quicksand = Quicksand({
    subsets: ['latin']
});
interface HomeBannersProps {
    selectedId: number;
    isFullScreen: boolean;
    toggleFullScreen: () => void;
}
export default function HomeBanners({
    selectedId,
    isFullScreen,
    toggleFullScreen
}: HomeBannersProps) {
    return (
        <>
            {selectedId === 1 && (
                <div className="h-auto bg-[#252525] text-[#e5e5e5] border border-[#e5e5e5] rounded-md p-5">
                    <p
                        className={`${quicksand.className} text-2xl lg:text-4xl`}
                    >
                        Hi! My name is Enzo Noda. Nice to meet you!
                    </p>
                </div>
            )}
            {selectedId === 2 && (
                <div className="h-[80vh] bg-[#252525] text-[#e5e5e5] border border-[#e5e5e5] rounded-md p-5">
                    <SkillsBanners />
                </div>
            )}
            {selectedId === 3 && (
                <motion.div
                    className="bg-[#252525] text-[#e5e5e5] border border-[#e5e5e5] rounded-md p-5"
                    initial={{
                        height: '80vh',
                        width: '100%',
                        top: 'auto',
                        left: 'auto'
                    }}
                    animate={{
                        height: isFullScreen ? '95vh' : '80vh',
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
                    style={{ position: 'fixed' }} // Mantém o position fixed desde o início
                >
                    <ExperienceBanners
                        isFullScreen={isFullScreen}
                        toggleFullScreen={toggleFullScreen}
                    />
                </motion.div>
            )}
            {selectedId === 4 && (
                <motion.div
                    className="bg-[#252525] text-[#e5e5e5] border border-[#e5e5e5] rounded-md p-5"
                    initial={{ height: '80vh' }}
                    animate={{
                        height: isFullScreen ? '95vh' : '80vh',
                        position: isFullScreen ? 'fixed' : 'relative',
                        top: isFullScreen ? 0 : 'auto',
                        left: isFullScreen ? 0 : 'auto',
                        width: isFullScreen ? '90vw' : '100%',
                        zIndex: isFullScreen ? 999 : 'auto',
                        margin: isFullScreen ? 20 : 0
                    }}
                    transition={{
                        duration: 0.5
                    }}
                >
                    <button onClick={toggleFullScreen}>click</button>
                </motion.div>
            )}
            {selectedId === 5 && (
                <div className="h-[80vh] bg-[#252525] text-[#e5e5e5] border border-[#e5e5e5] rounded-md p-5">
                    5
                </div>
            )}
            {selectedId === 6 && (
                <div className="h-[80vh] bg-[#252525] text-[#e5e5e5] border border-[#e5e5e5] rounded-md p-5">
                    6
                </div>
            )}
        </>
    );
}
