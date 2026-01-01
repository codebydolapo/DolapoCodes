// ============================================
// page.tsx - Skills Page
// ============================================
import React from 'react';
import skills from '@/data/skills';
import SkillsCard from '@/components/SkillsCard';

export default function SkillsPage() {
    return (
        <section className="min-h-screen w-full py-12 px-4">
            <div className="max-w-7xl mx-auto">
                
                {/* Page Header */}
                <div className="mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
                        Skills & Technologies
                    </h1>
                    <div className="w-20 h-1 bg-[#5188ff]"></div>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl">
                        Tools and technologies I use to build modern web and mobile applications
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6">
                    {skills.map((skill) => (
                        <SkillsCard 
                            key={skill.title} 
                            icon={skill.icon} 
                            title={skill.title} 
                        />
                    ))}
                </div>

                {/* Optional: Skills Categories Section */}
                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    <div className="text-center p-6 bg-gray-50 rounded-xl">
                        <h3 className="font-bold text-lg mb-2 text-gray-900">Frontend</h3>
                        <p className="text-sm text-gray-600">
                            React, Next.js, React Native, TypeScript, Tailwind CSS
                        </p>
                    </div>
                    <div className="text-center p-6 bg-gray-50 rounded-xl">
                        <h3 className="font-bold text-lg mb-2 text-gray-900">Backend</h3>
                        <p className="text-sm text-gray-600">
                            Node.js, Express.js, MongoDB, Firebase, Appwrite
                        </p>
                    </div>
                    <div className="text-center p-6 bg-gray-50 rounded-xl">
                        <h3 className="font-bold text-lg mb-2 text-gray-900">Tools</h3>
                        <p className="text-sm text-gray-600">
                            Redux, Clerk, Liveblocks, OpenAI API, Expo
                        </p>
                    </div>
                </div>

                {/* Empty State */}
                {skills.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">No skills data available.</p>
                    </div>
                )}
            </div>
        </section>
    );
}