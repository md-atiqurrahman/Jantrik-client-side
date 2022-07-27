import React from 'react';
import { useParams } from 'react-router-dom';
import img8 from '../../../images/BestSellerProducts/8.jpg';

const PurchaseTool = () => {
   const {id} = useParams();
    return (
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
    );
};

export default PurchaseTool;