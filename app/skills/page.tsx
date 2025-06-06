import React from 'react';
import skills from '@/data/skills';
import SkillsCard from '@/components/SkillsCard';

function SkillsPage() { // Renamed the function for clarity
    return (
        <div className={`
            md:min-w-[100%] md:min-h-[100vh] md:h-[100vh] md:mb-0 md:border-b-0 md:p-2 
            flex flex-col md:mt-0 pb-5
            min-h-[100vh] h-auto mb-[2rem] mt-[1rem] overflow-y-scroll
        `}>
            <div className={`w-full h-[3rem] flex flex-row items-center justify-start px-5 md:pl-10 pl-2 `}>
                <h1 className={`md:text-3xl font-extrabold text-xl text-[#000000] underline`}>Skills</h1>
            </div>
            <div className='w-full flex flex-1 items-center justify-center flex-wrap p-2 mt-4'> {/* Changed to justify-center */}
                {skills.map((skill, index) => (
                    <SkillsCard key={index} icon={skill.icon} title={skill.title} />
                ))}
            </div>
        </div>
    );
}

export default SkillsPage;