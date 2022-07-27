import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone, faWifi } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGooglePlusG, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import payment from '../../../images/Footer/payment.png';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const ThisYear = today.getFullYear();

    return (
        <footer className='bg-[#f9f9fb] pt-[50px]'>
            <div className='text-center w-full'>
                <div className="form-control  text-center w-[35%] mx-auto mb-[20px]">
                    <h1 className='text-[30px] font-normal mb-[3px]'>Sign Up For Newsletters</h1>
                    <p className='text-[16px] leading-[26px] mb-[25px]'>Get e-mail updates about our latest Deal and special offers.</p>
                    <div className="relative">
                        <input type="text" placeholder="Enter your email address" className="input rounded-full input-bordered w-full pr-16" />
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none rounded-r-full text-[12px] hover:bg-[#363f4d] hover:text-white">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-between py-10 px-[90px] bg-[#f9f9fb] text-base-content">
                <div className='contact'>
                    <h1 className="f-title">Contact Us</h1>
                    <p>
                        <span>
                            <FontAwesomeIcon className='text-[18px] mr-[10px]' icon={faLocationDot}></FontAwesomeIcon>
                        </span>
                        Your address goes here.
                    </p>
                    <p>
                        <span>
                            <FontAwesomeIcon className='text-[18px] mr-[10px]' icon={faEnvelope}></FontAwesomeIcon>
                        </span>
                        Mail Us: jantrik@gmail.com
                    </p>
                    <p>
                        <span>
                            <FontAwesomeIcon className='text-[18px] mr-[10px]' icon={faPhone}></FontAwesomeIcon>
                        </span>
                        Phone: 01234567891
                    </p>
                    <img src={payment} className='mt-[24px]' alt="" />
                </div>
                <div className='footer-details'>
                    <h1 className="f-title">Information</h1>
                    <p>Site Map</p>
                    <p>Specials</p>
                    <p>Jobs</p>
                    <p>Delivery Information</p>
                    <p>Order History</p>
                    <p>Privacy Policy</p>
                </div>
                <div className='footer-details'>
                    <h1 className="f-title">My Account</h1>
                    <p>My Account</p>
                    <p>Checkout</p>
                    <p>Login</p>
                    <p>Address</p>
                    <p>Order Status</p>
                    <p>Site Map</p>
                </div>
                <div className='footer-details'>
                    <h1 className="f-title">Customer Service</h1>
                    <p>My Account</p>
                    <p>New</p>
                    <p>Gift Cards</p>
                    <p>Return Policy</p>
                    <p>Your Orders</p>
                    <p>Subway</p>
                </div>
                <div className='footer-details'>
                    <h1 className="f-title">Let Us Help You</h1>
                    <p>Your Account</p>
                    <p>Your Orders</p>
                    <p>Shipping</p>
                    <p>Amazon Prime</p>
                    <p>Replacements</p>
                    <p>Manage</p>
                </div>
            </div>
            <div className="footer items-center py-4 px-[90px] bg-[#eeeeee] text-neutral-content">
                <div className="items-center grid-flow-col">
                    <p className='text-[#333]'>Copyright © {ThisYear}  Jantrik - All right reserved</p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <p className='text-[#333] hover:text-primary cursor-pointer text-[14px]'><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></p>
                    <p className='text-[#333] hover:text-primary cursor-pointer text-[14px]'><FontAwesomeIcon icon={faWifi}></FontAwesomeIcon></p>
                    <p className='text-[#333] hover:text-primary cursor-pointer text-[15px]'><FontAwesomeIcon icon={faGooglePlusG}></FontAwesomeIcon></p>
                    <p className='text-[#333] hover:text-primary cursor-pointer text-[13px]'><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></p>
                    <p className='text-[#333] hover:text-primary cursor-pointer text-[14px]'><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;