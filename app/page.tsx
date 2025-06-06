import Image from "next/image";
import Link from "next/link";

import {Dancing_Script } from "next/font/google";


const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['400']
})

export default function Home() {
  return (
    <div className={`w-full md:min-h-[100vh] flex justify-center align-center min-h-[50vh] scrollbar-hidden`} id='home'>
      <div className={`md:w-[100%] md:min-h-[70vh] w-full min-h-[80vh]`}>
        <div className={`w-full md:h-[45vh] flex flex-col justify-center md:items-center relative h-[30vh] items-start`}>
          <div className={`w-full h-full overflow-hidden relative`}> {/* Added relative for Image fill prop */}
            {/* Background image */}
            <Image
              className={`object-cover`} // Use object-cover to make sure it covers the div
              alt='Background'
              src='/images/bg.jpeg'
              fill // Makes the image fill the parent div
              sizes="100vw" // Helps Next.js optimize for different screen sizes
              priority // Prioritize loading as it's a key visual
              unoptimized // Set to true if you don't want Next.js to optimize this specific image (e.g., if it's a specific texture that needs to be exact)
            />
          </div>
          {/* Profile picture */}
          <Image
            className={`md:w-[15rem] md:h-[15rem] rounded-full mx-2 absolute md:bottom-[-5rem] border-[7px] border-white w-[10rem] h-[10rem] bottom-[-1rem] object-cover`}
            alt='Bashorun Dolapo'
            src='/images/me.jpg'
            width={240} // Approximate width for md:w-[15rem] (15 * 16 = 240px)
            height={240} // Approximate height for md:h-[15rem]
            priority
          />
        </div>

        <div className={`w-full md:h-[40vh] flex flex-col items-center justify-around md:mt-[6rem] min-h-[40vh] mt-18`}>
          <div className={`md:w-[70%] min-h-[5rem] flex items-center justify-center`}>
            <h1 className={`md:text-[6rem] ${dancing.className} text-[#000] md:text-7xl text-5xl text-center tracking-wide`}>Bashorun Dolapo</h1>
            {/* Verified icon */}
            <Image
              className={`md:w-[5rem] md:visible invisible w-[0rem]`}
              alt='Verified icon'
              src='/icons/verified.jpg'
              width={80} // Approximate width for md:w-[5rem]
              height={80} // Approximate height for md:w-[5rem]
              unoptimized // Keep unoptimized if it's a small icon and you don't want any processing
            />
          </div>
          <h3 className={`md:text-xl font-normal md:my-[1rem] text-md text-[#00000080] text-center`} >Web/Mobile Developer</h3>


          <div className={`md:my-[1rem] md:mt-[3rem] mt-16`}>
            <Link href="/projects">
              <button className={`md:w-[13em] bg-[#000] h-[2.5em] md:text-lg text-sm rounded-md text-white md:mx-[1.9rem] w-[47vw] mx-1 hover:scale-[105%] duration-[500ms]`}>My Projects</button>
            </Link>

            <Link href={"/"} passHref={true}>
              <button className={`md:w-[13em] border-[2px] border-[black] bg-[#66d47e02] h-[2.5em] md:text-lg text-sm rounded-md text-[#000] font-bold md:mx-[1.9rem] w-[47vw] mx-1 hover:scale-[105%] duration-[500ms]`}>My Resume</button>
            </Link>
          </div>

          <div className={`my-[1rem] h-12 w-96 md-[98%] flex items-center justify-center md:mt-[2rem]`}>
            <Link href="https://www.linkedin.com/in/bashorun-dolapo-8b5164225/" passHref={true}>
              {/* Social media icons */}
              <Image
                className={`md:size-10 size-8 rounded-xl mx-3 cursor-pointer`} // Added h-10 to match w-10
                alt='LinkedIn'
                src='/icons/linkedin.webp'
                width={40} // Set explicit width
                height={40} // Set explicit height
                unoptimized
              />
            </Link>
            <Link href="https://github.com/codebydolapo" passHref={true}>
              <Image
                className={`md:size-10 size-8 rounded-xl mx-3 cursor-pointer`}
                alt='GitHub'
                src='/icons/git.png'
                width={40}
                height={40}
                unoptimized
              />
            </Link>
            <Link href="https://twitter.com/the_transistorr" passHref={true}>
              <Image
                className={`md:size-10 size-8 rounded-xl mx-3 cursor-pointer`}
                alt='Twitter'
                src='/icons/twitter.png'
                width={40}
                height={40}
                unoptimized
              />
            </Link>
            <Link href="https://web.facebook.com/bashorun.dolapo.3" passHref={true}>
              <Image
                className={`md:size-10 size-8 rounded-xl mx-3 cursor-pointer`}
                alt='Facebook'
                src='/icons/facebook.png'
                width={40}
                height={40}
                unoptimized
              />
            </Link>
            <Link href="https://www.instagram.com/_0xdolapo/" passHref={true}>
              <Image
                className={`md:size-10 size-8 rounded-xl mx-3 cursor-pointer`}
                alt='Instagram'
                src='/icons/instagram.png'
                width={40}
                height={40}
                unoptimized
              />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}