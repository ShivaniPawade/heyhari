import React from 'react'
import step1 from '../assets/images/step-1.png'
import step2 from '../assets/images/step-2.png'
import step3 from '../assets/images/step-3.png'
import { ChevronRight } from 'lucide-react';

const SappWorks = () => {
    return (
        <div className='bg-custom-gradient py-16'>
            <div className=' container'>
                <div className='text-center'>
                    <h2 className=" text-white max-md:text-[2rem]">
                        How sApp works?
                    </h2>
                    <p className='text-white break-words mx-auto max-w-[60%]'>Explore the intuitive and powerful features of sApp, making it easy to build, customize, and launch effective landing pages in just a few steps.</p>
                </div>
                <div className="text-center items-center py-12  flex max-md:flex-col gap-5 justify-between">
                    <div className='flex flex-col items-center'>
                        <img src={step1} alt='step' className='w-12 h-12' />
                        <h4 className=" text-white">Install the App</h4>
                        <p className="text-white max-w-[80%] !m-0">Easily download and install the app from your preferred app store to begin your journey and access all its exciting features.</p>
                    </div>
                    <div className='max-md:hidden'>
                        <ChevronRight size={48} className='text-white transition-transform duration-300 hover:translate-x-2  ' />
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={step2} alt='step' className='w-12 h-12' />
                        <h4 className=" text-white">Setup your profile</h4>
                        <p className="text-white max-w-[80%] !m-0">Create and customize your profile to tailor your experience and connect with others quickly and effortlessly, ensuring a seamless journey.</p>
                    </div>
                    <div className='max-md:hidden'>
                        <ChevronRight size={48} className='text-white transition-transform duration-300 hover:translate-x-2' />
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={step3} alt='step' className='w-12 h-12' />
                        <h4 className=" text-white">Enjoy the features!</h4>
                        <p className="text-white max-w-[80%] !m-0">Utilize the app's powerful features designed to enhance your experience and productivity, helping you achieve more with ease.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SappWorks