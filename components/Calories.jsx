import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Calories = () => {
  return (
    <div id='calories'  className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-ovo'>
            What I Offer</h4>
        <h2 className='text-center text-5xl font-ovo'>
            Calories</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
            It seems like I can’t generate any more images right now. Please try again later. Let me know if there’s anything else you’d like help with in the meantime!</p>
            <div className=' grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10'>
                {serviceData.map(({icon,title,description,link},index)=>(
                    <div key={index} className=' text-center border border-gray-400 rounded-lg px-8 py-12 hover:shadow-red-500 hover:shadow-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'>
                        {/*<Image src={icon} alt='' className='w-10'/>*/}
                        <h3 className='font-semibold text-center text-lg my-4 text-gray-700'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5'>
                            {description}
                        </p>
                        <a href={link} className=' text-center flex items-center gap-2 text-sm mt-5'>
                            Read more <Image src={assets.right_arrow} alt='' className='w-4'/>

                        </a>
                    </div>


                ))}
            </div>
    </div>
  )
}

export default Calories
