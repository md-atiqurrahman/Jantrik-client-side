import React from 'react';
import { faGreaterThan, faLessThan} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Tools.css';
import img1 from '../../../images/Tools/6.jpg';

const Tools = () => {
    return (
        <div className='ml-[90px] mr-[90px] mb-[30px] relative'>
            <div className='flex justify-between border border-[#dddddd] py-[10px] pl-[25px] pr-[10px] mb-[30px]'>
                <div>
                    <h1 className='title text-[18px] '>Tools</h1>
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
            <div className='flex justify-between'>
                <div className="single-product">
                    <img src={img1} alt="" />
                    <div className='product-details'>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] " />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#444444] h-[14px] w-[14px] ml-[7px]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#444444] h-[14px] w-[14px] ml-[7px]" />
                        </div>
                        <p className='title text-[16px] font-medium  mb-[5px]'>Product Name : Jigsaw</p>
                        <p className='title text-[16px]  font-medium'>Price: $32.00</p>
                        <button className='buy-btn'>Buy Now</button>
                    </div>
                    <div className='product-info title text-[17px]'>
                        <h4>Available: <span className='text-[16px] '> 12506 Pieces</span></h4>
                        <h4>Min. Order Quantity: <span className='text-[16px]'>279 Pieces</span></h4>
                        <p>Description: <span className='text-[16px]'> Jigsaw is best for as a WoodSharpener.This is one of the Latest model of the world .We are the first company to make it more latest.</span></p>
                    </div>
                </div>
                <div className="single-product relative">
                    <img src={img1} alt="" />
                    <div className='product-details'>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] " />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#444444] h-[14px] w-[14px] ml-[7px]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#444444] h-[14px] w-[14px] ml-[7px]" />
                        </div>
                        <p className='title text-[16px] font-medium  mb-[5px]'>Product Name : Jigsaw</p>
                        <p className='title text-[16px]  font-medium'>Price: $32.00</p>
                        <button className='buy-btn'>Buy Now</button>
                    </div>
                    <div className='product-info title text-[17px]'>
                        <h4>Available: <span className='text-[16px] '> 12506 Pieces</span></h4>
                        <h4>Min. Order Quantity: <span className='text-[16px]'>279 Pieces</span></h4>
                        <p>Description: <span className='text-[16px]'> Jigsaw is best for as a WoodSharpener.This is one of the Latest model of the world .We are the first company to make it more latest.</span></p>
                    </div>
                </div>
                <div className="single-product relative">
                    <img src={img1} alt="" />
                    <div className='product-details'>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] " />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#444444] h-[14px] w-[14px] ml-[7px]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#444444] h-[14px] w-[14px] ml-[7px]" />
                        </div>
                        <p className='title text-[16px] font-medium  mb-[5px]'>Product Name : Jigsaw</p>
                        <p className='title text-[16px]  font-medium'>Price: $32.00</p>
                        <button className='buy-btn'>Buy Now</button>
                    </div>
                    <div className='product-info title text-[17px]'>
                        <h4>Available: <span className='text-[16px] '> 12506 Pieces</span></h4>
                        <h4>Min. Order Quantity: <span className='text-[16px]'>279 Pieces</span></h4>
                        <p>Description: <span className='text-[16px]'> Jigsaw is best for as a WoodSharpener.This is one of the Latest model of the world .We are the first company to make it more latest.</span></p>
                    </div>
                </div>
                <div className="single-product relative">
                    <img src={img1} alt="" />
                    <div className='product-details'>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] " />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#444444] h-[14px] w-[14px] ml-[7px]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#444444] h-[14px] w-[14px] ml-[7px]" />
                        </div>
                        <p className='title text-[16px] font-medium  mb-[5px]'>Product Name : Jigsaw</p>
                        <p className='title text-[16px]  font-medium'>Price: $32.00</p>
                        <button className='buy-btn'>Buy Now</button>
                    </div>
                    <div className='product-info title text-[17px]'>
                        <h4>Available: <span className='text-[16px] '> 12506 Pieces</span></h4>
                        <h4>Min. Order Quantity: <span className='text-[16px]'>279 Pieces</span></h4>
                        <p>Description: <span className='text-[16px]'> Jigsaw is best for as a WoodSharpener.This is one of the Latest model of the world .We are the first company to make it more latest.</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tools;