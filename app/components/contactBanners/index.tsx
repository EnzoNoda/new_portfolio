import { Quicksand } from 'next/font/google';
import React from 'react';
import {
    BiLogoGithub,
    BiLogoGmail,
    BiLogoInstagram,
    BiLogoLinkedinSquare
} from 'react-icons/bi';

const quicksand = Quicksand({
    subsets: ['latin']
});

const listContact = [
    {
        id: 1,
        link: 'mailto:enzo.noda@gmail.com',
        icon: <BiLogoGmail size={30} />,
        name: 'enzo.noda@gmail.com'
    },
    {
        id: 2,
        link: 'https://www.linkedin.com/in/enzo-noda/',
        icon: <BiLogoLinkedinSquare size={30} />,
        name: '@enzo-noda'
    },
    {
        id: 3,
        link: 'https://github.com/EnzoNoda',
        icon: <BiLogoGithub size={30} />,
        name: 'EnzoNoda'
    },
    {
        id: 4,
        link: 'https://www.instagram.com/enzo_noda/',
        icon: <BiLogoInstagram size={30} />,
        name: '@enzo_noda'
    }
];

export default function ContactBanners() {
    return (
        <main className="flex flex-col gap-4">
            {listContact.map(item => (
                <div
                    key={item.id}
                    className="flex justify-start items-center flex-row gap-2"
                >
                    <a
                        href={item.link}
                        target="_blank"
                        className="group flex justify-center items-center rounded-lg border border-[#e5e5e5] bg-[#252525] p-3 lg:p-5 hover:bg-[#e5e5e5] hover:text-[#252525] transition-colors duration-300"
                    >
                        {item.icon}
                    </a>
                    <p className={`${quicksand.className} text-sm lg:text-xl`}>
                        {item.name}
                    </p>
                </div>
            ))}
        </main>
    );
}
