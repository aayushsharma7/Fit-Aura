import { assets, infoList } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Exercises = () => {
  return (
    <div id='exercises' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-ovo'>Exercises</h4>
      <h2 className='text-center text-5xl font-ovo'>Choose your Exercise</h2>
      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image src={assets.user_image} alt='' className='w-full rounded-3xl -translate-y-16'/>
        </div> 
        <div className='flex-1'>
          <p className='-mb-11 max-w-2xl font-ovo -translate-y-20'>
          Target what matters most. Whether you're building strength in your shoulders, powering up your legs, or tightening your core — we've got curated exercises to match your goals. Select a focus area and start sculpting a stronger, healthier you.Each category is designed with purpose from mobility and endurance to raw strength and tone. No matter your fitness level, you'll find routines that challenge you, motivate you, and grow with you. So take a deep breath, choose your zone, and let the transformation begin one rep at a time.

          </p>
          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({icon,iconDark,title,description},index)=>(
              <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-red-500 hover:shadow-lg' 
              key={index} >
              <Image src={icon} alt={title} className='w-7 mt-3 translate-x-16'/>
              <h3 className='my-4 font-semibold text-gray-700 text-center'>{title} </h3>
              <p className='text-gray-600 text-sm text-center'>{description}</p>
              </li>
            ))}
          </ul>
          
        </div>
      </div>
    </div>
  )
}

export default Exercises
