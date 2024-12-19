import React from 'react'
import thumb from '../assets/images/thumb-4.png';
import { CircleCheckBig } from 'lucide-react';

const PowerfulTools = () => {
    return (
        <div className='bg-[#F6F9FE] py-8 '>
            <div className=' flex  container max-md:flex-col justify-around max-md:ps-10'>
                <div className="col-12 col-md-5 col-lg-5 mt-4 mt-md-0 max-md:hidden">
                    <img src={thumb} alt="App Showcase" className="w-full h-auto" />
                </div>
                <div className='max-md:w-[80%] md:max-w-[61%] 2xl:max-w-[50%]'>
                    <h2 className='max-md:text-[2rem]'>Work faster with powerful tools.</h2>
                    <ul className="space-y-4 list-disc text-[1.1rem] font-medium text-gray-700">
                        <li className="flex items-center">
                            <p className="mr-3 text-primary"><CircleCheckBig /></p>
                            Utilize integrated messaging features to ensure seamless communication with clients at any time.
                        </li>
                        <li className="flex items-center">
                            <p className="mr-3 text-primary"><CircleCheckBig /></p>
                            Schedule video calls and meetings directly within the app for efficient discussions and feedback.
                        </li>
                        <li className="flex items-center">
                            <p className="mr-3 text-primary"><CircleCheckBig /></p>
                            Share project updates and documents in real-time to keep clients informed and engaged.
                        </li>
                        <li className="flex items-center">
                            <p className="mr-3 text-primary"><CircleCheckBig /></p>
                            Track client interactions and communication history for better relationship management and follow-ups.
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default PowerfulTools