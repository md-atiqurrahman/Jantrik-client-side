import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const OrderModal = ({ order, setOrder, admin }) => {
    const { _id, name, price, minimum, quantity } = order;
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const totalPrice = price * event.target.quantity.value?.split(' ')[0];

        const bookingOrder = {
            toolId: _id,
            toolName: name,
            price,
            totalPrice,
            quantity: event.target.quantity.value,
            userEmail: user?.email,
            userName: user?.displayName,
            phone: event.target.phone.value,
            address: event.target.address.value
        }

        fetch('https://jantrik-client-side.vercel.app/bookingOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(bookingOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success(`Your order of ${name} ${quantity ? quantity : minimum} pieces confirmed successfully`)
                    setOrder(null);
                    navigate('/dashboard')
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-accent text-center">{name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-y-2 justify-items-center mt-5'>
                        <input type="text" name='quantity' readOnly value={`${quantity ? quantity : minimum} pieces`} className="input input-bordered w-full max-w-xs text-accent" />
                        <input type="text" name='price' readOnly value={`Unit price: $${price}`} className="input input-bordered w-full max-w-xs text-accent" />

                        <input type="text" name='name' readOnly value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' readOnly value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='address' placeholder="Your Address" className="input input-bordered w-full max-w-xs" />
                        {
                            !admin && <input type="submit" value='Order' className=" btn btn-accent input input-bordered w-full max-w-xs" />
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;