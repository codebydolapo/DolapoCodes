// ============================================
// SkillsCard.tsx - Component
// ============================================
import React from 'react';
import Image from 'next/image';
import { Skills } from '@/types/types';

const SkillsCard: React.FC<Skills> = ({ icon, title }) => {
    return (
        <div className="group relative flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 w-32 h-32 sm:w-36 sm:h-36 cursor-pointer border border-gray-100">
            {/* Icon Container */}
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 mb-3 transition-transform duration-300 group-hover:scale-110">
                <Image
                    src={icon}
                    alt={`${title} icon`}
                    fill
                    sizes="64px"
                    className="object-contain"
                />
            </div>
            
            {/* Title */}
            <p className="text-xs sm:text-sm font-semibold text-gray-800 text-center leading-tight">
                {title}
            </p>
        </div>
    );
};

export default SkillsCard;