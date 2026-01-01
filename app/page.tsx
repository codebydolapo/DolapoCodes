// ============================================
// page.tsx - Home Page Component
// ============================================
import Image from "next/image";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";
import resume from "@/data/resume";

const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export default function Home() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center py-8" id="home">
      <div className="w-full max-w-7xl px-4">
        
        {/* Hero Section with Background and Profile Picture */}
        <div className="w-full flex flex-col justify-center items-center relative">
          
          {/* Background Image Container */}
          <div className="w-full h-48 md:h-64 overflow-hidden relative rounded-t-2xl shadow-lg">
            <Image
              className="object-cover"
              alt="Background banner"
              src="/images/bg.jpeg"
              fill
              sizes="100vw"
              priority
              quality={90}
            />
          </div>
          
          {/* Profile Picture - Overlapping */}
          <div className="relative -mt-16 md:-mt-20">
            <Image
              className="rounded-full border-8 border-white shadow-2xl object-cover"
              alt="Bashorun Dolapo - Full Stack Developer"
              src="/images/me.jpg"
              width={160}
              height={160}
              priority
              quality={95}
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full flex flex-col items-center justify-center mt-6 space-y-6">
          
          {/* Name */}
          <div className="text-center">
            <h1 className={`${dancing.className} text-5xl md:text-7xl text-gray-900 tracking-wide`}>
              Bashorun Dolapo
            </h1>
          </div>
          
          {/* Title and Description */}
          <div className="text-center space-y-3 max-w-2xl px-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
              Full Stack Developer
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              I craft functional web and mobile experiences with TypeScript, Next.js, and React Native. 
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 w-full max-w-md px-4 mt-8">
            <Link href="/projects" className="flex-1">
              <button className="w-full px-8 py-3 bg-gray-900 text-white rounded-lg font-medium text-base md:text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                View Projects
              </button>
            </Link>

            <Link href={resume} target="_blank" rel="noopener noreferrer" className="flex-1">
              <button className="w-full px-8 py-3 border-2 border-gray-900 bg-white text-gray-900 rounded-lg font-medium text-base md:text-lg hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                View Resume
              </button>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <Link 
              href="https://www.linkedin.com/in/bashorun-dolapo-8b5164225/" 
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="LinkedIn Profile"
            >
              <div className="relative">
                <Image
                  className="w-11 h-11 md:w-12 md:h-12 rounded-xl transition-transform duration-300 group-hover:scale-110 shadow-md group-hover:shadow-lg"
                  alt="LinkedIn"
                  src="/icons/linkedin.webp"
                  width={48}
                  height={48}
                />
              </div>
            </Link>

            <Link 
              href="https://github.com/codebydolapo" 
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="GitHub Profile"
            >
              <div className="relative">
                <Image
                  className="w-11 h-11 md:w-12 md:h-12 rounded-xl transition-transform duration-300 group-hover:scale-110 shadow-md group-hover:shadow-lg"
                  alt="GitHub"
                  src="/icons/git.png"
                  width={48}
                  height={48}
                />
              </div>
            </Link>

            <Link 
              href="https://twitter.com/the_transistorr" 
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Twitter Profile"
            >
              <div className="relative">
                <Image
                  className="w-11 h-11 md:w-12 md:h-12 rounded-xl transition-transform duration-300 group-hover:scale-110 shadow-md group-hover:shadow-lg"
                  alt="Twitter"
                  src="/icons/twitter.png"
                  width={48}
                  height={48}
                />
              </div>
            </Link>
          </div>

          {/* Optional: Tech Stack Preview */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 mb-4">Tech Stack</p>
            <div className="flex flex-wrap justify-center gap-3 max-w-xl">
              {['Next.js', 'React Native', 'TypeScript', 'Node.js', 'Prisma', 'MongoDB'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
