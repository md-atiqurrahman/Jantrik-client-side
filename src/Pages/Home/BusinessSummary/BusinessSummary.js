import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import reviews from '../../../images/BusinessSummary/reviews.svg';
import growth from '../../../images/BusinessSummary/growth.svg';
import customer from '../../../images/BusinessSummary/customer.svg';
import tools from '../../../images/BusinessSummary/fretsaw.svg';
import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='mx-[90px] mb-[60px]'>
            <div className=' mb-[60px]'>
                <div className='border border-[#dddddd] py-[10px] text-center '>
                    <h1 className='title text-[18px] '>Our Business Summary</h1>
                </div>
            </div>
            <div className='text-center'>
                <div class="stats shadow">
                    <div class="stat">
                        <div class="stat-figure text-primary">
                            <img src={customer} class="inline-block w-8 h-8 stroke-current" alt="" />
                        </div>
                        <div class="stat-title">Our customers </div>
                        <div class="stat-value text-[#00a963]">200+</div>
                        <div class="stat-desc"> 25% more than last year</div>
                    </div>
                    <div class="stat">
                        <div class="stat-figure text-primary">
                            <img src={reviews} class="inline-block w-8 h-8 stroke-current" alt="" />
                        </div>
                        <div class="stat-title">Reviews</div>
                        <div class="stat-value text-primary">93K+</div>
                        <div class="stat-desc">75% more than last month</div>
                    </div>
                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <img src={growth} class="inline-block w-8 h-8 stroke-current" alt="" />
                        </div>
                        <div class="stat-title">Annual revenue</div>
                        <div class="stat-value">150 M</div>
                        <div class="stat-desc">50% more than last year</div>
                    </div>
                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <img src={tools} class="inline-block w-8 h-8 stroke-current" alt="" />
                        </div>
                        <div class="stat-title">We have tools</div>
                        <div class="stat-value text-[#118ae4]">85+</div>
                        <div class="stat-desc">New 10 tools ready to launch</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;