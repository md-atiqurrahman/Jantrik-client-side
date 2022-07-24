import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import img1 from '../../../../images/Blog/1.jpg';
import img2 from '../../../../images/Blog/2.jpg';
import img3 from '../../../../images/Blog/3.jpg';
import './Blog.css';

const Blog = () => {
    return (
        <div className='mr-[90px] ml-[90px] mb-[60px]'>
            <div className='flex justify-between border border-[#dddddd] py-[10px] pl-[25px] pr-[10px] mb-[30px]'>
                <div>
                    <h1 className='title text-[18px] '>From The Blog</h1>
                </div>
                <div className='flex'>
                    <div className='mr-[8px] border rounded-[3px] h-[30px] w-[30px] text-center hover:bg-[#f1ac06] text-[#b6b4b4] hover:text-white'>
                        <FontAwesomeIcon className='text-[12px]' icon={faLessThan} />
                    </div>
                    <div className='border rounded-[3px] h-[30px] w-[30px] text-center hover:bg-[#f1ac06] text-[#b6b4b4] hover:text-white'>
                        <FontAwesomeIcon className='text-[12px] ' icon={faGreaterThan} />
                    </div>
                </div>
            </div>
            <div className='flex justify-between'>
                <div class="w-[370px] bg-base-100">
                    <div className='blog-img'>
                        <a href="#">
                            <img src={img1} className="w-full mb-[18px]" alt="drill machine" />
                        </a>
                    </div>
                    <div >
                        <h2 class="title hover:text-[#f1ac06] text-[18px] leading-[25px] mb-[5px] font-medium cursor-pointer">
                            We test our products then we prepare it fo...
                        </h2>
                        <div className="author">
                            <ul className='flex  text-[#555555] text-[14px] leading-[24px]'>
                                <li className='mr-[5px] mb-[12px]'>
                                    <span>By: </span>
                                    <a href="#" className='hover:text-[#f1ac06] '>Jantrik,</a>
                                </li>
                                <li>
                                    <span>On: </span>
                                    <a href="#" className='hover:text-[#f1ac06]'>25 Jul, 2022</a>
                                </li>
                            </ul>
                        </div>
                        <div className='text-[#555555] text-[15px]'>
                            <a href="#" className='hover:text-[#f1ac06]'>Read More....</a>
                        </div>
                    </div>
                </div>
                <div class="w-[370px] bg-base-100">
                    <div className='blog-img'>
                        <a href="#">
                            <img src={img2} className="w-full mb-[18px]" alt="drill machine" />
                        </a>
                    </div>
                    <div >
                        <h2 class="title hover:text-[#f1ac06] text-[18px] leading-[25px] mb-[5px] font-medium cursor-pointer">
                            We test our products then we prepare it fo...
                        </h2>
                        <div className="author">
                            <ul className='flex  text-[#555555] text-[14px] leading-[24px]'>
                                <li className='mr-[5px] mb-[12px]'>
                                    <span>By: </span>
                                    <a href="#" className='hover:text-[#f1ac06] '>Jantrik,</a>
                                </li>
                                <li>
                                    <span>On: </span>
                                    <a href="#" className='hover:text-[#f1ac06]'>25 Jul, 2022</a>
                                </li>
                            </ul>
                        </div>
                        <div className='text-[#555555]  text-[15px]'>
                            <a href="#" className='hover:text-[#f1ac06]'>Read More....</a>
                        </div>
                    </div>
                </div>
                <div class="w-[370px] bg-base-100">
                    <div className='blog-img'>
                        <a href="#">
                            <img src={img3} className="w-full mb-[18px]" alt="drill machine" />
                        </a>
                    </div>
                    <div >
                        <h2 class="title hover:text-[#f1ac06] text-[18px] leading-[25px] mb-[5px] font-medium cursor-pointer">
                            We test our products then we prepare it fo...
                        </h2>
                        <div className="author">
                            <ul className='flex  text-[#555555] text-[14px] leading-[24px]'>
                                <li className='mr-[5px] mb-[12px]'>
                                    <span>By: </span>
                                    <a href="#" className='hover:text-[#f1ac06] '>Jantrik,</a>
                                </li>
                                <li>
                                    <span>On: </span>
                                    <a href="#" className='hover:text-[#f1ac06]'>25 Jul, 2022</a>
                                </li>
                            </ul>
                        </div>
                        <div className='text-[#555555]  text-[15px]'>
                            <a href="#" className='hover:text-[#f1ac06]'>Read More....</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;