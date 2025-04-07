import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Exercises = () => {
  return (
    <div id='exercises' className='w-full px-[12%] py-10 scroll-mt-12'>
      <h4 className='text-center mb-2 text-lg font-ovo'>Exercises</h4>
      <h2 className='text-center text-5xl font-ovo'>Choose your Exercise</h2>
      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image src={assets.user_image} alt='' className='w-full rounded-3xl -translate-y-12'/>
        </div> 
        <div className='flex-1'>
          <p className='-mb-11 max-w-2xl font-ovo -translate-y-20'>
          Target what matters most. Whether you're building strength in your shoulders, powering up your legs, or tightening your core — we've got curated exercises to match your goals. Select a focus area and start sculpting a stronger, healthier you.

          </p>
          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({icon,iconDark,title,description},index)=>(
              <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-red-500 hover:shadow-lg' 
              key={index} >
              {/*<Image src={icon} alt={title} className='w-12 mt-3 translate-x-14'/>*/}
              <h3 className='my-4 text-2xl translate-y-3 font-semibold text-gray-700 text-center font-ovo'>{title} </h3>
              
              </li>
            ))}
          </ul>
          
        </div>
      </div>
    </div>
  )
}

export default Exercises
