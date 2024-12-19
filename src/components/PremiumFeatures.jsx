import { BadgeCheck, CodeXml, Folders, MapPin, MessageSquareDot, Zap } from 'lucide-react'
import React from 'react'


const PremiumFeatures = () => {
    return (
        <div className='mb-16 max-md:mx-10'>
            <div className='text-center'>
                <h2 className="max-md:text-[2rem] relative text-center after:content-[''] after:absolute after:h-[3px] after:w-[50px] after:bg-primary after:bottom-[-15px] after:left-1/2 after:-translate-x-1/2">
                    Explore Premium Features
                </h2>
                <p className='lg:max-w-[75%] xl:max-w-[59%] 2xl:max-w-[55%] mx-auto'>Discover the unique features of sApp that set it apart from the competition, designed to deliver unmatched performance and seamless user experiences.</p>
            </div>

            {/* Features Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center p-4 flex flex-col items-center ">
                    <MessageSquareDot className='w-10 h-10 text-primary'/>
                    <h4 className="my-3 text-lg font-semibold">Fully Functional</h4>
                    <p className="text-gray-500 !font-normal !m-0">Enjoy a complete suite of features designed for seamless user experiences.</p>
                </div>
                <div className="text-center p-4 flex flex-col items-center">
                    <Zap className='w-10 h-10 text-primary'/>
                    <h4 className="my-3 text-lg font-semibold">Live Chat</h4>
                    <p className="text-gray-500 !font-normal !m-0">Connect with your audience in real-time for instant support and engagement.</p>
                </div>
                <div className="text-center p-4 flex flex-col items-center">
                    <CodeXml className='w-10 h-10 text-primary'/>
                    <h4 className="my-3 text-lg font-semibold">Secure Data</h4>
                    <p className="text-gray-500 !font-normal !m-0">Protect your information with robust security measures.</p>
                </div>
                <div className="text-center p-4 flex flex-col items-center">
                    <MapPin className='w-10 h-10 text-primary'/>
                    <h4 className="my-3 text-lg font-semibold">Location Tracking</h4>
                    <p className="text-gray-500 !font-normal !m-0">Monitor and track locations efficiently with ease.</p>
                </div>
                <div className="text-center p-4 flex flex-col items-center">
                    <BadgeCheck className='w-10 h-10 text-primary'/>
                    <h4 className="my-3 text-lg font-semibold">Powerful Settings</h4>
                    <p className="text-gray-500 !font-normal !m-0">Adjust your preferences with powerful customization options.</p>
                </div>
                <div className="text-center p-4 flex flex-col items-center">
                    <Folders className='w-10 h-10 text-primary'/>
                    <h4 className="my-3 text-lg font-semibold">Multiple Languages</h4>
                    <p className="text-gray-500 !font-normal !m-0">Engage a global audience with support for multiple languages.</p>
                </div>
            </div>



        </div>
    )
}

export default PremiumFeatures