import React, { useState } from 'react';
import './Banner.css';
import 'animate.css';

const Banner = () => {
    const [start, setStart] = useState();
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <div className="hero justify-start lg:min-h-[394px]  bg-[url('/src/images/Banner/HandSaw.png')] lg:mt-3 items-start lg:items-center">
                        <div className="hero-content justify-start flex-col lg:flex-row-reverse">
                            <div className='lg:ml-10 lg:mr-6'>
                                <h1 className={`banner-title ${start ? 'animate__animated animate__bounceInLeft' : ''}`}>Big Sale</h1>
                                <div className={`banner-sub-title ${start ? 'animate__animated animate__backInRight' : ''}`}>
                                    <h2>Hands Tools</h2>
                                    <h2>Circular Saw &    Power Saw</h2>
                                </div>
                                <button className={`bg-primary  text-white font-normal px-[18px] py-[7px] mt-[31px] rounded ${start ? 'animate__animated animate__bounceInUp' : ''}`}>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <div className="hero justify-start lg:min-h-[394px]  bg-[url('/src/images/Banner/DrillMachine.png')]   lg:mt-3 items-start lg:items-center">
                        <div className="hero-content justify-start flex-col lg:flex-row-reverse">
                            <div className='lg:ml-10 lg:mr-6'>
                                <h1 className={`banner-title ${!start ? 'animate__animated animate__bounceInLeft' : ''}`}>Big Sale</h1>
                                <div className={`banner-sub-title ${!start ? ' animate__animated animate__backInRight' : ''}`}>
                                    <h2>Hands Tools</h2>
                                    <h2>Circular Saw & Power Saw</h2>
                                </div>
                                <button className={`bg-primary  text-white font-normal px-[18px] py-[7px] mt-[31px] rounded ${!start ? 'animate__animated animate__bounceInUp' : ''}`}>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className="flex justify-center w-full py-2 gap-2 mt-[-30px]">
                <a onClick={() => setStart(true)} href="#item1" className='slider-btn'>1</a>
                <a onClick={() => setStart(false)} href="#item2" className='slider-btn'>2</a>
            </div>
        </div>
    );
};
export default Banner;