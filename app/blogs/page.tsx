import BlogCard from '@/components/BlogCard'
import { BlogPosts } from '@/types/types'
import React from 'react'
import blogPosts from '@/data/blogPosts'

function page() {
    return (
        <div className={`
      md:min-w-[100%] md:min-h-[100vh] md:h-[100vh] md:mb-0 md:border-b-0 md:p-2 flex flex-col  md:mt-0 pb-5 
      min-h-[100vh] h-auto mb-[2rem]  mt-[2rem] overflow-y-scroll`} >
            <div className={`w-full h-[3rem] flex flex-row items-center justify-start px-5 md:pl-10 pl-2 `}>
                <h1 className={`md:text-3xl font-extrabold text-xl text-[#000000] underline`}>Blog Posts</h1>
            </div>
            <div className='w-full flex items-start justify-around flex-wrap p-2 mt-4'>

                {blogPosts.map(({ title, excerpt, link, image }: BlogPosts, index) => {
                    return (
                        <BlogCard
                            title={title}
                            excerpt={excerpt}
                            link={link}
                            image={image}
                            key = {index}
                        />
                    )
                }
                )}
            </div>
        </div>
    )
}

export default page