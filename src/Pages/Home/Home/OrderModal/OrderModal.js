import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const OrderModal = () => {
    const [user] = useAuthState(auth);

    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <div>
        <input type="checkbox" id="order-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="font-bold text-lg text-accent text-center">{'Circular Saw'}</h3>
                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-y-2 justify-items-center mt-5'>
                    <input type="text" name='quantity' readOnly value={`Quantity:  450 pieces`} className="input input-bordered w-full max-w-xs text-accent" />
                    <input type="text" name='price' readOnly value={`Unit price:  $129.00`} className="input input-bordered w-full max-w-xs text-accent" />
                    
                    <input type="text" name='name' readOnly value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="email" name='email' readOnly value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='address' placeholder="Your Address" className="input input-bordered w-full max-w-xs" />
                    <input type="submit" value='Order' className=" btn btn-accent input input-bordered w-full max-w-xs" />
                </form>
            </div>
        </div>
    </div>
    );
};

export default OrderModal;