import React from 'react';
import 'animate.css';

const PrimaryButton = ({children}) => {
    return (
        <div>
            <button className='bg-primary animate__animated animate__bounceInUp text-white font-normal px-[18px] py-[7px] mt-[31px] rounded'>{children}</button>
        </div>
    );
};

export default PrimaryButton;