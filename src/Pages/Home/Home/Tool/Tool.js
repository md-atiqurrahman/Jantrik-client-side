import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, name, image, price, minimum, available, description } = tool;

    return (
        <div className="single-product">
            <img src={image} alt="" />
            <div className='product-details'>
                <div className="rating star-rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] " />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#444444] h-[14px] w-[14px] ml-[7px]" />
                </div>
                <p className=' text-[16px] font-medium  mb-[5px]'>{name}</p>
                <p className=' text-[16px]  font-medium'>Price: ${price}</p>
            </div>
            <div className='product-info text-[17px]'>
                <h4>Available: <span className='text-[16px] '> {available} Pieces</span></h4>
                <h4>Min. Order Quantity: <span className='text-[16px]'> {minimum} Pieces</span></h4>
                <div className='mb-[10px]'>
                    {
                        description.length <= 136
                            ?
                            <p>Description: <span className='text-[16px]'>{description}</span></p>
                            :
                            <p>Description: <span className='text-[16px]'>{description.slice(0, 136) + '...'}</span></p>
                    }

                </div>
                <Link to={`/purchase/${_id}`}><button className='buy-btn'>Buy Now</button></Link>
            </div>
        </div>
    );
};

export default Tool;