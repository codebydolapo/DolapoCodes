"use client"; // Keep this for client-side functionality

import React, { useEffect, useState } from 'react';
import Link from 'next/link'; // Import the Link component
import { usePathname } from 'next/navigation'; // Import useRouter to get the current path
import { User, Home, Laptop, Bookmark, Star } from 'lucide-react';

function Navbar() {
  // Use usePathname to get the current URL path.
  // This hook automatically re-renders the component when the path changes.
  const currentRoute = usePathname();

  // The useState and useEffect for currentPath are no longer strictly needed
  // if you directly use currentRoute from usePathname for comparison.
  // We'll keep a simplified version for demonstration of adapting the logic.
  const [currentPathSegment, setCurrentPathSegment] = useState('/');

  useEffect(() => {
    // This useEffect will now react to changes in `currentRoute` (from usePathname).
    // It's a more reliable way to update the segment for highlighting.
    const fullPath = currentRoute;
    const pathSegment = fullPath === '/' ? '/' : fullPath.split('/')[1];
    setCurrentPathSegment(pathSegment);
    console.log('Current URL Path Segment:', pathSegment);
  }, [currentRoute]); // Dependency array now includes currentRoute


  return (
    <div className='
      fixed bottom-0 left-0 right-0 h-12 w-full bg-[#000] text-white
      flex flex-row items-center justify-around px-4 z-100
      md:absolute md:right-12 md:top-1/2 md:-translate-y-1/2 md:h-[25rem] md:w-[4rem] md:rounded-full
      md:flex-col md:justify-center md:px-0
      md:left-auto

      md:bg-black/70 md:opacity-50 md:hover:opacity-100 md:transition-opacity md:duration-300
    '>
      {/* Home link - Using Link component */}
      <Link href="/" className='
        h-full flex-1 flex justify-center items-center relative group
        md:h-[20%] md:w-[4rem]
      '>
        <p className='
          min-w-[5rem] mx-2 text-sm absolute z-10 p-2 rounded-xl bg-[#000000be]
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          bottom-full left-1/2 -translate-x-1/2 mb-2 text-center
          md:right-16 md:bottom-auto md:left-auto md:-translate-x-0 md:mb-0 md:text-left
        '>Home</p>
        {/* Compare against currentPathSegment */}
        <Home className={`${currentPathSegment === '/' ? 'text-[#1da1f2]' : 'text-white'} md:size-8 size-6`} />
      </Link>

      {/* About link - Using Link component */}
      <Link href="/about" className='
        h-full flex-1 flex justify-center items-center relative group
        md:h-[20%] md:w-[4rem]
      '>
        <p className='
          min-w-[5rem] mx-2 text-sm absolute z-10 p-2 rounded-xl bg-[#000000be]
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          bottom-full left-1/2 -translate-x-1/2 mb-2 text-center
          md:right-16 md:bottom-auto md:left-auto md:-translate-x-0 md:mb-0 md:text-left
        '>About</p>
        <User className={`${currentPathSegment === 'about' ? 'text-[#1da1f2]' : 'text-white'} md:size-8 size-6`} />
      </Link>

      {/* Projects link - Using Link component */}
      <Link href="/projects" className='
        h-full flex-1 flex justify-center items-center relative group
        md:h-[20%] md:w-[4rem]
      '>
        <p className='
          min-w-[5rem] mx-2 text-sm absolute z-10 p-2 rounded-xl bg-[#000000be]
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          bottom-full left-1/2 -translate-x-1/2 mb-2 text-center
          md:right-16 md:bottom-auto md:left-auto md:-translate-x-0 md:mb-0 md:text-left
        '>Projects</p>
        <Laptop className={`${currentPathSegment === 'projects' ? 'text-[#1da1f2]' : 'text-white'} md:size-8 size-6`} />
      </Link>

      {/* Blogs link - Using Link component */}
      <Link href="/blogs" className='
        h-full flex-1 flex justify-center items-center relative group
        md:h-[20%] md:w-[4rem]
      '>
        <p className='
          min-w-[5rem] mx-2 text-sm absolute z-10 p-2 rounded-xl bg-[#000000be]
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          bottom-full left-1/2 -translate-x-1/2 mb-2 text-center
          md:right-16 md:bottom-auto md:left-auto md:-translate-x-0 md:mb-0 md:text-left
        '>Blogs</p>
        <Bookmark className={`${currentPathSegment === 'blogs' ? 'text-[#1da1f2]' : 'text-white'} md:size-8 size-6`} />
      </Link>

      {/* Skills link - Using Link component */}
      <Link href="/skills" className='
        h-full flex-1 flex justify-center items-center relative group
        md:h-[20%] md:w-[4rem]
      '>
        <p className='
          min-w-[5rem] mx-2 text-sm absolute z-10 p-2 rounded-xl bg-[#000000be]
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          bottom-full left-1/2 -translate-x-1/2 mb-2 text-center
          md:right-16 md:bottom-auto md:left-auto md:-translate-x-0 md:mb-0 md:text-left
        '>Skills</p>
        <Star className={`${currentPathSegment === 'skills' ? 'text-[#1da1f2]' : 'text-white'} md:size-8 size-6`} />
      </Link>
    </div>
  );
}

export default Navbar;