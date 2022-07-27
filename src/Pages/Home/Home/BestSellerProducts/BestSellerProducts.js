import React from 'react';
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img1 from '../../../../images/BestSellerProducts/1.jpg';
import img2 from '../../../../images/BestSellerProducts/2.jpg';
import img3 from '../../../../images/BestSellerProducts/3.jpg';
import img4 from '../../../../images/BestSellerProducts/4.jpg';
import img5 from '../../../../images/BestSellerProducts/5.jpg';
import img6 from '../../../../images/BestSellerProducts/6.jpg';
import img7 from '../../../../images/BestSellerProducts/7.jpg';
import img8 from '../../../../images/BestSellerProducts/8.jpg';

const BestSellerProducts = () => {
    return (
        <div className='mx-[90px] mb-[50px]'>
            <div className='flex justify-between border border-[#dddddd] py-[10px] pl-[25px] pr-[10px] mb-[4px]'>
                <div>
                    <h1 className='title text-[18px] '>Best Seller Products</h1>
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
            <div className='border-b'>
                <div className='flex justify-between'>
                    <div className='flex py-[25px] px-[15px]'>
                        <div className='mr-[8px]'>
                            <img className='w-[95px]' src={img1} alt="" />
                        </div>
                        <div>
                            <div>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] " />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                                </div>
                                <p className='title text-[14px] font-medium  mb-[5px]'>Marble Slotting Saw</p>
                                <p className='title text-[14px]  font-medium'>Price: $100.55</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='text-center border-r border-[#dddddd] h-[75px]'>
                        </div>
                    </div>
                    <div className='flex py-[25px] px-[15px]'>
                        <div className='mr-[8px]'>
                            <img className='w-[95px]' src={img2} alt="" />
                        </div>
                        <div>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] " />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#444444] h-[14px] w-[14px] ml-[7px]" />
                            </div>
                            <p className='title text-[14px] font-medium  mb-[5px]'>Powermatic Shaper</p>
                            <p className='title text-[14px]  font-medium'>Price: $99.97</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='text-center border-r border-[#dddddd] h-[75px]'>
                        </div>
                    </div>
                    <div className='flex py-[25px] px-[15px]'>
                        <div className='mr-[8px]'>
                            <img className='w-[95px]' src={img3} alt="" />
                        </div>
                        <div>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] " />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                            </div>
                            <p className='title text-[14px] font-medium  mb-[5px]'> Wood Floor Belt Sander</p>
                            <p className='title text-[14px]  font-medium'>Price: $78.55</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='text-center border-r border-[#dddddd] h-[75px]'>
                        </div>
                    </div>
                    <div className='flex py-[25px] px-[15px]'>
                        <div className='mr-[8px]'>
                            <img className='w-[95px]' src={img4} alt="" />
                        </div>
                        <div>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] " />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#444444] h-[14px] w-[14px] ml-[7px]" />
                            </div>
                            <p className='title text-[14px] font-medium  mb-[5px]'>Reciprocal saw</p>
                            <p className='title text-[14px]  font-medium'>Price: $179.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[5px]'>
                <div className='flex justify-between'>
                    <div className='flex py-[25px] px-[15px]'>
                        <div className='mr-[8px]'>
                            <img className='w-[95px]' src={img5} alt="" />
                        </div>
                        <div>
                            <div>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] " />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#444444] h-[14px] w-[14px] ml-[7px]" />
                                </div>
                                <p className='title text-[14px] font-medium  mb-[5px]'>Handheld Power Drill</p>
                                <p className='title text-[14px]  font-medium'>Price: $155.00</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='text-center border-r border-[#dddddd] h-[75px]'>
                        </div>
                    </div>
                    <div className='flex py-[25px] px-[15px]'>
                        <div className='mr-[8px]'>
                            <img className='w-[95px]' src={img6} alt="" />
                        </div>
                        <div>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] " />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                            </div>
                            <p className='title text-[14px] font-medium  mb-[5px]'>Jigsaw</p>
                            <p className='title text-[14px]  font-medium'>Price: $139.00</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='text-center border-r border-[#dddddd] h-[75px]'>
                        </div>
                    </div>
                    <div className='flex py-[25px] px-[15px]'>
                        <div className='mr-[8px]'>
                            <img className='w-[95px]' src={img7} alt="" />
                        </div>
                        <div>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] " />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#444444] h-[14px] w-[14px] ml-[7px]" />
                            </div>
                            <p className='title text-[14px] font-medium  mb-[5px]'>Gerber Diesel Multi Piler </p>
                            <p className='title text-[14px]  font-medium'>Price: $93.00</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='text-center border-r border-[#dddddd] h-[75px]'>
                        </div>
                    </div>
                    <div className='flex py-[25px] px-[15px]'>
                        <div className='mr-[8px]'>
                            <img className='w-[95px]' src={img8} alt="" />
                        </div>
                        <div>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] " />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                            </div>
                            <p className='title text-[14px] font-medium  mb-[5px]'>Circular Saw</p>
                            <p className='title text-[14px]  font-medium'>Price: $129.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSellerProducts;