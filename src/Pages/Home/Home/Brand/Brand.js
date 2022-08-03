import React from 'react';
import img1 from '../../../../images/Brand/goldenGrid.png';
import img2 from '../../../../images/Brand/realstate.png';
import img3 from '../../../../images/Brand/hipster.png';
import img4 from '../../../../images/Brand/mara.png';
import img5 from '../../../../images/Brand/baliresort.png';

const Brand = () => {
    return (
        <div className='lg:mx-[90px]'>
            <div className='mb-[60px] section-title'>
                <div className='border border-[#dddddd] py-[10px] text-center '>
                    <h1 className='title text-[18px] '>Our Brands</h1>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center justify-around mb-[60px]'>
                <div className='py-[15px] mr-0'>
                    <img src={img1} alt="" />
                </div>
                <div className='py-[15px] '>
                    <img src={img2} alt="" />
                </div>
                <div className='py-[15px]'>
                    <img src={img3} alt="" />
                </div>
                <div className='py-[15px]'>
                    <img src={img4} alt="" />
                </div>
                <div className='py-[15px]'>
                    <img src={img5} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Brand;