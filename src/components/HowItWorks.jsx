import React from 'react'
import Accordian from './Accordian';

const HowItWorks = () => {
    const accordionData = [
        {
          title: 'How to install sApp?',
          content: 'To install sApp, follow the in the provided documentation. It covers everything you need to set up and customize the theme effortlessly..',
        },
        {
          title: 'How can i edit my personal information?',
          content:
            'You can easily edit your personal information by navigating to the profile settings within the app. From there, update your details and save the changes instantly.',
        },
        {
          title: 'Do you have a free trail?',
          content: 'Absolutely! sApp offers a free trial that gives you full access to its core features. This allows you to explore the theme, test its capabilities, and determine if it fits your needs before making a purchase decision.',
        },
        {
          title: 'Can I get support from the Author?',
          content: 'Yes, you can get dedicated support from the author. If you have any questions or encounter issues, simply reach out through the support channels provided in the documentation or marketplace. The author is available to assist with any queries related to installation, customization, or troubleshooting.',
        },
        {
          title: "Contact form isn't working?",
          content: "If the contact form isn't working, first ensure that all required fields are filled out correctly. If the issue persists, please reach out to support for assistance, and provide details about the issue for a quicker resolution.",
        },
      ];
    return (
        <div className='py-16 max-md:mx-10'>
            <div className='text-center'>
                <h2 className="relative text-center after:content-[''] after:absolute after:h-[3px] after:w-[50px] after:bg-primary after:bottom-[-15px] after:left-1/2 after:-translate-x-1/2 max-md:text-[2rem]">
                    Have questions? Look here
                </h2>
                <p className='w-full md:max-w-[70%] lg:max-w-[55%] 2xl:max-w-[35%] text-gray-400 mx-auto'>Find answers to the most common questions, covering everything from setup to advanced features, to help you get the most out of the platform.</p>
            </div>
            <Accordian data={accordionData} />
        </div>
    )
}

export default HowItWorks