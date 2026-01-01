// ============================================
// page.tsx - Blog Posts Page
// ============================================
import BlogCard from '@/components/BlogCard'
import React from 'react'
import blogPosts from '@/data/blogPosts'

export default function BlogPage() {
    return (
        <section className='min-h-screen w-full py-12 px-4'>
            <div className='max-w-7xl mx-auto'>
                
                {/* Page Header */}
                <div className='mb-12'>
                    <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-2'>
                        Blog Posts
                    </h1>
                    <div className='w-20 h-1 bg-blue-500'></div>
                    <p className='mt-4 text-lg text-gray-600 max-w-2xl'>
                        Thoughts, tutorials, and insights on web development, technology, and software engineering
                    </p>
                </div>

                {/* Blog Posts Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {blogPosts.map((post, index) => (
                        <BlogCard
                            key={post.title || index} // Use title as key if unique, fallback to index
                            title={post.title}
                            excerpt={post.excerpt}
                            link={post.link}
                            image={post.image}
                        />
                    ))}
                </div>

                {/* Empty State */}
                {blogPosts.length === 0 && (
                    <div className='text-center py-20'>
                        <p className='text-gray-500 text-lg'>No blog posts yet. Check back soon!</p>
                    </div>
                )}
            </div>
        </section>
    )
}