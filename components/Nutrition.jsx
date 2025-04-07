import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Nutrition = () => {
  return (
    <div id='nutrition' className='w-full px-[12%] py-10 scroll-mt-15'>
        <h4 className='text-center mb-2 text-lg font-ovo'>
            My Portfolio</h4>
        <h2 className='text-center text-5xl font-ovo'>
            My latest work</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
            It seems like I can’t generate any more images right now. Please try again later. Let me know if there’s anything else you’d like help with in the meantime!</p>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] my-10 gap-5'>
            {workData.map((project,index)=>(
                <div key={index} 
                className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                style={{backgroundImage: `url(${project.bgImage})`}}>
                    <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                        <div>
                            <h2 className='font-semibold '>{project.title}</h2>
                            <p  className='text-sm text-gray-700 font-outfit'>{project.description}</p>
                        </div>
                        <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_#000] group-hover:bg-lime-300'>
                            <Image src={assets.send_icon} alt='send icon' className='w-5'/> 
                        </div>
                    </div>
                    
                    

                </div>            
            ))}

        </div>
        <a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 hover:shadow-red-500 hover:shadow-md'>
            Show more <Image src={assets.right_arrow_bold} alt='' className='w-4' /> </a>
    </div>
  )
}

export default Nutrition
