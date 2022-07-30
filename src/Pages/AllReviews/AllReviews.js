import React, { useState } from 'react';

const AllReviews = () => {
    const [reviews, setReviews] = useState([]);

    useState(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='my-[60px]'>
            <div className='grid grid-cols-3 justify-items-center gap-x-6 gap-y-6'>
                {
                    reviews.map(review => <div key={review?._id} className="card max-w-sm bg-base-100 shadow-xl">
                        <div className="card-body">
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
        </div>
    );
};

export default AllReviews;