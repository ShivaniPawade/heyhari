import React from 'react';
import logo from '../assets/images/heyhari.png';
import google from '../assets/images/google-play-black.png';
import app from '../assets/images/app-store-black.png';
import { Facebook, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=" pt-8  container mx-auto">
            <div className="max-md:mx-10 mx-auto flex max-md:flex-col  justify-between gap-8 mb-10">
                {/* Logo Section */}
                <div className="w-full sm:w-[45%] md:w-[25%] text-start md:text-left">
                    <a> <img src={logo} alt="Logo" className="mb-4  md:mx-0" /></a>
                    <p className="text-gray-500 ">
                        The Next-Level Solutions for Landing Pages. Perfect Touch Enhances your Business.
                    </p>
                    <div className='flex gap-2'>
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='border rounded-md bg-custom-gradient p-1.5'
                        >
                            <Facebook className='text-white' />
                        </a>
                        <a
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='border rounded-md bg-custom-gradient p-1.5'
                        >
                            <Twitter className='text-white' />
                        </a>
                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='border rounded-md bg-custom-gradient p-1.5'
                        >
                            <Linkedin className='text-white' />
                        </a>
                        <a
                            href="https://www.github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='border rounded-md bg-custom-gradient p-1.5'
                        >
                            <Github className='text-white' />
                        </a>
                    </div>

                </div>

                {/* Useful Links Section */}
                <div className="w-full sm:w-[45%] md:w-[20%]">
                    <h4 className="">Useful Links</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-600 hover:text-primary">Home</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary">About Us</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary">Services</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary">Blog</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary">Contact</a></li>
                    </ul>
                </div>

                {/* Product Help Section */}
                <div className="w-full sm:w-[45%] md:w-[20%]">
                    <h4 className="">Product Help</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-600 hover:text-primary">FAQ</a></li>
                        <li><Link to='/privacypolicy' className="text-gray-600 text-primary hover:text-primary">Privacy Policy</Link></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary">Support</a></li>
                        <li><Link to='/termsconditions' className="text-gray-600 text-primary hover:text-primary">Terms & Conditions</Link></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary">Contact</a></li>
                    </ul>
                </div>

                {/* Download Section */}
                <div className="w-full sm:w-[45%] md:w-[20%] text-left">
                    <h4 className="">Download</h4>
                    <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                        <img src={google} alt="Google Play" className="mb-4 md:mx-0 w-32" />
                    </a>
                    <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                        <img src={app} alt="App Store" className="w-32 md:mx-0" />
                    </a>

                </div>
            </div>
            <div className='flex justify-between border-t-[1px] text-gray-400 max-md:mx-10'>
                <p>© 2020-2024 sApp | All rights reserved.</p>
                <p>Made with Themeland</p>
            </div>
        </div>
    );
};

export default Footer;
