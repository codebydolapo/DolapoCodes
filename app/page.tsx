import Image from "next/image";
import Link from "next/link";

import { Marck_Script } from "next/font/google";


const marck = Marck_Script({
  subsets: ['latin'],
  weight: ['400']
})

export default function Home() {
  return (
    <div className={`w-full md:min-h-[100vh] flex justify-center align-center min-h-[50vh] scrollbar-hidden`} id='home'>
      <div className={`md:w-[100%] md:min-h-[70vh] w-full min-h-[80vh]`}>
        <div className={`w-full md:h-[45vh] flex flex-col justify-center md:items-center relative h-[30vh] items-start`}>
          <div className={`w-full h-full overflow-hidden `}>
            <Image className={`w-full h-auto`} alt='' src='/images/bg.jpeg' width={0} height={0} unoptimized/>
          </div>
          <img className={`md:w-[15rem] md:h-[15rem] rounded-full mx-2 absolute md:bottom-[-5rem] border-[7px] border-white w-[10rem] h-[10rem] bottom-[-1rem]`} alt='' src='/images/me.jpg' />
        </div>

        <div className={`w-full md:h-[40vh] flex flex-col items-center justify-around md:mt-[6rem] min-h-[50vh] mt-12`}>
          <div className={`md:w-[70%] min-h-[5rem] flex items-center justify-center`}>
            <h1 className={`md:text-[6rem] ${marck.className} text-[#000] text-7xl text-center`}>Bashorun Dolapo</h1>
            <img className={`md:w-[5rem] md:visible invisible w-[0rem]`} alt='' src='/icons/verified.jpg' />
          </div>
          <h3 className={`md:text-xl font-normal my-[1rem] text-lg text-[#00000080] text-center`} >Web/Mobile Developer</h3>


          <div className={`md:my-[1rem]`}>
            <Link href="/#about">
              {/* <button className={`md:w-[13em] bg-[#1DB954] h-[2.5em] rounded-md text-white md:mx-[1.9rem] w-[47vw] mx-1 hover:scale-[105%] duration-[500ms]`}>My Portfolio</button> */}
              <button className={`md:w-[13em] bg-[#000] h-[2.5em] rounded-md text-white md:mx-[1.9rem] w-[47vw] mx-1 hover:scale-[105%] duration-[500ms]`}>About Me</button>
            </Link>

            <Link href={"/"} passHref={true}>
              <button className={`md:w-[13em] border-[2px] border-[black] bg-[#66d47e02] h-[2.5em] rounded-md text-[#000] font-bold md:mx-[1.9rem] w-[47vw] mx-1 hover:scale-[105%] duration-[500ms]`}>My Resume</button>
              {/* <button className={`md:w-[13em] bg-[#4b4f56] h-[2.5em] rounded-md text-white md:mx-[1.9rem] w-[47vw] mx-1`}>My Resume</button> */}
            </Link>
          </div>

          <div className={`my-[1rem] h-12 w-96 md-[98%] flex items-center justify-center mt-10`}>
            <Link href="https://www.linkedin.com/in/bashorun-dolapo-8b5164225/" passHref={true}>
              <img className={`w-10 rounded-xl mx-3 cursor-pointer`} alt='' src='/icons/linkedin.webp' />
            </Link>
            <Link href="https://github.com/codebydolapo" passHref={true}>
              <img className={`w-10 rounded-xl mx-3 cursor-pointer`} alt='' src='/icons/git.png' />
            </Link>
            <Link href="https://twitter.com/the_transistorr" passHref={true}>
              <img className={`w-10 rounded-xl mx-3 cursor-pointer`} alt='' src='/icons/twitter.png' />
            </Link>
            <Link href="https://web.facebook.com/bashorun.dolapo.3" passHref={true}>
              <img className={`w-10 rounded-xl mx-3 cursor-pointer`} alt='' src='/icons/facebook.png' />
            </Link>
            <Link href="https://www.instagram.com/_0xdolapo/" passHref={true}>
              <img className={`w-10 rounded-xl mx-3 cursor-pointer`} alt='' src='/icons/instagram.png' />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
