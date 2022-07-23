import React from 'react';
import img1 from '../../../images/NewArrival/WoodSharpener.jpg';
import img2 from '../../../images/NewArrival/WoodCutter.jpg';
import img3 from '../../../images/NewArrival/PowerSaw.jpg';
import './NewArrivals.css';

const NewArrivals = () => {
    return (
        <div className='flex justify-center mb-[60px]'>
            <div className='mr-[30px] img-container'>
                <img src={img1} alt="" />
                <div className='overlay'>
                </div>
            </div>
            <div className='mr-[30px] img-container'>
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