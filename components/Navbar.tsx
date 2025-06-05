"use client"

import React, { useEffect, useState } from 'react';
// The 'next/link' import was causing a compilation error in this environment,
// so we've reverted to standard HTML <a> tags for navigation.
// import Link from 'next/link';
import { User, Home, Laptop, Bookmark, Star } from 'lucide-react';

function Navbar() {
  const [currentPath, setCurrentPath] = useState('/'); // Default to home path

  useEffect(() => {
    // This effect runs once after the component mounts.
    // If the page fully reloads (as with standard <a> tags), the component remounts,
    // and this effect will run again, correctly updating the currentPath.
    if (typeof window !== 'undefined') {
      const fullPath = window.location.pathname;
      // Extract the first segment of the path, or default to '/' for the root.
      // Example: "/about" becomes "about", "/" remains "/".
      const pathSegment = fullPath === '/' ? '/' : fullPath.split('/')[1];
      setCurrentPath(pathSegment);
      console.log('Current URL Path Segment:', pathSegment);
    }
  }, []); // Empty dependency array ensures it runs once per component mount (e.g., on page load)

  return (
    // Main Navbar Container:
    // Mobile (default): fixed to bottom, full width, horizontal flex, rounded top corners, centered items.
    // Desktop (md: breakpoint): absolute to right, fixed height/width, vertical flex, fully rounded.
    <div className='
      fixed bottom-0 left-0 right-0 h-12 w-full bg-[#000] text-white rounded-t-xl
      flex flex-row items-center justify-around px-4 z-100
      md:absolute md:right-12 md:top-1/2 md:-translate-y-1/2 md:h-[25rem] md:w-[4rem] md:rounded-full
      md:flex-col md:justify-center md:px-0
      md:left-auto

      md:bg-black/70 md:opacity-50 md:hover:opacity-100 md:transition-opacity md:duration-300
    '>
      {/* Home link - Wrapped with <a> tag */}
      <a href="/" className='
        h-full flex-1 flex justify-center items-center relative group
        md:h-[20%] md:w-[4rem]
      '>
        {/* Paragraph label: */}
        <p className='
          min-w-[5rem] mx-2 text-sm absolute z-10 p-2 rounded-xl bg-[#000000be]
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          bottom-full left-1/2 -translate-x-1/2 mb-2 text-center
          md:right-16 md:bottom-auto md:left-auto md:-translate-x-0 md:mb-0 md:text-left
        '>Home</p>
        {/* Conditionally apply text color based on currentPath */}
        <Home className={`${currentPath === '/' ? 'text-[#1da1f2] fill-[]' : 'text-white'} md:size-8 size-6`} />
      </a>

      {/* About link - Wrapped with <a> tag */}
      <a href="/about" className='
        h-full flex-1 flex justify-center items-center relative group
        md:h-[20%] md:w-[4rem]
      '>
        <p className='
          min-w-[5rem] mx-2 text-sm absolute z-10 p-2 rounded-xl bg-[#000000be]
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          bottom-full left-1/2 -translate-x-1/2 mb-2 text-center
          md:right-16 md:bottom-auto md:left-auto md:-translate-x-0 md:mb-0 md:text-left
        '>About</p>
        <User className={`${currentPath === 'about' ? 'text-[#1da1f2] fill-[]' : 'text-white'} md:size-8 size-6`} />
      </a>

      {/* Projects link - Wrapped with <a> tag */}
      <a href="/projects" className='
        h-full flex-1 flex justify-center items-center relative group
        md:h-[20%] md:w-[4rem]
      '>
        <p className='
          min-w-[5rem] mx-2 text-sm absolute z-10 p-2 rounded-xl bg-[#000000be]
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          bottom-full left-1/2 -translate-x-1/2 mb-2 text-center
          md:right-16 md:bottom-auto md:left-auto md:-translate-x-0 md:mb-0 md:text-left
        '>Projects</p>
        <Laptop className={`${currentPath === 'projects' ? 'text-[#1da1f2] fill-[]' : 'text-white'} md:size-8 size-6`} />
      </a>

      {/* Blogs link - Wrapped with <a> tag */}
      <a href="/blogs" className='
        h-full flex-1 flex justify-center items-center relative group
        md:h-[20%] md:w-[4rem]
      '>
        <p className='
          min-w-[5rem] mx-2 text-sm absolute z-10 p-2 rounded-xl bg-[#000000be]
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          bottom-full left-1/2 -translate-x-1/2 mb-2 text-center
          md:right-16 md:bottom-auto md:left-auto md:-translate-x-0 md:mb-0 md:text-left
        '>Blogs</p>
        <Bookmark className={`${currentPath === 'blogs' ? 'text-[#1da1f2] fill-[]' : 'text-white'} md:size-8 size-6`} />
      </a>

      {/* Skills link - Wrapped with <a> tag */}
      <a href="/skills" className='
        h-full flex-1 flex justify-center items-center relative group
        md:h-[20%] md:w-[4rem]
      '>
        <p className='
          min-w-[5rem] mx-2 text-sm absolute z-10 p-2 rounded-xl bg-[#000000be]
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          bottom-full left-1/2 -translate-x-1/2 mb-2 text-center
          md:right-16 md:bottom-auto md:left-auto md:-translate-x-0 md:mb-0 md:text-left
        '>Skills</p>
        <Star className={`${currentPath === 'skills' ? 'text-[#1da1f2] fill-[]' : 'text-white'} md:size-8 size-6`} />
      </a>
    </div>
  );
}

export default Navbar;