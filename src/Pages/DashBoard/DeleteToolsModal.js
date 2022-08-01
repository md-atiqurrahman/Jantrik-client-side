import React from 'react';

const DeleteToolsModal = ({confirm,handleDeleteTools}) => {
    return (
        <div>
            <input type="checkbox" id="cancel-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-400">Are you sure to delete this tool?</h3>
                    <div className="modal-action">
                        <label htmlFor="cancel-modal" onClick={() => handleDeleteTools(confirm?._id)} className="btn btn-xs">Yes</label>
                        <label htmlFor="cancel-modal" className="btn btn-xs">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteToolsModal;