import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';

const Payment = () => {
    const {orderId} = useParams();

    const url = `http://localhost:5000/order/${orderId}`;

    const { data: order, isLoading } = useQuery(['order', orderId], () => fetch(url, {
        method: 'GET'
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl my-6">
                <div className="card-body">
                    <p className='text-primary font-bold'>Hello, {order?.userName}</p>
                    <h2 className="card-title">Please Pay for {order?.toolName}</h2>
                    <p>You  Ordered: <span className='text-green-500'>{order?.quantity}</span></p>
                    <p>Please pay ${order?.price * order?.quantity?.split(' ')[0]}</p>
                </div>
            </div>
        </div>
    );
};

export default Payment;