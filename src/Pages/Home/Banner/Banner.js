import React from 'react';
import './Banner.css';
import 'animate.css';

const Banner = () => {
    return (
           <div className='overflow-hidden mt-0 lg:mb-[60px]'>
            <div className="hero  justify-start  lg:min-h-[394px]  bg-[url('/src/images/Banner/HandSaw.jpg')] lg:mt-3 items-start lg:items-center">
                <div className="hero-content justify-start flex-col lg:flex-row-reverse">
                    <div className='sm:ml-0 lg:ml-[74px] sm:mr-0 lg:mr-6'>
                        <h1 className='banner-title sm:text-[20px] lg:text-[36px] animate__animated animate__bounceInLeft'>Big Wholesale</h1>
                        <div className='banner-sub-title sm:text-[32px] lg:text-[48px] sm:leading-[0px] lg:leading-[60px] animate__animated animate__backInRight'>
                            <h2>Hands Tools</h2>
                            <h2>Circular Saw &    Power Saw</h2>
                        </div>
                        <button className='banner-btn animate__animated animate__bounceInUp'>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner;