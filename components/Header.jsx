import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 '>
        <div>
            <Image src={assets.profile_img} alt='' className=' rounded-full w-37 hover:-translate-y-1 duration-500 hover:shadow-red-500 hover:shadow-xl'/>
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>
                Transforming Lives</h3>
    <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>
        fitness app built to uplift your daily routine.</h1>
        <p className='max-w-2xl mx-auto font-ovo'>
        Welcome to your new fitness companion — a powerful app designed to seamlessly integrate into your daily life, helping you stay consistent, energized, and inspired every step of the way.
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href='#contact' className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 '>
              contact us <Image src={assets.right_arrow_white} alt='' className='w-4'/></a>
            <a href='#exercises' className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2  hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-red-500 hover:shadow-lg'>
              explore exercises<Image src={assets.arrow_icon} alt='' className='w-4'/></a>

        </div>
    </div>
  )
}

export default Header
