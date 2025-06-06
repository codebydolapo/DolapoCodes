"use client"
import React, { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { Globe, Smartphone, ChevronLeft, ChevronRight } from 'lucide-react';
import { Projects } from '@/types/types';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'; // Optional: for auto-playing the slider

const StackTag = ({ icon, technology }: { icon: string; technology: string }) => {
    return (
        <div className='px-3 py-2 cursor-pointer flex space-x-2 border-[1px] border-black rounded-xl mr-2 my-2'>
            <Image className={`size-4`} alt='' src={icon} width={0} height={0} unoptimized />
            <p className='text-xs text-black'>{technology}</p>
        </div>
    )
}

function ProjectCard({
    title, description, type, stack, liveLink, gitRepo, image // Destructure 'image' prop
}: Projects) {
    // Embla Carousel hook. Autoplay plugin is added for automatic sliding.
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi, setSelectedIndex]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect); // Re-initialize on window resize/orientation change
    }, [emblaApi, onSelect]);


    return (
        <div className='w-[23rem] min-h-[25rem] mt-4 shadow-lg rounded-xl overflow-hidden'> {/* Added shadow and rounded corners */}
            <div className='relative w-full h-[15rem] overflow-hidden'> {/* Set a fixed height for the image container */}
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container flex h-full">
                        {image.map((imgSrc, index) => (
                            <div className="embla__slide flex-shrink-0 w-full h-full" key={index}>
                                <Image
                                    className="object-cover w-full h-full" // Use object-cover to fill the space
                                    alt={`${title} project screenshot ${index + 1}`}
                                    src={imgSrc}
                                    width={500} // Set a relevant width
                                    height={300} // Set a relevant height to maintain aspect ratio with object-cover
                                    unoptimized={imgSrc.endsWith('.gif')} // Unoptimize only if it's a GIF
                                    priority={index === 0} // Prioritize loading the first image
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Slider navigation buttons */}
                {image.length > 1 && ( // Only show controls if there's more than one image
                    <>
                        <button
                            className="absolute top-1/2 left-2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-all"
                            onClick={scrollPrev}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            className="absolute top-1/2 right-2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-all"
                            onClick={scrollNext}
                        >
                            <ChevronRight size={20} />
                        </button>

                        {/* Dots for navigation */}
                        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
                            {image.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2 h-2 rounded-full ${selectedIndex === index ? 'bg-white' : 'bg-gray-400 bg-opacity-70'} transition-colors`}
                                    onClick={() => emblaApi && emblaApi.scrollTo(index)}
                                />
                            ))}
                        </div>
                    </>
                )}


                <div className='px-3 py-2 cursor-pointer flex items-center justify-around space-x-2 bg-[#1da1f2] rounded-xl mr-2 my-2 absolute right-2 bottom-2 z-10'> {/* Added z-10 to keep it above controls */}
                    {type === "web"
                        &&
                        <>
                            <Globe className={`size-4 text-white`} />
                            <p className='text-xs text-white font-semibold'>Web</p>
                        </>
                    }
                    {type === "mobile" &&
                        <>
                            <Smartphone className={`size-4 text-white`} /> {/* Changed from Group to Smartphone for mobile icon */}
                            <p className='text-xs text-white font-semibold'>Mobile</p>
                        </>
                    }
                </div>
            </div>
            <div className='p-4'> {/* Added padding to the content below the image */}
                <h1 className='font-semibold text-xl my-2'>{title}</h1> {/* Display title from prop */}
                <p className='text-sm my-2'>{description}</p> {/* Display description from prop */}
                <div className='flex space-x-2 my-4'>
                    {gitRepo && ( // Conditionally render GitHub link
                        <a href={gitRepo} target="_blank" rel="noopener noreferrer" className='py-2 px-4 cursor-pointer flex items-center space-x-2 bg-black rounded-full'>
                            <Image className={`size-4 rounded-xl bg-white`} alt='GitHub icon' src='/icons/git.png' width={0} height={0} unoptimized />
                            <p className='text-xs text-white'>View on GitHub</p>
                        </a>
                    )}
                    {liveLink && liveLink !== "/" && ( // Conditionally render Live link
                        <a href={liveLink} target="_blank" rel="noopener noreferrer" className='p-2 cursor-pointer flex items-center space-x-2 bg-[#1da1f2] rounded-full'>
                            <Globe className={`size-4 text-white`} />
                            <p className='text-xs text-white'>Live Demo</p>
                        </a>
                    )}
                </div>
                <div className='flex items-center justify-start flex-wrap mt-4'>
                    {stack.map(({ icon, technology }: { icon: string; technology: string }) => {
                        return (
                            <StackTag
                                key={technology} // Added a key for list rendering
                                icon={icon}
                                technology={technology}
                            />
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default ProjectCard