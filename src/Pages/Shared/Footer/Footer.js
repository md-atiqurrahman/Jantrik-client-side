import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#f9f9fb]'>
            <div className='text-center w-full'>
                <div class="form-control  text-center w-[30%] mx-auto">
                    <label class="">
                        <span class="text-center"></span>
                    </label>
                    <div class="relative">
                        <input type="text" placeholder="Enter your email address" class="input rounded-full input-bordered w-full pr-16" />
                        <button class="btn btn-primary absolute top-0 right-0 rounded-l-none rounded-r-full">Subscribe</button>
                    </div>
                </div>
            </div>
            <footer className="footer p-10 bg-[#f9f9fb] text-base-content justify-items-center">
                <div>
                    <span className="footer-title">Contact Us</span>
                    <a className="link link-hover no-underline">Branding</a>
                    <a className="link link-hover no-underline">Design</a>
                    <a className="link link-hover no-underline">Marketing</a>
                    <a className="link link-hover no-underline">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover no-underline">Branding</a>
                    <a className="link link-hover no-underline">Design</a>
                    <a className="link link-hover no-underline">Marketing</a>
                    <a className="link link-hover no-underline">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover no-underline">About us</a>
                    <a className="link link-hover no-underline">Contact</a>
                    <a className="link link-hover no-underline">Jobs</a>
                    <a className="link link-hover no-underline">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover no-underline">Terms of use</a>
                    <a className="link link-hover no-underline">Privacy policy</a>
                    <a className="link link-hover no-underline">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;