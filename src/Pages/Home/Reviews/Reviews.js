import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img1 from '../../../images/Reviews/alexander.png';
import img2 from '../../../images/Reviews/jake-nackos.png';
import img3 from '../../../images/Reviews/julian-wan.png';
import React from 'react';

const Reviews = () => {
    return (
        <div className='mx-[90px] mb-[60px]'>
            <div className='flex justify-between border border-[#dddddd] py-[10px] pl-[25px] pr-[10px] mb-[30px]'>
                <div>
                    <h1 className='title text-[18px] '>What Our Clients Says...</h1>
                </div>
                <div className='flex'>
                    <div className='mr-[8px] border rounded-[3px] h-[30px] w-[30px] text-center hover:bg-[#f1ac06] text-[#b6b4b4] hover:text-white'>
                        <FontAwesomeIcon className='text-[12px]' icon={faLessThan} />
                    </div>
                    <div className='border rounded-[3px] h-[30px] w-[30px] text-center hover:bg-[#f1ac06] text-[#b6b4b4] hover:text-white'>
                        <FontAwesomeIcon className='text-[12px] ' icon={faGreaterThan} />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-x-6'>
                <div className="card max-w-sm bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p className='text-[#555555]'>This is very good carpenter manufacturer company .Their product is quite good and long lasting and easy to use.</p>
                        <div className="card-actions justify-start items-center mt-[20px]">
                            <div className="avatar mr-[20px]">
                                <div className="w-[64px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={img1} alt='' />
                                </div>
                            </div>
                            <div>
                                <h4>Alexander</h4>
                                <h5>California</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card max-w-sm bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p className='text-[#555555]'>This is very good carpenter manufacturer company .Their product is quite good and long lasting and easy to use.</p>
                        <div className="card-actions justify-start items-center mt-[20px]">
                            <div className="avatar mr-[20px]">
                                <div className="w-[64px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={img2} alt='' />
                                </div>
                            </div>
                            <div>
                                <h4>Jake Nackos</h4>
                                <h5>Washington</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card max-w-sm bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p className='text-[#555555]'>This is very good carpenter manufacturer company .Their product is quite good and long lasting and easy to use.</p>
                        <div className="card-actions justify-start items-center mt-[20px]">
                            <div className="avatar mr-[20px]">
                                <div className="w-[64px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={img3} alt='' />
                                </div>
                            </div>
                            <div>
                                <h4>Julian Wan</h4>
                                <h5>Philippines</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;