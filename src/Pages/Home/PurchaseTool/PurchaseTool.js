import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import Footer from '../../Shared/Footer/Footer';
import OrderModal from '../Home/OrderModal/OrderModal';

const PurchaseTool = () => {
    const [user] = useAuthState(auth)
    const [tool, setTool] = useState({});
    const [admin] = useAdmin(user);
    const { name, image, price, minimum, available, description } = tool;
    const [order, setOrder] = useState(null);
    const [active, setActive] = useState(false);
    const { id } = useParams();

    useEffect(() => {
          const url = `https://jantrik-server-side.up.railway.app/tools/${id}`;
          fetch(url,{
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
          })
          .then(res => res.json())
          .then(data => {
             setTool(data)
          })
    }, [id])

    const handleQuantity = () => {
        const quantity = document.getElementById('order-input').value;
        const newTool = {...tool,quantity}
        setTool(newTool);

        if (quantity < minimum || quantity > available) {
            setActive(true);
        }
        if (quantity >= minimum && quantity <= available) {
            setActive(false)
        }
    }


    return (
        <section>
            <div className='flex flex-col lg:flex-row justify-center mx-auto mt-[60px] lg:mt-[100px] mb-[30px] lg:mb-[60px]'>
                <div className='w-full lg:w-[25%] mr-[30px] border'>
                    <img className='w-full' src={image} alt="" />
                </div>
                <div className='w-[90%] mx-auto lg:mx-0 lg:w-[25%] text-center lg:text-start mt-[15px] lg:mt-0'>
                    <p className='title text-[18px] font-medium  mb-[5px]'>{name}</p>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] " />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#f9ba48] h-[14px] w-[14px] ml-[7px]" />
                    </div>
                    <p className='text-[14px]  font-medium my-[5px]'>Price: ${price}</p>
                    <p className='text-[15px] leading-[26px] uppercase  font-medium'>In Stock <span className='ml-[10px]'>{available}</span></p>
                    <div className='flex  items-center justify-center lg:justify-start mt-[10px] mb-[15px]'>
                        <div>
                            <input className='border p-[7px] w-[75px] h-[31px] mr-[15px] focus:outline-none' type="number" name="" id="order-input" defaultValue={minimum} onChange={handleQuantity} />
                        </div>
                        <div>
                            <label
                                onClick={() => setOrder(tool)} disabled={active} htmlFor="order-modal" className="buy-btn">Order
                            </label>
                        </div>
                    </div>
                    <div className='text-justify' >
                        {
                            tool?.description?.length <= 136
                                ?
                                <p> <span className='text-[16px]'>Description:</span> <span className='text-[15px]'>{description}</span></p>
                                :
                                <p><span className='text-[16px]'>Description:</span><span className='text-[15px]'>{description?.slice(0, 136) + '...'}</span></p>
                        }
                    </div>
                </div>
            </div>
            {
                order && <OrderModal order={order} setOrder={setOrder} admin={admin}></OrderModal>
            }
            <Footer></Footer>
        </section>
    );
};

export default PurchaseTool;