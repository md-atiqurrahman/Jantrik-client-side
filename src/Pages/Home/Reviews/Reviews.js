import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useState(() => {
        fetch('https://jantrik-client-side.vercel.app/review')
            .then(res => res.json())
            .then(data => {
                const recentReviews = data.slice(-6);
                setReviews(recentReviews);
            })
    }, [])


    return (
        <div className='lg:mx-[90px] mb-[60px]'>
            <div className='flex justify-between border border-[#dddddd] py-[10px] pl-[25px] pr-[10px] mb-[30px] section-title'>
                <div>
                    <h1 className='title text-[18px] '>What Our Clients Says...</h1>
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
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-6'>
                {
                    reviews.map(review => <div key={review?._id} className="card max-w-[90%] mx-auto lg:max-w-sm bg-base-100 shadow-xl">
                        <div className="card-body text-justify">
                            <p className='text-[#555555]'>
                                {review?.comment.length <= 112 ? review?.comment : review?.comment?.slice(0, 112) + '...'}
                            </p>
                            <div className="card-actions justify-start items-center mt-[20px]">
                                <div className="avatar mr-[20px]">
                                    <div className="w-[64px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={review?.img} alt='' />
                                    </div>
                                </div>
                                <div>
                                    <h4>{review?.name}</h4>
                                    <h5>{review?.city}</h5>
                                    <p className='text-[14px]'>Ratings: <span className='text-[#f9ba48]'>{review?.rating}/5</span></p>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className='text-center mt-[24px]'>
                <Link to='/allReviews'><button className='banner-btn text-white font-normal px-[18px] py-[7px] rounded-[5px]'>Show More</button></Link>
            </div>
        </div>
    );
};

export default Reviews;