import React from 'react';
import img1 from '../../../images/NewArrival/WoodSharpener.jpg';
import img2 from '../../../images/NewArrival/WoodCutter.jpg';
import img3 from '../../../images/NewArrival/PowerSaw.jpg';
import './NewArrivals.css';

const NewArrivals = () => {
    return (
        <div className='grid sm:grid-col-1 lg:grid-cols-3 lg:gap-x-[20px] lg:mb-[60px] lg:mx-[90px] new-arrivals'>
            <div className='img-container'>
                <img src={img1} alt="" />
                <div className='overlay'>
                </div>
            </div>
            <div className='img-container'>
                <img src={img2} alt="" />
                <div className='overlay'>
                </div>
            </div>
            <div className='img-container'>
                <img src={img3} alt="" />
                <div className='overlay'>
                </div>
            </div>
        </div>
    );
};

export default NewArrivals;