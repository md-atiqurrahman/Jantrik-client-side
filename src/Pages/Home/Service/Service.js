import React from 'react';
import img1 from '../../../images/Service/delivery.png';
import img2 from '../../../images/Service/support.png';
import img3 from '../../../images/Service/return.png';
import img4 from '../../../images/Service/discount.png';

const Service = () => {
    return (
        <div className='mb-[60px]'>
            <div className='section-title lg:mx-[90px] lg:mb-[60px]'>
                <div className='border border-[#dddddd] py-[10px] text-center '>
                    <h1 className='title text-[18px] '>Service We Provide</h1>
                </div>
            </div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-4 gap-y-[30px] lg:gap-x-[20px] lg:mb-[60px] lg:mx-[90px] justify-center'>
                <div className='flex lg:justify-center items-center '>
                    <div>
                        <img src={img1} alt="" />
                    </div>
                    <div className='ml-[20px]'>
                        <h1 className="title font-medium text-[14px] my-[5px]">FREE DELIVERY</h1>
                        <p className='title font-normal text-[13px]'>Free shipping on all order</p>
                    </div>
                </div>
                <div className='flex lg:justify-center items-center '>
                    <div>
                        <img src={img2} alt="" />
                    </div>
                    <div className='ml-[20px]'>
                        <h1 className="title font-medium text-[14px] my-[5px]">ONLINE SUPPORT 24/7</h1>
                        <p className='title font-normal text-[13px]'>Support online 24 hours</p>
                    </div>
                </div>
                <div className='flex lg:justify-center items-center '>
                    <div>
                        <img src={img3} alt="" />
                    </div>
                    <div className='ml-[20px]'>
                        <h1 className="title font-medium text-[14px] my-[5px]">MONEY RETURN</h1>
                        <p className='title font-normal text-[13px]'>Back guarantee under 7 days</p>
                    </div>
                </div>
                <div className='flex lg:justify-center items-center '>
                    <div>
                        <img src={img4} alt="" />
                    </div>
                    <div className='ml-[20px]'>
                        <h1 className="title font-medium text-[14px] my-[5px]">MEMBER DISCOUNT</h1>
                        <p className='title font-normal text-[13px]'>Onevery order over $3579.00</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Service;