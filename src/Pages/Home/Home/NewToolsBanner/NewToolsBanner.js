import React from 'react';
import img1 from '../../../../images/NewTools/1.jpg';
import img2 from '../../../../images/NewTools/2.jpg';

const NewToolsBanner = () => {
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-2  lg:gap-x-[20px] lg:mb-[60px] lg:mx-[90px] new-arrivals'>
            <div className='img-container'>
                <img src={img1} alt="" />
                <div className="overlay">
                </div>
            </div>
            <div className='img-container'>
                <img src={img2} alt="" />
                <div className="overlay">
                </div>
            </div>
        </div>
    );
};

export default NewToolsBanner;