import React from 'react';
import thumb from '../assets/images/thumb-1.png';
import { ArrowRight } from 'lucide-react';

const HeroContainer = () => {
  return (
    <div className=" max-md:flex-col flex justify-between items-center mt-10 mb-28">
      <div className='max-w-[81%] md:max-w-[58%]'>
        <h1 className="max-md:text-[2.5rem] max-2xl:text-[3.5rem] max-2xl:leading-1">Creative way to Showcase your App. Just to check the jenkins pipeline check.</h1>
        <p className=" my-4">
          Present your app in a unique and engaging manner with sApp, designed to highlight its features and attract potential users effectively.
        </p>
        <div className='py-4 flex '>
        <a href='#' className="bg-gradient-to-br from-secondary to-primary text-white rounded-[6rem] text-[1.1rem] py-5 px-8 hover:shadow-2xl  font-semibold text-center  flex  gap-2">
          Get Started 
          <span><ArrowRight className='' /></span> 
        </a>
        </div>
       
      </div>
      <div className="col-12 col-md-5 col-lg-5 mt-4 mt-md-0">
        <img src={thumb} alt="App Showcase" className="w-[80vw] md:w-full h-auto" /> 
      </div>
    </div>
  );
};

export default HeroContainer;
