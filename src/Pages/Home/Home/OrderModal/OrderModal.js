import React from 'react';

const OrderModal = () => {
    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <div>
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-accent text-center">{}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-y-2 justify-items-center mt-5'>
                        <input type="text" name='date' readOnly value={``} className="input input-bordered w-full max-w-xs text-xl text-accent" />
                        <select name='slot' className="select select-bordered w-full max-w-xs text-accent text-xl">
                           
                        </select>
                        <input type="text" name='name' readOnly className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' readOnly  className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='Submit' className=" btn btn-accent input input-bordered w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;