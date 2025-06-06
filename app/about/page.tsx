import React from 'react'
import Image from 'next/image'
// Removed 'next/link' and 'next/image' imports to resolve compilation errors


function About() { // Renamed to About for convention, assuming it's a page component
    return (
        <div className={`md:min-w-[100%] md:min-h-[100vh] md:h-[100vh] md:mb-0 flex md:flex-row md:border-b-0 md:mt-0 pb-5 items-center justify-center min-h-[100vh] h-auto mb-[2rem] flex-col-reverse border-b-[1rem] border-black mt-[2rem] md:px-2`} id='about'>

            <div className={`md:w-[40%] md:h-full overflow-hidden flex items-center justify-center w-[100%] h-[50%]`}>
                <div className={`md:w-[30rem] md:h-[30rem] rounded-full relative w-[98%] h-[50%] `}>
                    {/* Reverted to standard Image tag and adjusted styling for responsiveness */}
                    <Image
                        src='/images/me4.jpg'
                        alt='Bashorun Dolapo profile picture'
                        className='w-full h-full rounded-full object-cover' // Using w-full, h-full and object-cover to mimic 'fill' and 'objectFit'
                        unoptimized
                        width={0} height={0}
                    />
                </div>

            </div>
            <div className={`md:w-[60%] md:h-full flex flex-col items-center justify-center w-[100%] h-[50%]`}>
                <div className={`md:w-[50%] flex flex-col w-[98%]`}>
                    <h1 className={`text-center text-[#1DA1F2] my-2 md:text-4xl font-extrabold text-2xl`}>Welcome!</h1>
                    <p className={`text-center text-black my-2 md:text-lg text-sm`}>My name is <b className="text-[#1DA1F2]">Bashorun Dolapo</b>, and I am a <b className="text-[#1DA1F2]">Product-focused web/mobile software Engineer</b> </p>
                    <p className={`text-center text-black my-2 md:text-lg text-sm`}>I have a burning passion for <b className="text-[#1DA1F2]">building products</b> that help others and solve real world problems.</p>
                    <p className={`text-center text-black my-2 md:text-lg text-sm`}>
                        I have a <b className="text-[#1DA1F2]">keen eye for detail</b> and am looking forward to <b className="text-[#1DA1F2]">meeting user needs</b> with intuitive and user-friendly experiences.</p>
                    {/* <p className={`text-center text-black my-2`}>
                    I am a strong advocate for <b className="text-[#1DA1F2]">collaboration and innovation</b>, and I ensure that products are not only functional, but also delightful to use</p> */}
                    <p className={`text-center text-black my-2 md:text-lg text-sm`}>
                        When I&apos;m not working on delivering great products, I enjoy Walks, Writing, Movies, Music and Weightlifting</p>

                </div>
                <div className={`md:w-[50%] flex items-start justify-around w-[98%]`}>
                    {/* Reverted to standard a tag */}
                    <a href="https://t.me/CodeByDolapo" target="_blank" rel="noopener noreferrer">
                        <div className={`md:w-[12rem] md:h-[3rem] md:text-normal flex items-center justify-center bg-[#24A1DE] text-white rounded-lg my-3 w-[48vw] h-[3rem] cursor-pointer hover:scale-[105%] text-sm`}>Let&apos;s Discuss!
                            {/* Reverted to standard Image tag */}
                            <Image
                                src='/icons/telegram.png'
                                alt='Telegram icon'
                                className='w-8 h-8 rounded-xl mx-2 cursor-pointer' // Added h-8 explicitly for better sizing
                                unoptimized
                                width={0} height={0}
                            />
                        </div>
                    </a>
                    {/* Reverted to standard a tag */}
                    <a href={"/"}> {/* Consider if this should be a link to a specific resume file or page */}
                        <button className={`md:w-[12rem] md:h-[3rem] md:text-normal border-[1px] border-black text-black rounded-lg my-3 font-bold w-[48vw] h-[3rem] hover:scale-[105%] text-sm`}>Read My Resume</button>
                    </a>
                </div>
                <div className={`my-[1rem] h-12 w-96 flex items-center justify-center mt-10`}>
                    {/* Reverted to standard a tag and Image tags */}
                    <a href="https://www.linkedin.com/in/bashorun-dolapo-8b5164225/" target="_blank" rel="noopener noreferrer">
                        <Image
                            src='/icons/linkedin.webp'
                            alt='LinkedIn icon'
                            className='w-10 h-10 rounded-xl mx-3 cursor-pointer hover:scale-[110%]'
                            unoptimized
                            width={0} height={0}
                        />
                    </a>
                    <a href="https://github.com/codebydolapo" target="_blank" rel="noopener noreferrer">
                        <Image
                            src='/icons/git.png'
                            alt='GitHub icon'
                            className='w-10 h-10 rounded-xl mx-3 cursor-pointer hover:scale-[110%]'
                            unoptimized
                            width={0} height={0}
                        />
                    </a>
                    <a href="https://twitter.com/the_transistorr" target="_blank" rel="noopener noreferrer">
                        <Image
                            src='/icons/twitter.png'
                            alt='Twitter icon'
                            className='w-10 h-10 rounded-xl mx-3 cursor-pointer hover:scale-[110%]'
                            unoptimized
                            width={0} height={0}
                        />
                    </a>
                    <a href="https://web.facebook.com/bashorun.dolapo.3" target="_blank" rel="noopener noreferrer">
                        <Image
                            src='/icons/facebook.png'
                            alt='Facebook icon'
                            className='w-10 h-10 rounded-xl mx-3 cursor-pointer hover:scale-[110%]'
                            unoptimized
                            width={0} height={0}
                        />
                    </a>
                    <a href="https://www.instagram.com/_0xdolapo/" target="_blank" rel="noopener noreferrer">
                        <Image
                            src='/icons/instagram.png'
                            alt='Instagram icon'
                            className='w-10 h-10 rounded-xl mx-3 cursor-pointer hover:scale-[110%]'
                            unoptimized
                            width={0} height={0}
                        />
                    </a>
                </div>

            </div>

        </div>
    )
}

export default About

