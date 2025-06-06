import React from 'react';
import Image from 'next/image';
import { Skills } from '@/types/types';



const SkillsCard: React.FC<Skills> = ({ icon, title }) => {
    return (
        <div className="
            flex flex-col items-center justify-center p-4 m-2
            bg-white rounded-lg shadow-md hover:shadow-lg
            transition-all duration-300 transform hover:-translate-y-5
            w-[8rem] h-[8rem] sm:w-[9rem] sm:h-[9rem] md:w-[10rem] md:h-[10rem]
            cursor-pointer
        ">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-2">
                <Image
                    src={icon}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'contain' }}
                    unoptimized={icon.endsWith('.gif') || icon.endsWith('.webp') || icon.endsWith('.jpg') || icon.endsWith('.png')} // Unoptimize based on common image types
                />
            </div>
            <p className="text-sm sm:text-base font-semibold text-gray-800 text-center mt-2">{title}</p>
        </div>
    );
};

export default SkillsCard;