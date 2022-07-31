import img1 from '../../../images/NotFound/404.jpg';
import React from 'react';

const NotFound = () => {
    return (
        <div className='mb-[100px] flex flex-col items-center'>
            <div>
                <img src={img1} alt="" />
            </div>
            <div className='text-center text-[#777777]'>
                <h4 className='text-[24px] font-normal'>Page not found</h4>
                <p>The Page you are looking for doesn't exist or an another error occurred.<br />
                    <span>
                        Go back, or head over to Jantrik.com to choose a new direction.
                    </span>
                </p>
            </div>
        </div>
    );
};

export default NotFound;