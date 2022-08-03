import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import reviews from '../../../images/BusinessSummary/reviews.svg';
import growth from '../../../images/BusinessSummary/growth.svg';
import customer from '../../../images/BusinessSummary/customer.svg';
import tools from '../../../images/BusinessSummary/fretsaw.svg';
import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='lg:mx-[90px] mb-[60px]'>
            <div className='mb-[60px] section-title'>
                <div className='border border-[#dddddd] py-[10px] text-center '>
                    <h1 className='title text-[18px] '>Our Business Summary</h1>
                </div>
            </div>
            <div className='text-center'>
                <div className="stats stats-vertical lg:stats-horizontal shadow">
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <img src={customer} className="inline-block w-8 h-8 stroke-current" alt="" />
                        </div>
                        <div className="stat-title">Our customers </div>
                        <div className="stat-value text-[#00a963]">200+</div>
                        <div className="stat-desc"> 25% more than last year</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <img src={reviews} className="inline-block w-8 h-8 stroke-current" alt="" />
                        </div>
                        <div className="stat-title">Reviews</div>
                        <div className="stat-value text-primary">93K+</div>
                        <div className="stat-desc">75% more than last month</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <img src={growth} className="inline-block w-8 h-8 stroke-current" alt="" />
                        </div>
                        <div className="stat-title">Annual revenue</div>
                        <div className="stat-value">150 M</div>
                        <div className="stat-desc">50% more than last year</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <img src={tools} className="inline-block w-8 h-8 stroke-current" alt="" />
                        </div>
                        <div className="stat-title">We have tools</div>
                        <div className="stat-value text-[#118ae4]">85+</div>
                        <div className="stat-desc">New 10 tools ready to launch</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;