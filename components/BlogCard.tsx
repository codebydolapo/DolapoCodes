// ============================================
// BlogCard.tsx - Component
// ============================================
"use client"
import React, { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { BlogPosts } from '@/types/types';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

function BlogCard({
    title, 
    excerpt, 
    link, 
    image
}: BlogPosts) {
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
        <article className='w-full max-w-sm bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group'>
            
            {/* Image Carousel Section */}
            <div className='relative w-full h-56 bg-gray-100 overflow-hidden'>
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container flex h-full">
                        {image.map((imgSrc, index) => (
                            <div className="embla__slide flex-shrink-0 w-full h-full" key={index}>
                                <Image
                                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                    alt={`${title} illustration ${index + 1}`}
                                    src={imgSrc}
                                    width={400}
                                    height={224}
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
                                    className={`h-2 rounded-full transition-all ${
                                        selectedIndex === index 
                                            ? 'bg-white w-6' 
                                            : 'bg-white/60 hover:bg-white/80 w-2'
                                    }`}
                                    onClick={() => emblaApi && emblaApi.scrollTo(index)}
                                    aria-label={`Go to image ${index + 1}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Content Section */}
            <div className='p-5 space-y-3'>
                {/* Title */}
                <h2 className='font-bold text-xl text-gray-900 line-clamp-2 group-hover:[#5188ff] transition-colors'>
                    {title}
                </h2>
                
                {/* Excerpt */}
                <p className='text-sm text-gray-600 leading-relaxed line-clamp-3'>
                    {excerpt}
                </p>
                
                {/* Read More Link */}
                {link && (
                    <Link 
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='inline-flex items-center gap-2 text-[#5188ff] hover:text-[#5188ff] font-medium text-sm pt-2 group/link'
                    >
                        <span>Read Article</span>
                        <ExternalLink className='w-4 h-4 transition-transform group-hover/link:translate-x-1' />
                    </Link>
                )}
            </div>
        </article>
    )
}

export default BlogCard;