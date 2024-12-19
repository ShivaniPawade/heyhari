import React from 'react'
import HeroContainer from './HeroContainer'
import PremiumFeatures from './PremiumFeatures'
import PowerfulTools from './PowerfulTools'
import SharePhotos from './SharePhotos'
import SappWorks from './SappWorks'
import HowItWorks from './HowItWorks'
import Footer from './Footer'
import logo from '../assets/images/heyhari.png';
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <>
            <div className='container  mt-10'>
                <Link to='/'> <div className=' '><img src={logo} alt="Logo" className="mb-4 max-md:ms-10 md:mx-0  p-2  w-20" /></div> </Link>
                <HeroContainer />
                <PremiumFeatures />
            </div>
            <PowerfulTools />
            <SharePhotos />
            <SappWorks />
            <HowItWorks />
            <Footer />
        </>

    )
}

export default LandingPage