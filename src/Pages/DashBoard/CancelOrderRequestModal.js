import React from 'react';

const CancelOrderRequestModal = ({confirm,handleCancel}) => {
    return (
        <div>
            <input type="checkbox" id="cancel-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-400">Are you sure to cancel this order request?</h3>
                    <div className="modal-action">
                        <label htmlFor="cancel-modal" onClick={() => handleCancel(confirm?._id)} className="btn btn-xs">Yes</label>
                        <label htmlFor="cancel-modal" className="btn btn-xs">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancelOrderRequestModal;