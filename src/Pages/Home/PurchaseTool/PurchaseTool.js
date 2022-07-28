import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import img1 from '../../../images/Tools/1.jpg'
import OrderModal from '../Home/OrderModal/OrderModal';

const PurchaseTool = () => {
    const description = 'Ronix Model 4150V 110V 550W Electric Jig Saw Sharpening Machine for Wood and Metal.This is one of the Latest model of the world.Ronix Model 4150V 110V 550W Electric Jig Saw Sharpening Machine for Wood and Metal.This is one of the Latest model of the world.';

    const [active, setActive] = useState(false);
    const [tool, setTool] = useState(null);
    const { id } = useParams();

    const handleQuantity = () => {
        const orderQuantity = document.getElementById('order-input').value;
        if (orderQuantity < 300 || orderQuantity > 5600) {
            setActive(true);
        }
        if (orderQuantity >= 300 && orderQuantity <= 5600) {
            setActive(false)
        }
    }


    return (
        <section>
            <div className='flex  justify-center mx-auto mt-[100px] mb-[60px]'>
                <div className=' w-[25%] mr-[30px] border'>
                    <img className='w-full' src={img1} alt="" />
                </div>
                <div className='w-[25%]'>
                    <p className='title text-[18px] font-medium  mb-[5px]'>Circular Saw</p>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] " />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                    </div>
                    <p className='text-[14px]  font-medium my-[5px]'>Price: $129.00</p>
                    <p className='text-[15px] leading-[26px] uppercase  font-medium'>In Stock <span className='ml-[10px]'>5600</span></p>
                    <div className='flex  items-center mt-[10px] mb-[15px]'>
                        <div>
                            <input className='border p-[7px] w-[75px] h-[31px] mr-[15px] focus:outline-none' type="number" name="" id="order-input" defaultValue={300} onChange={handleQuantity} />
                        </div>
                        <div>
                            <label
                                onClick={() => setTool(description)} disabled={active} htmlFor="order-modal" className="buy-btn">Order
                            </label>
                        </div>
                    </div>
                    <div className='text-justify' >
                        {
                            description.length <= 136
                                ?
                                <p> <span className='text-[16px]'>Description:</span> <span className='text-[15px]'>{description}</span></p>
                                :
                                <p><span className='text-[16px]'>Description:</span><span className='text-[15px]'>{description.slice(0, 136) + '...'}</span></p>
                        }
                    </div>
                </div>
            </div>
            {
                tool && <OrderModal></OrderModal>
            }
        </section>
    );
};

export default PurchaseTool;