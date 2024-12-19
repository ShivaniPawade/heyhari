import React from 'react'
import thumb from '../assets/images/thumb-5.png';
import { ArrowRight, BadgeCheck, Cable, Clock, Folders } from 'lucide-react';

const SharePhotos = () => {
    return (
        <div className='flex justify-around container  pt-10 pb-14'>
            <div className='max-md:w-[80%] md:max-w-[61%] 2xl:max-w-[50%]'>
                <h2 className='max-md:text-[2rem]'>Share your photos with friends easily</h2>
                <ul className="space-y-4 list-disc text-[1.1rem] font-medium text-gray-700">
                    <li className="flex items-center">
                        <p className="mr-4 border  rounded-md p-2 shadow-lg text-primary"><Folders /></p>
                        Automate routine tasks to boost your efficiency and productivity while saving valuable time for other activities.
                    </li>
                    <li className="flex items-center">
                        <p className="mr-4 border rounded-md p-2 shadow-lg text-primary"> <BadgeCheck /></p>
                        Seamlessly synchronize data across all your devices, ensuring effortless access to information.
                    </li>
                    <li className="flex items-center">
                        <p className="mr-4 border rounded-md p-2 shadow-lg text-primary"><Cable /></p>
                        Control and monitor your smart home devices from a single, intuitive interface, simplifying your daily interactions.
                    </li>
                    <li className="flex items-center">
                        <p className="mr-4 border rounded-md p-2 shadow-lg text-primary"> <Clock /></p>
                        Receive personalized notifications and reminders tailored to your schedule, keeping you organized and on track.
                    </li>
                </ul>
                <div className='py-4 flex '>
                    <a href='#' className="hover:bg-gradient-to-br from-secondary to-primary border-2 border-primary hover:text-white rounded-[6rem] text-base py-4 px-8 hover:shadow-2xl  font-semibold text-center  flex  gap-2">
                        Learn More
                        <span><ArrowRight className='' /></span>
                    </a>
                </div>
            </div>
            <div className="col-12 col-md-5 col-lg-5 mt-4 mt-md-0 max-md:hidden">
                <img src={thumb} alt="App Showcase" className="w-full h-auto" />
            </div>
        </div>

    )
}

export default SharePhotos