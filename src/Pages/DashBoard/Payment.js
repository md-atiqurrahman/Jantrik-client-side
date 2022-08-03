import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51LR6WTB23g70PyZDVpQZjJ84WKn19QaM1NqrdzmIkXxREdIc0oF2oTnPDNhOXFaygBAPgdjegQ32atocDLwqQp0U00PZKrrNwC');

const Payment = () => {
    const {orderId} = useParams();

    const url = `https://vast-cove-21670.herokuapp.com/order/${orderId}`;

    const { data: order, isLoading } = useQuery(['order', orderId], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="card w-[90%] mx-auto lg:w-96 bg-base-100 shadow-xl my-6">
                <div className="card-body">
                    <p className='text-primary font-bold'>Hello, {order?.userName}</p>
                    <h2 className="card-title">Please Pay for {order?.toolName}</h2>
                    <p>You  Ordered: <span className='text-green-500'>{order?.quantity}</span></p>
                    <p>Please pay ${order?.totalPrice}</p>
                </div>
            </div>
            <div className="card w-[90%] mx-auto lg:w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                 <Elements stripe={stripePromise}>
                   <CheckoutForm order={order}/>
                 </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;