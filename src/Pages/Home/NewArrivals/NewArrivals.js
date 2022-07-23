import React from 'react';
import img1 from '../../../images/NewArrival/WoodSharpener.jpg';
import img2 from '../../../images/NewArrival/WoodCutter.jpg';
import img3 from '../../../images/NewArrival/PowerSaw.jpg';

const NewArrivals = () => {
    return (
        <div className='flex justify-center mb-[60px]'>
            <div className='mr-[30px]'>
                <img src={img1} alt="" />
            </div>
            <div className='mr-[30px]'>
                <img src={img2} alt="" />
            </div>
            <div>
                <img src={img3} alt="" />
            </div>
        </div>
    );
};

export default NewArrivals;