import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import resume from '@/data/resume'

function About() {
  return (
    <section 
      className="min-h-screen w-full flex items-center justify-center py-12 md:py-0" 
      id="about"
    >
      <div className="max-w-7xl w-full px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          
          {/* Profile Image Section */}
          <div className="w-full md:w-5/12 flex items-center justify-center order-1 md:order-2">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <Image
                src="/images/me4.jpg"
                alt="Bashorun Dolapo"
                fill
                className="rounded-full object-cover shadow-2xl ring-4 ring-gray-100"
                priority
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-7/12 flex flex-col items-center md:items-start order-2 md:order-1 space-y-6">
            
            {/* Welcome Heading */}
            <div className="text-center md:text-left w-full">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                About Me
              </h1>
              <div className="w-20 h-1 bg-blue-500 mx-auto md:mx-0"></div>
            </div>

            {/* Bio Content */}
            <div className="space-y-4 text-center md:text-left max-w-2xl">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Hi, I&apos;m <span className="font-semibold text-blue-600">Bashorun Dolapo</span>, 
                a <span className="font-semibold text-blue-600">product-focused software engineer</span> specializing 
                in web and mobile development.
              </p>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                I&apos;m passionate about <span className="font-semibold text-blue-600">building products</span> that 
                solve real-world problems, and am proficient with tools and tech like <span className="font-semibold text-blue-600">Typescript, Next.js </span> and more.
              </p>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
               I have a <span className="font-semibold text-blue-600">keen eye for detail</span>, I focus 
                on <span className="font-semibold text-blue-600">meeting user needs</span> through user-friendly experiences that delight customers.
              </p>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me enjoying walks, writing, watching movies or 
                listening to music.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md pt-4">
              <a 
                href="https://t.me/CodeByDolapo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1"
              >
                <button className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2">
                  Let&apos;s Discuss!
                  <Image
                    src="/icons/telegram.png"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </button>
              </a>
              
              <Link 
                href={resume} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1"
              >
                <button className="w-full px-6 py-3 border-2 border-gray-900 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  View Resume
                </button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
              <a 
                href="https://www.linkedin.com/in/bashorun-dolapo-8b5164225/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="LinkedIn Profile"
              >
                <Image
                  src="/icons/linkedin.webp"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-lg transition-transform duration-300 group-hover:scale-110 shadow-md group-hover:shadow-lg"
                />
              </a>
              
              <a 
                href="https://github.com/codebydolapo" 
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="GitHub Profile"
              >
                <Image
                  src="/icons/git.png"
                  alt="GitHub"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-lg transition-transform duration-300 group-hover:scale-110 shadow-md group-hover:shadow-lg"
                />
              </a>
              
              <a 
                href="https://twitter.com/the_transistorr" 
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="Twitter Profile"
              >
                <Image
                  src="/icons/twitter.png"
                  alt="Twitter"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-lg transition-transform duration-300 group-hover:scale-110 shadow-md group-hover:shadow-lg"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About