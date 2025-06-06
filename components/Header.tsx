import React from 'react'
import Image from 'next/image'

function Header() {
    return (
        <div className='w-full h-[4rem] bg-black flex items-center justify-start px-2'>

            <Image
                className={`size-6 bg-white rounded-full mr-2`} // Use object-cover to make sure it covers the div
                alt='logo'
                src='/images/logo.png'
                width={0}
                height={0}
                priority // Prioritize loading as it's a key visual
                unoptimized // Set to true if you don't want Next.js to optimize this specific image (e.g., if it's a specific texture that needs to be exact)
            />
            <h1 className='text-white font-semibold text-xl'>DolapoCodes</h1>
        </div>
    )
}

export default Header