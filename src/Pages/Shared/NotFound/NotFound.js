import img1 from '../../../images/NotFound/404.png';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='mb-[100px] flex flex-col items-center mt-[60px]'>
            <div className='mb-[26px]'>
                <img src={img1} alt="" />
            </div>
            <div className='text-center text-[#4c4c4c] mb-[30px]'>
                <h4 className='text-[35px] font-bold  uppercase mb-[7px]'>OPPS! PAGE NOT BE FOUND</h4>
                <p className='text-[24px] leading-[32px] font-light'>Sorry but the page you are looking for does not exist, have been removed, name<br />
                    <span>
                        changed or is temporarily unavailable.
                    </span>
                </p>
            </div>
            <div className="relative w-[35%] text-[#666666] mb-[60px]">
                <input type="text" placeholder="Search" className="input bg-[#f8f8f8] rounded-full input-bordered w-full h-[45px] pr-[50px] pl-[20px]" />
                <FontAwesomeIcon className='absolute top-[15px] right-[15px]' icon={faSearch}></FontAwesomeIcon>
            </div>
            <div className='text-center'>
               <Link to='/'><button className='banner-btn text-white font-normal px-[23px] py-[11px] rounded-[5px] uppercase'>Back to home page</button></Link>
            </div>
        </div>
    );
};

export default NotFound;