import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'


const Contact = () => {

    const [result, setResult] =useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c47aeef8-24cf-4965-b1a9-71479a6cd9f1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-15'>
        <h4 className='text-center mb-2 text-lg font-ovo'>
            Connect with us</h4>
        <h2 className='text-center text-5xl font-ovo'>
            Get in touch</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
            It seems like I can’t generate any more images right now. Please try again later. Let me know if there’s anything else you’d like help with in the meantime!</p>
        <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-10 mb-8'>
                <input type="text" placeholder='Enter your name' required 
                className=' font-outfit flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='name'/>
                <input type="email" placeholder='Enter your email' required 
                 className=' font-outfit flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white ' name='email'/>
            </div>
            <textarea rows='6' placeholder='Enter your message' required
            className=' font-outfit w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' name='message'></textarea> 
            <button type='submit'
            className=' font-outfit py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>
                Submit now <Image src={assets.right_arrow_white} alt='' className='w-4'/></button>
            <p className='mt-4'>{result}</p>
        </form>
    </div>
  )
}

export default Contact
