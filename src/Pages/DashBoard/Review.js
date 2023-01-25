import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Review = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = 'ac149ecf14780c3fc166bfce6733dc79';

    const onSubmit = async (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success === true) {
                    const img = result.data.url;
                    const review = {
                        name: user?.displayName,
                        email: user?.email,
                        comment: data.comment,
                        rating: data.rating,
                        img: img,
                        city: data.city
                    };

                    // send review to database via server

                    fetch('https://jantrik-carpentary-tools-server-side.vercel.app/review', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(review)

                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Your review added successfully');
                                reset();
                            }
                            else {
                                toast.error('Failed to added a review')
                            }
                        })

                }
            })
    };


    return (
        <div className='ml-[20px]'>
            <div>
                <h1 className="text-2xl text-primary">Add a Review</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">What's your opinion about Jantrik products?</span>
                        </label>
                        <textarea
                            type="text"
                            placeholder='write here...'
                            className="textarea textarea-bordered h-24 w-full max-w-xs"
                            {...register('comment',
                                {
                                    required: {
                                        value: true,
                                        message: 'Comment is required'
                                    }
                                })}
                        />
                        <label className="label">
                            {errors.comment?.type === 'required' && <span className="label-text-alt text-red-500">{errors.comment.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your rating</span>
                        </label>
                        <input
                            type="text"
                            placeholder='1 to 5'
                            className="input input-bordered w-full max-w-xs"
                            {...register('rating', {
                                required: {
                                    value: true,
                                    message: 'Rating is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs mt-[10px]">
                        <label className="label">
                            <span className="label-text">Your photo</span>
                        </label>
                        <input
                            type="file"
                            className="input input-bordered w-full max-w-xs"
                            {...register('image', {
                                required: {
                                    value: true,
                                    message: 'Image is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs mt-[10px]">
                        <label className="label">
                            <span className="label-text">Your City</span>
                        </label>
                        <input
                            type="text"
                            placeholder='Enter your city name'
                            className="input input-bordered w-full max-w-xs"
                            {...register('city', {
                                required: {
                                    value: true,
                                    message: 'City name is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.city?.type === 'required' && <span className="label-text-alt text-red-500">{errors.city.message}</span>}
                        </label>
                    </div>

                    <input className='btn w-full max-w-xs text-white' type="submit" value='ADD' />
                </form>
            </div>
        </div>
    );
};

export default Review;