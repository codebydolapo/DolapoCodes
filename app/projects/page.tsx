// ============================================
// page.tsx - Projects Page
// ============================================
import ProjectCard from '@/components/ProjectCard'
import React from 'react'
import projects from '@/data/projects'

export default function ProjectsPage() {
  return (
    <section className='min-h-screen w-full py-12 px-4'>
      <div className='max-w-7xl mx-auto'>
        
        {/* Page Header */}
        <div className='mb-12'>
          <h1 className='text-3xl md:text-5xl font-bold text-gray-900 mb-2'>
            Projects
          </h1>
          <div className='w-20 h-1 bg-[#5188ff]'></div>
          <p className='mt-4 text-lg text-gray-600 max-w-2xl'>
            Here&apos;s a collection of my recent work in web and mobile development
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title || index} // Use title as key if unique, fallback to index
              title={project.title}
              image={project.image}
              description={project.description}
              type={project.type}
              stack={project.stack}
              liveLink={project.liveLink}
              gitRepo={project.gitRepo}
            />
          ))}
        </div>

        {/* Empty State - if no projects */}
        {projects.length === 0 && (
          <div className='text-center py-20'>
            <p className='text-gray-500 text-lg'>No projects to display yet.</p>
          </div>
        )}
      </div>
    </section>
  )
}