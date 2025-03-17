'use client';
import { Quicksand } from 'next/font/google';
import React from 'react';

const quicksand = Quicksand({
    subsets: ['latin']
});
const list = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'Skills' },
    { id: 3, name: 'My Experience' },
    { id: 4, name: 'Projects' },
    { id: 5, name: 'About' },
    { id: 6, name: 'Contact' }
];

interface HomeButtonsProps {
    selectedId: number;
    handleClick: (_: number) => void;
}

export default function HomeButtons({
    selectedId,
    handleClick
}: HomeButtonsProps) {
    return (
        <div className="flex flex-col gap-1">
            {list.map(item => (
                <button
                    className={`w-[100px] lg:w-[150px] py-2 rounded-lg ${
                        quicksand.className
                    } ${
                        selectedId === item.id
                            ? 'text-[#252525]'
                            : 'text-[#e5e5e5]'
                    } ${selectedId === item.id ? 'bg-[#e5e5e5]' : ''}`}
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                >
                    {item.name}
                </button>
            ))}
        </div>
    );
}
