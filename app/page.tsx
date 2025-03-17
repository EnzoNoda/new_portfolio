'use client';
import { AnimatePresence, motion } from 'motion/react';
import { Quicksand } from 'next/font/google';
import HomeButtons from './components/homeButtons';
import { useState } from 'react';
import HomeBanners from './components/homeBanners';

const quicksand = Quicksand({
    subsets: ['latin']
});

export default function Home() {
    const [selectedId, setSelectedId] = useState<number>(1);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const [isFullScreen, setIsFullScreen] = useState<boolean>(false); // Estado para controle de tela cheia

    const handleClick = (id: number) => {
        if (!isAnimating) {
            setIsAnimating(true);
            setSelectedId(id);
        }
    };

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen); // Alternar entre tela cheia e normal
    };

    return (
        <main className="m-5 lg:m-10">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <h2 className={`${quicksand.className} text-2xl`}>Enzo Noda</h2>
                <h3 className={`${quicksand.className} text-md`}>
                    Designer & Fullstack Developer
                </h3>
            </motion.div>
            <div className="grid grid-cols-3 gap-4">
                <div className="w-1/2 col-span-1">
                    <motion.div
                        style={{ marginTop: '20px' }}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <HomeButtons
                            selectedId={selectedId}
                            handleClick={handleClick}
                        />
                    </motion.div>
                </div>
                <div className="w-full  col-span-2">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedId}
                            style={{ marginTop: '20px' }}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            onAnimationComplete={() => setIsAnimating(false)}
                        >
                            <HomeBanners
                                selectedId={selectedId}
                                isFullScreen={isFullScreen}
                                toggleFullScreen={toggleFullScreen}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </main>
    );
}
