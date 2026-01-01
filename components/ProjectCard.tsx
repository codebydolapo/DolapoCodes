"use client"
import React, { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { Globe, Smartphone, ChevronLeft, ChevronRight, Github } from 'lucide-react';
import { Projects } from '@/types/types';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const StackTag = ({ icon, technology }: { icon: string; technology: string }) => {
    return (
        <div className='px-3 py-1.5 flex items-center gap-2 border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200'>
            <Image 
                className='w-4 h-4' 
                alt={technology} 
                src={icon} 
                width={16} 
                height={16}
            />
            <p className='text-xs text-gray-700 font-medium'>{technology}</p>
        </div>
    )
}

function ProjectCard({
    title, 
    description, 
    type, 
    stack, 
    liveLink, 
    gitRepo, 
    image
}: Projects) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000, stopOnInteraction: true })]);
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
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    return (
        <article className='w-full max-w-sm bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden'>
            
            {/* Image Carousel Section */}
            <div className='relative w-full h-64 bg-gray-100 overflow-hidden group'>
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container flex h-full">
                        {image.map((imgSrc, index) => (
                            <div className="embla__slide flex-shrink-0 w-full h-full" key={index}>
                                <Image
                                    className="object-cover w-full h-full"
                                    alt={`${title} screenshot ${index + 1}`}
                                    src={imgSrc}
                                    width={400}
                                    height={256}
                                    unoptimized={imgSrc.endsWith('.gif')}
                                    priority={index === 0}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Controls - Only show if multiple images */}
                {image.length > 1 && (
                    <>
                        <button
                            className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/60 hover:bg-black/80 p-2 rounded-full text-white transition-all opacity-0 group-hover:opacity-100"
                            onClick={scrollPrev}
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/60 hover:bg-black/80 p-2 rounded-full text-white transition-all opacity-0 group-hover:opacity-100"
                            onClick={scrollNext}
                            aria-label="Next image"
                        >
                            <ChevronRight size={20} />
                        </button>

                        {/* Dots Navigation */}
                        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                            {image.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-all ${
                                        selectedIndex === index 
                                            ? 'bg-white w-6' 
                                            : 'bg-white/60 hover:bg-white/80'
                                    }`}
                                    onClick={() => emblaApi && emblaApi.scrollTo(index)}
                                    aria-label={`Go to image ${index + 1}`}
                                />
                            ))}
                        </div>
                    </>
                )}

                {/* Type Badge */}
                <div className='absolute top-3 right-3 px-3 py-1.5 flex items-center gap-2 bg-blue-500 rounded-lg shadow-lg'>
                    {type === "web" ? (
                        <>
                            <Globe className='w-4 h-4 text-white' />
                            <p className='text-xs text-white font-semibold'>Web</p>
                        </>
                    ) : (
                        <>
                            <Smartphone className='w-4 h-4 text-white' />
                            <p className='text-xs text-white font-semibold'>Mobile</p>
                        </>
                    )}
                </div>
            </div>

            {/* Content Section */}
            <div className='p-5 space-y-4'>
                {/* Title */}
                <h2 className='font-bold text-xl text-gray-900'>{title}</h2>
                
                {/* Description */}
                <p className='text-sm text-gray-600 leading-relaxed line-clamp-3'>{description}</p>
                
                {/* Action Buttons */}
                <div className='flex flex-wrap gap-3 pt-2'>
                    {gitRepo && (
                        <a 
                            href={gitRepo} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className='inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-sm font-medium transition-colors duration-200'
                        >
                            <Github className='w-4 h-4' />
                            <span>GitHub</span>
                        </a>
                    )}
                    {liveLink && liveLink !== "/" && (
                        <a 
                            href={liveLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className='inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors duration-200'
                        >
                            <Globe className='w-4 h-4' />
                            <span>Live Demo</span>
                        </a>
                    )}
                </div>
                
                {/* Tech Stack Tags */}
                <div className='flex flex-wrap gap-2 pt-2'>
                    {stack.map(({ icon, technology }) => (
                        <StackTag
                            key={technology}
                            icon={icon}
                            technology={technology}
                        />
                    ))}
                </div>
            </div>
        </article>
    )
}

export default ProjectCard;